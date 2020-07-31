import * as React from "react";
import {ReactNode} from "react";
import {FormProps} from "@obrie/sdk";

export interface ReactFormProps extends FormProps {
    children?: ReactNode
}

const formView = (props: any): any => null;
export function Form(props: ReactFormProps): any {
    return <formView {...props} />
}
