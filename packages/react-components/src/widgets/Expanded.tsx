import * as React from "react";
import {ReactNode} from "react";
import {ExpandedProps} from "@obrie/sdk";

export interface ReactExpandedProps extends ExpandedProps {
    children?: ReactNode
}

const expandedView = (props: any): any => null;
export function Expanded(props: ReactExpandedProps): any {
    return <expandedView {...props} />
}
