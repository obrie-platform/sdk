import {sendAndReceive} from "../uimanager";

window.persistentDataListeners = []

export function listenPersistentData(keys: string[], callback: (key: string, value: unknown) => void): () => void {
    window.persistentDataListeners.push([keys, callback])

    return () => {
        const index = window.persistentDataListeners.findIndex(([, fCallback]: any) => fCallback === callback)
        window.persistentDataListeners.splice(index, 1)
    }
}

export function setPersistentData(key: string, value: unknown, personal = false): Promise<void> {
    return sendAndReceive<void>('setPersistentData', null, {
        key, value, personal
    })
}

export function getPersistentData<T>(keys: string[]): Promise<T> {
    return sendAndReceive<T>('getPersistentData', null, {
        keys
    })
}
