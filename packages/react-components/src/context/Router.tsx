import * as React from 'react'
import {createContext, ReactNode, useState} from 'react'
import {match, MatchResult} from "path-to-regexp"
import {useContext} from "..";

export const RouterContext = createContext<{
    path: string,
    history: string[],
    match: MatchResult<any>,
    goBack: () => void,
    navigate: (path: string) => void
    navigateAndReplace: (path: string) => void
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

    function navigateAndReplace(path: string) {
        const [latest, ...restHistory] = history;

        context.navigateAndReplace(path)
        setHistory([
            path,
            ...restHistory
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
                history,
                path,
                navigate,
                navigateAndReplace,
                match: matchResult as MatchResult,
                goBack
            }}
        >
            {props.children}
        </RouterContext.Provider>
    );
}

export { MatchResult }