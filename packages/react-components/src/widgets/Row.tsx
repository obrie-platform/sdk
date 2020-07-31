import * as React from "react";
import {ReactNode} from "react";
import {RowProps} from "@obrie/sdk";

export interface ReactRowProps extends RowProps {
    children?: ReactNode
}

const rowView = (props: any): any => null;
export function Row(props: ReactRowProps): any {
    return <columnView {...props} />
}
