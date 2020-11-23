import {getPersistentData, listenPersistentData, sendAndReceive} from "@obrie/sdk";
import {useEffect, useState} from "react";

type PersistentData = {
    isReady: boolean;
    data: unknown[]
}

export const usePersistentStorage = (keys: string[], observe: boolean = false): PersistentData => {
    const [data, setData] = useState<PersistentData>({
        isReady: false,
        data: null
    })

    useEffect(() => {
        const load = async () => {
            const loadedData = await getPersistentData(keys)

            setData({
                isReady: true,
                data: loadedData as any[]
            })
        }
        load()

        if (observe) {
            const disposer = listenPersistentData(keys, (key, value) => {
                const keyIndex = keys.indexOf(key)
                const items = [...data.data]
                items[keyIndex] = value
                setData({
                    ...data,
                    data: items
                })
            })

            return () => disposer()
        }
    }, [])

    return data
}
