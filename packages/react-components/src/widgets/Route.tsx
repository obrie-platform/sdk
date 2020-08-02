import * as React from "react";
import {RouteProps} from "@obrie/sdk";
import {useRouter} from "../hooks/useRouter";

export interface ReactRouteProps extends RouteProps {
    children?: React.ReactNode
    render?: () => JSX.Element
}

const route = (props: any): any => null;
export function Route(props: ReactRouteProps): JSX.Element {
    const router = useRouter()

    if (router.match(props.path, router.path)) {
        return <route {...props}>
            { props.render() }
        </route>
    }

    return <route {...props} />
}
