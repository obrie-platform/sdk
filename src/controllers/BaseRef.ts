import {sendAndReceive} from "../uimanager";

export abstract class BaseRef {
    elementId?: number;

    call(method: string, args?: Record<string, any>) {
        return sendAndReceive<any>('callController', this.elementId, {
            method,
            args
        })
    }
}