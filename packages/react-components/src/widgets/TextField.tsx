import * as React from "react";
import {TextFieldController, TextFieldProps} from "@obrie/sdk";

export interface ReactTextFieldProps extends TextFieldProps {
    ref: React.RefObject<TextFieldController>
}

const textFieldView = (props: any): any => null;
export const TextField = React.forwardRef((props: ReactTextFieldProps, ref): JSX.Element => {
    return <textFieldView ref={ref} {...props} />
})
