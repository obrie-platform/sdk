import {Orientation, EdgeInsets} from "./interface/interfaces";
import {TextFieldController} from "./controllers/TextFieldController";

declare const clearTimeout: Function;
declare const setTimeout: Function;
declare const window: Record<any, any>;
declare const ObrieApi: ObrieInterface;

export interface AppContext {
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

window.context = {
    ui: {}
} as AppContext;

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

export function createContainer() {
    return createElement('container')
}

export const event = (ev: string, payload: any) => {
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

export const sendAndReceive: <T>(ev: string, elementId?: number, payload?: any) => Promise<T> = (ev: string, elementId?: number, payload?: any) => {
    return new Promise<any>((resolve, reject) => {
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
    removeChild: (parentInstance: ObrieElement, child: ObrieElement) => {
        parentInstance.removeChild(child);

        event('uiRemove', { 'containerRef': parentInstance.reference, 'ref': child.reference })
    },

    insertBefore: (container: ObrieElement, child: ObrieElement, before: ObrieElement) => {
        container.insertBefore(child, before);

        event('uiInsertBefore', { 'containerRef': container.reference, 'ref': before.reference, 'element': child })
    },

    update: (element: ObrieElement, props: any) => {
        element.props = props;

        event('uiUpdate', { 'ref': element.reference, 'props': props })
    },

    createElement: (type: string, props: any) => {
        const element = createElement(type, props)
        event('uiCreate', { 'element': element })

        return element
    },

    updateText(element: ObrieElement, text: string) {
        element.textContent = text;
        event('uiUpdateText', { 'ref': element.reference, 'text': text })
    },

    appendChild: (parent: ObrieElement, element: ObrieElement) => {
        parent.addChildView(element)

        event('uiAppend', { 'ref': parent.reference, 'element': element })
    },
}