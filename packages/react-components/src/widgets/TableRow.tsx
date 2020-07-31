import * as React from "react";
import {TableRowProps} from "@obrie/sdk";

export interface ReactTableRowProps extends TableRowProps {
}

const tableRowView = (props: any): any => null;
export function TableRow(props: ReactTableRowProps): JSX.Element {
    return <tableRowView {...props} />
}
