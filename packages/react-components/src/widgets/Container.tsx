import * as React from "react";
import {ContainerProps} from "@obrie/sdk";

export interface ReactContainerProps extends ContainerProps {
    children?: React.ReactNode
}

const containerView = (props: any): any => null;
export function Container(props: ReactContainerProps): JSX.Element {
    return <containerView {...props} />
}