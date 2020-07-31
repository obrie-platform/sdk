import * as React from "react";
import {FormProps} from "@obrie/sdk";

export interface ReactFormProps extends FormProps {
    children?: React.ReactNode
    onSubmit?: (data: any) => any
}

const formView = (props: any): any => null;
export function Form(props: ReactFormProps): JSX.Element {
    return <formView {...props} />
}
