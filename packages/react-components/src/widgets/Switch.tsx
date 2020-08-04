import * as React from "react";
import {CheckboxController, SwitchProps} from "@obrie/sdk";

export interface ReactSwitchProps extends SwitchProps {
    ref: React.RefObject<CheckboxController>
}

const switchView = (props: any): any => null;
export const Switch = React.forwardRef((props: ReactSwitchProps, ref): JSX.Element => {
    return <switchView ref={ref} {...props} />
})
