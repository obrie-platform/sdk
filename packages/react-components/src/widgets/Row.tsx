import * as React from "react";
import {RowProps} from "@obrie/sdk";

export interface ReactRowProps extends RowProps {
    children?: React.ReactNode
}

const rowView = (props: any): any => null;
export function Row(props: ReactRowProps): JSX.Element {
    return <rowView {...props} />
}
