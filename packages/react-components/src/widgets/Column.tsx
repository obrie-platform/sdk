import * as React from "react";
import {ReactNode} from "react";
import {ColumnProps} from "@obrie/sdk";

export interface ReactColumnProps extends ColumnProps {
    children?: ReactNode
}

const columnView = (props: any): any => null;
export function Column(props: ReactColumnProps): any {
    return <columnView {...props} />
}
