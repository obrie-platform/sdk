import * as React from "react";
import {RouteProps} from "@obrie/sdk";
import {RouteProps as RouteComponentProps, useRouter} from "..";
import {match} from "path-to-regexp";
import {useEffect, useState} from "react";

export interface ReactRouteProps extends RouteProps {
    children?: React.ReactNode
    render?: (props: RouteComponentProps<any>) => JSX.Element
}

const route = (props: any): any => null;
export function Route(props: ReactRouteProps): JSX.Element {
    const router = useRouter()
    const matcherFunc = match(props.path)

    const [initialMatchResult, setInitialMatchResult] = useState(null)
    const matchHistory = router.history.some(elm => matcherFunc(elm))

    useEffect(() => {
        if (!initialMatchResult) {
            const localMatchResult = matcherFunc(router.path)

            if (localMatchResult) {
                setInitialMatchResult(localMatchResult)
            }
        }

        if (!matchHistory && initialMatchResult) {
            setInitialMatchResult(null)
        }
    })

    if (initialMatchResult) {
        return <route {...props} current={initialMatchResult}>
            { props.render({ match: initialMatchResult } as RouteComponentProps<any>) }
        </route>
    }

    return <route {...props} />
}
