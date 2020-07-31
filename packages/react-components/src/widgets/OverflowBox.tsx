import * as React from "react";
import {OverflowBoxProps} from "@obrie/sdk";

export interface ReactOverflowBoxProps extends OverflowBoxProps {
}

const overflowBoxView = (props: any): any => null;
export function OverflowBox(props: ReactOverflowBoxProps): JSX.Element {
    return <overflowBoxView {...props} />
}
