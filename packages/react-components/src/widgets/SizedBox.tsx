import * as React from "react";
import {SizedBoxProps} from "@obrie/sdk";

export interface ReactSizedBoxProps extends SizedBoxProps {
    children?: React.ReactNode
}

const sizedBoxView = (props: any): any => null;
export function SizedBox(props: ReactSizedBoxProps): JSX.Element {
    return <sizedBoxView {...props} />
}
