import * as React from "react";
import {TabProps} from "@obrie/sdk";

export interface ReactTabProps extends TabProps {
    children?: React.ReactNode
    child?: JSX.Element
}

const tabView = (props: any): any => null;
export function Tab(props: ReactTabProps): JSX.Element {
    return <tabView {...props} />
}
