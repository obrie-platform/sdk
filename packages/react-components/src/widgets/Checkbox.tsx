import * as React from "react";
import {CheckboxController, CheckboxProps} from "@obrie/sdk";

export interface ReactCheckboxProps extends CheckboxProps {
    ref: React.RefObject<CheckboxController>
}

const checkboxView = (props: any): any => null;
export const Checkbox = React.forwardRef((props: ReactCheckboxProps, ref): JSX.Element => {
    return <checkboxView ref={ref} {...props} />
})
