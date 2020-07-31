import * as React from "react";
import {ReactText} from "react";
import {TextProps} from "@obrie/sdk";

export interface ReactTextProps extends TextProps {
    children?: ReactText
}

const textView = (props: any): any => null;
export function Text(props: ReactTextProps): any {
    return <textView {...props} />
}
