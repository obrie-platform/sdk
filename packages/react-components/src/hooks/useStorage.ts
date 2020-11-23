import {getPersistentData, listenPersistentData} from "@obrie/sdk";
import {useEffect, useState} from "react";

type PersistentData<T> = {
    isReady: boolean;
    data: T
}

export const usePersistentStorage = <T = {[key: string]: unknown}, Y extends keyof T = keyof T>(keys: Y[], observe: boolean = false): PersistentData<{ [key in Y]: T[key]}> => {
    const [data, setData] = useState({
        isReady: false,
        data: null
    })

    useEffect(() => {
        const load = async () => {
            const loadedData = await getPersistentData(keys as string[])

            setData({
                isReady: true,
                data: loadedData
            })
        }
        load()

        if (observe) {
            const disposer = listenPersistentData(keys as string[], (key, value) => {
                const items = {...data.data}
                items[key] = value
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
