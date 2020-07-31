import ReactReconciler from 'react-reconciler';
import {UIManager, ObrieElement, container, TextFieldController} from '@obrie/sdk';

function deepDiff(prev: any, next: any) {
    if (Object.prototype.toString.call(prev) !== Object.prototype.toString.call(next)) {
        return true;
    }

    if (Object.prototype.toString.call(prev) === '[object Function]') {
        return false;
    }

    if (Object.prototype.toString.call(prev) === '[object Object]') {
        const result = diff(prev, next);

        if (result) {
            return true;
        }

        return false;
    }

    if (Object.prototype.toString.call(prev) === '[object Array]') {
        for (const [arrIndex, arrItem] of prev.entries()) {
            if (deepDiff(arrItem, next[arrIndex])) {
                return true;
            }
        }

        return false;
    }

    if (prev !== next) {
        return true;
    }

    return false;
}

function diff(prev: any, next: any) {
    const p = Object.keys(prev);
    const n = Object.keys(next);

    if (p.length !== n.length) {
        return true;
    }

    for (const key of p) {
        if (deepDiff(prev[key], next[key])) {
            return true;
        }
    }

    return false;
}

const rootHostContext = {};
const childHostContext = {};

const hostConfig: any = {
    now: Date.now,
    getRootHostContext: () => {
        return rootHostContext;
    },
    prepareForCommit: () => {},
    resetAfterCommit: () => {
    },
    getChildHostContext: () => {
        return childHostContext;
    },
    shouldSetTextContent: (type: any, props: any) => {
        return false;
    },
    createInstance: (type: any, newProps: any, rootContainerInstance: any, _currentHostContext: any, workInProgress: any) => {
        const { children, ...props } = newProps;

        const instance = UIManager.createElement(type, { props: Object.keys(props).length ? props : null })

        if (type === 'textFieldView') {
            instance.controller = new TextFieldController();
            instance.controller.elementId = instance.reference;
        }

        return instance;
    },
    createTextInstance: (text: any) => {
        return UIManager.createElement('textView', { textContent: text })
    },
    appendInitialChild: (parent: ObrieElement, child: ObrieElement) => {
        UIManager.appendChild(parent, child);
    },
    appendChild(parent: ObrieElement, child: ObrieElement) {
        UIManager.appendChild(parent, child);
    },
    finalizeInitialChildren: (domElement: any, type: any, props: any) => {},
    supportsMutation: true,

    appendChildToContainer: (parent: ObrieElement, child: ObrieElement) => {
        UIManager.appendChild(parent, child);
    },
    prepareUpdate(domElement: any, oldProps: any, newProps: any) {
        return true;
    },
    commitUpdate(domElement: ObrieElement, updatePayload: any, type: any, oldProps: any, newProps: any) {
        const { children, ...props } = newProps;
        const { children: c2, ...old } = oldProps;

        if (diff(props, old)) {
            UIManager.update(domElement, props);
        } else {
            domElement.props = props;
        }
    },
    commitTextUpdate(textInstance: ObrieElement, oldText: any, newText: any) {
        UIManager.updateText(textInstance, newText)
    },
    removeChild(parentInstance: ObrieElement, child: ObrieElement) {
        UIManager.removeChild(parentInstance, child);
    },
    insertInContainerBefore(container: ObrieElement, child: ObrieElement, before: ObrieElement) {
        UIManager.insertBefore(container, child, before);
    },
    insertBefore(parent: ObrieElement, child: ObrieElement, before: ObrieElement) {
        UIManager.insertBefore(parent, child, before);
    },
    getPublicInstance(instance: ObrieElement) {
        return instance.controller;
    }
};
const ReactReconcilerInst = ReactReconciler(hostConfig);
const ObrieRenderer = {
    render: (reactElement: any, callback?: any) => {
        if (!container._rootContainer) {
            container._rootContainer = ReactReconcilerInst.createContainer(container, false, null);
        }

        ReactReconcilerInst.updateContainer(reactElement, container._rootContainer, null, callback);
        return ReactReconcilerInst.getPublicRootInstance(container._rootContainer)
    }
};

export { ObrieRenderer }