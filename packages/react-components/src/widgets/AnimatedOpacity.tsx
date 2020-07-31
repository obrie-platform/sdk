import * as React from "react";
import {ContainerProps, AnimatedOpacityProps} from "@obrie/sdk";

export interface ReactAnimatedOpacityProps extends AnimatedOpacityProps {
    children?: React.ReactNode
}

const animatedOpacityView = (props: any): any => null;
export function AnimatedOpacity(props: ReactAnimatedOpacityProps): JSX.Element {
    return <animatedOpacityView {...props} />
}