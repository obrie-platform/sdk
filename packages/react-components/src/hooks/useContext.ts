import {AppContext} from "@obrie/sdk";
import {useCallback, useEffect, useState} from "react";

export const useContext = (): AppContext => {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        const callback = () => {
            forceUpdate();
        }

        window.contextListeners.push(callback)

        return () => window.contextListeners.splice(window.contextListeners.indexOf(callback), 1)
    }, [])

    return window.context;
}
