import * as React from "react";
import {ReactText} from "react";
import {ButtonProps} from "@obrie/sdk";

export interface ReactButtonProps extends ButtonProps {
    children: ReactText;
}

const buttonView = (props: any): any => null;
export function Button(props: ReactButtonProps): any {
    return <buttonView {...props} />
}