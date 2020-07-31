import * as React from "react";
import {PositionedProps} from "@obrie/sdk";

export interface ReactPositionedProps extends PositionedProps {
    children?: React.ReactNode
}

const positionedView = (props: any): any => null;
export function Positioned(props: ReactPositionedProps): JSX.Element {
    return <positionedView {...props} />
}
