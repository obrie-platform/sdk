import {Orientation, EdgeInsets} from "./interface/interfaces";

declare const clearTimeout: any;
declare const setTimeout: any;
declare const window: Record<string, any>;
declare const ObrieApi: ObrieInterface;

export interface AppContext {
    routerListener(action: string): unknown;
    navigate(path: string): void;
    navigateAndReplace(path: string): void;
    route?: string;
    sessionId: string;
    ui: {
        devicePixelRatio?: number;
        orientation?: Orientation,
        size?: {
            width?: number;
            height?: number;
        },
        viewInsets?: EdgeInsets
        viewPadding?: EdgeInsets
        padding?: EdgeInsets
    }
}

let receiverId = 1;
let id = 10;

function randId() {
    return ++id;
}

export const container = createContainer();
window.receivers = {};
window.flatTree = new Map<number, ObrieElement>();
window.routerListener = (action: string): any => null;

window.context = {
    routerListener(action: string): any {
        return null;
    },
    navigate(path: string) {
        event('navigate', {
            path
        })
    },
    navigateAndReplace(path: string) {
        event('navigateAndReplace', {
            path
        })
    },
    ui: {}
} as AppContext;

window.contextListeners = []
window.updateContext = (data: any) => {
    window.context = { ...window.context, data }

    window.contextListeners.forEach((listener: any) => {
        listener()
    })
}

export interface ObrieElement<T = any> {
    _rootContainer?: any;
    controller?: T;
    reference: number;
    type: string;
    props?: Record<string, any>;
    children?: ObrieElement<T>[];
    addChildView?(element: ObrieElement<T>): void;
    removeChild?(element: ObrieElement<T>): void;
    insertBefore?(child: ObrieElement<T>, beforeChild: ObrieElement<T>): void;
    textContent?: string | number;
}

interface CreateElementOptions {
    props?: Record<string, any>;
    textContent?: string;
}

export function createContainer(): ObrieElement {
    return createElement('container')
}

export const event = (ev: string, payload: unknown): void => {
    if (typeof ObrieApi !== 'undefined') {
        ObrieApi.sendMessage(JSON.stringify({
            type: ev,
            payload
        }));
    }
}

export interface FutureError {
    message: string;
}

type SendAndReceiveType = <T>(ev: string, elementId?: number, payload?: any) => Promise<T>
export const sendAndReceive: SendAndReceiveType = <T>(ev: string, elementId?: number, payload?: any) => {
    return new Promise<T>((resolve, reject) => {
        if (typeof ObrieApi !== 'undefined') {
            const id = receiverId;
            receiverId++;

            const timeout = setTimeout(() => {
                delete window.receivers[id];
                reject({
                    message: 'Timeout error'
                } as FutureError);
            }, 10000);

            window.receivers[id] = (message: string) => {
                const result = JSON.parse(message);

                if (result.error) {
                    reject(result.error);
                } else {
                    resolve(result.value);
                }

                clearTimeout(timeout);
                delete window.receivers[id];
            }

            ObrieApi.sendMessage(JSON.stringify({
                type: ev,
                elementId: elementId,
                receiverId: id,
                payload
            }));
        }
    })
}

export function createElement(type: string, options: CreateElementOptions = {}): ObrieElement {
    const element: ObrieElement = {
        type,
        reference: randId(),
        addChildView(element: ObrieElement) {
            if (!this.children) {
                this.children = [];
            }

            window.flatTree.set(element.reference, element);
            this.children.push(element);
        },
        removeChild(element: ObrieElement) {
            window.flatTree.delete(element.reference);
            this.children.splice(this.children.indexOf(element), 1);
        },
        insertBefore(child: ObrieElement, beforeChild: ObrieElement) {
            const existingIndex = this.children.indexOf(child);

            if (existingIndex >= 0) {
                this.children.splice(existingIndex, 1);
                const beforeChildIndex = this.children.indexOf(beforeChild);
                this.children.splice(beforeChildIndex, 0, child);
            } else {
                window.flatTree.set(element.reference, child);
                const index = this.children.indexOf(beforeChild);
                this.children.splice(index, 0, child);
            }
        }
    }

    if (options.textContent) {
        element.textContent = options.textContent;
    }

    if (options.props) {
        element.props = options.props;
    }

    return element;
}

export const UIManager = {
    removeChild: (parentInstance: ObrieElement, child: ObrieElement): void => {
        parentInstance.removeChild(child);

        event('uiRemove', { 'containerRef': parentInstance.reference, 'ref': child.reference })
    },

    insertBefore: (container: ObrieElement, child: ObrieElement, before: ObrieElement): void => {
        container.insertBefore(child, before);

        event('uiInsertBefore', { 'containerRef': container.reference, 'ref': before.reference, 'element': child })
    },

    update: (element: ObrieElement, props: any): void => {
        element.props = props;

        event('uiUpdate', { 'ref': element.reference, 'props': props })
    },

    createElement: (type: string, props: unknown): ObrieElement => {
        const element = createElement(type, props)
        event('uiCreate', { 'element': element })

        return element
    },

    updateText(element: ObrieElement, text: string): void {
        element.textContent = text;
        event('uiUpdateText', { 'ref': element.reference, 'text': text })
    },

    appendChild: (parent: ObrieElement, element: ObrieElement): void => {
        parent.addChildView(element)

        event('uiAppend', { 'ref': parent.reference, 'element': element })
    },
}
