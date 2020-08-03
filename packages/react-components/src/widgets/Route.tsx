import * as React from "react";
import {RouteProps} from "@obrie/sdk";
import {useRouter} from "..";
import {Match, match} from "path-to-regexp";

export interface ReactRouteProps extends RouteProps {
    children?: React.ReactNode
    render?: (props: { match: Match }) => JSX.Element
}

const route = (props: any): any => null;
export function Route(props: ReactRouteProps): JSX.Element {
    const router = useRouter()
    const matcher = match(props.path)
    const matchResult = matcher(router.path)

    if (router.history.some(elm => matcher(elm))) {
        return <route {...props} current={matchResult ? router.path : null}>
            { props.render({ match: matchResult }) }
        </route>
    }

    return <route {...props} />
}
