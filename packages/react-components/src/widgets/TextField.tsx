import * as React from "react";
import {TextFieldProps} from "@obrie/sdk";

export interface ReactTextFieldProps extends TextFieldProps {
}

const textFieldView = (props: any): any => null;
export function TextField(props: ReactTextFieldProps): any {
    return <textFieldView {...props} />
}
