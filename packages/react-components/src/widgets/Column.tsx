import * as React from "react";
import {ColumnProps} from "@obrie/sdk";

export interface ReactColumnProps extends ColumnProps {
    children?: React.ReactNode
}

const columnView = (props: any): any => null;
export function Column(props: ReactColumnProps): JSX.Element {
    return <columnView {...props} />
}
