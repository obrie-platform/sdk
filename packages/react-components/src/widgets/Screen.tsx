import * as React from "react";
import {ReactNode} from "react";
import {ScreenProps} from "@obrie/sdk";

export interface ReactScreenProps extends ScreenProps {
    children?: ReactNode
}

const screen = (props: any): any => null;
export function Screen(props: ReactScreenProps): any {
    return <screen {...props} />
}
