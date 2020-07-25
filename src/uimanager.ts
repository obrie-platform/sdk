export interface ObrieElement {
    _rootContainer?: any;
    reference: number;
    type: string;
    props?: Record<string, any>;
    children?: ObrieElement[];
    addChildView?(element: ObrieElement): void;
    removeChild?(element: ObrieElement): void;
    insertBefore?(child: ObrieElement, beforeChild: ObrieElement): void;
    textContent?: string | number;
}

interface CreateElementOptions {
    props?: Record<string, any>;
    textContent?: string;
}

export function createContainer() {
    return createElement('container')
}

const event = (ev: string, payload: any) => {
    if (typeof ObrieApi !== 'undefined') {
        ObrieApi.sendMessage(JSON.stringify({
            type: ev,
            payload
        }));
    }
}

if (typeof ObrieApi !== 'undefined') {
    ObrieApi.registerCallback(message => {
        const values = JSON.parse(message)

        if (values.type === 'call') {
            const { ref, property, args } = values;

            flatTree.get(ref).props[property](...args)
        }
    })
}

let id = 10;

function randId() {
    return ++id;
}

export const container = createContainer();
export const flatTree = new Map<number, ObrieElement>();

export function createElement(type: string, options: CreateElementOptions = {}): ObrieElement {
    const element: ObrieElement = {
        type,
        reference: randId(),
        addChildView(element: ObrieElement) {
            if (!this.children) {
                this.children = [];
            }

            flatTree.set(element.reference, element);
            this.children.push(element);
        },
        removeChild(element: ObrieElement) {
            flatTree.delete(element.reference);
            this.children.splice(this.children.indexOf(element), 1);
        },
        insertBefore(child: ObrieElement, beforeChild: ObrieElement) {
            const existingIndex = this.children.indexOf(child);

            if (existingIndex >= 0) {
                this.children.splice(existingIndex, 1);
                const beforeChildIndex = this.children.indexOf(beforeChild);
                this.children.splice(beforeChildIndex, 0, child);
            } else {
                flatTree.set(element.reference, child);
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

        event('uiRemove', { 'ref': child.reference })
    },

    insertBefore: (container: ObrieElement, child: ObrieElement, before: ObrieElement) => {
        container.insertBefore(child, before);

        event('uiInsertBefore', { 'ref': before.reference, 'element': child })
    },

    update: (element: ObrieElement, props: any) => {
        element.props = props;

        event('uiUpdate', { 'ref': element.reference, 'props': props })
    },

    createElement: (type: string, props: any) => {
        return createElement(type, { props: Object.keys(props).length ? props : null })
    },

    appendChild: (parent: ObrieElement, element: ObrieElement) => {
        parent.addChildView(element)

        event('uiAppend', { 'ref': parent.reference, 'element': element })
    },
}