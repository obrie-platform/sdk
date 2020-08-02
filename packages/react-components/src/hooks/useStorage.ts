import {sendAndReceive} from "@obrie/sdk";

export const useStorage = () => {
    return {
        async set(key: string, value: string) {
            return sendAndReceive('storageSet', null, {
                key, value
            })
        },

        async get(key: string): Promise<string> {
            return sendAndReceive('storageGet', null, {
                key
            })
        }
    }
}