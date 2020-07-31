import * as React from "react";
import {ButtonProps} from "@obrie/sdk";

export interface ReactButtonProps extends ButtonProps {
    children: React.ReactText;
}

const buttonView = (props: any): any => null;
export function Button(props: ReactButtonProps): JSX.Element {
    return <buttonView {...props} />
}