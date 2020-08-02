import * as React from 'react'
import {createContext, ReactNode, useState} from 'react'
import {Match, match} from "path-to-regexp"
import {useContext} from "..";

export const RouterContext = createContext<{
    path: string,
    match: Match<any>,
    goBack: () => void,
    navigate: (path: string) => void
}>(null)

export function Router(props: { children: ReactNode }) {
    const [history, setHistory] = useState(['/'])
    const [path, setPath] = useState("/")
    const context = useContext()

    function navigate(path: string) {
        context.navigate(path)
        setHistory([
            path,
            ...history
        ])
        setPath(path)
    }

    function goBack() {
        const [current, ...prev] = history

        setHistory([
            ...prev
        ])
        setPath(prev[0])
    }

    context.routerListener = (action: string) => {
        if (action == 'goBack') {
            goBack()
        }
    }

    const matchResult = match(path)(path)

    return (
        <RouterContext.Provider
            value={{
                path,
                navigate,
                match: matchResult,
                goBack
            }}
        >
            {props.children}
        </RouterContext.Provider>
    );
}