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

    const [matchResult, setMatchResult] = useState(null)

    useEffect(() => {
        const localMatchResult = matcherFunc(router.path)

        if (!matchResult) {
            setMatchResult(localMatchResult)
        }
    })

    if (router.history.some(elm => matcherFunc(elm)) || matchResult) {
        return <route {...props} current={matchResult}>
            { props.render({ match: matchResult } as RouteComponentProps<any>) }
        </route>
    }

    return <route {...props} />
}
