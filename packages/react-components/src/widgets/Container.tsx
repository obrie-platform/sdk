import * as React from "react";
import {ReactNode} from "react";
import {ContainerProps} from "@obrie/sdk";

export interface ReactContainerProps extends ContainerProps {
    children?: ReactNode
}

const containerView = (props: any): any => null;
export function Container(props: ReactContainerProps): any {
    return <containerView {...props} />
}