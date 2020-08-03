import * as React from "react";
import {RouteProps} from "@obrie/sdk";
import {RouteProps as RouteComponentProps, useRouter} from "..";
import {match} from "path-to-regexp";

export interface ReactRouteProps extends RouteProps {
    children?: React.ReactNode
    render?: (props: RouteComponentProps<any>) => JSX.Element
}

const route = (props: any): any => null;
export function Route(props: ReactRouteProps): JSX.Element {
    const router = useRouter()
    const matcher = match(props.path)
    const matchResult = matcher(router.path)

    if (router.history.some(elm => matcher(elm)) || matchResult) {
        return <route {...props} current={matchResult ? router.path : null}>
            { props.render({ match: matchResult } as RouteComponentProps<any>) }
        </route>
    }

    return <route {...props} />
}
