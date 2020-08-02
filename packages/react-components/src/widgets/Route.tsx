import * as React from "react";
import {RouteProps} from "@obrie/sdk";
import {useRouter} from "..";
import {Match, match, MatchResult} from "path-to-regexp";

export interface ReactRouteProps extends RouteProps {
    children?: React.ReactNode
    render?: (props: { match: Match }) => JSX.Element
}

const route = (props: any): any => null;
export function Route(props: ReactRouteProps): JSX.Element {
    const router = useRouter()
    const matchResult = match(props.path)(router.path)

    if (match(props.path)(router.path)) {
        return <route {...props} current={router.path}>
            { props.render({ match: matchResult }) }
        </route>
    }

    return <route {...props} />
}
