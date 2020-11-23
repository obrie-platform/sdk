import {AppContext, listenRealtime, RealtimeCallback} from "@obrie/sdk";
import {useEffect} from "react";

export const useRealtime = (topics: string[], callback: RealtimeCallback): AppContext => {
    useEffect(() => {
        const disposer = listenRealtime(topics, callback)

        return () => disposer()
    }, [])

    return window.context;
}
