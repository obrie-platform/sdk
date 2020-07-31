import * as React from "react";
import {TableProps} from "@obrie/sdk";

export interface ReactTableProps extends TableProps {
}

const tableView = (props: any): any => null;
export function Table(props: ReactTableProps): JSX.Element {
    return <tableView {...props} />
}
