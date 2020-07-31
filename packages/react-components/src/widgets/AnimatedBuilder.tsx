import * as React from "react";
import {Animation} from "@obrie/sdk";

export interface ReactAnimatedBuilderProps {
    children?: React.ReactNode
    animation: Animation<any>
}

const animatedBuilderView = (props: any): any => null;
export function AnimatedBuilder(props: ReactAnimatedBuilderProps): JSX.Element {
    return <animatedBuilderView {...props} animation={props.animation.bridgeValue} />
}