import * as React from "react";
import {AnimatedContainerProps} from "@obrie/sdk";

export interface ReactAnimatedContainerProps extends AnimatedContainerProps {
    children?: React.ReactNode
}

const animatedContainerView = (props: any): any => null;
export function AnimatedContainer(props: ReactAnimatedContainerProps): JSX.Element {
    return <animatedContainerView {...props} />
}