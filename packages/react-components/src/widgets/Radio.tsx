import * as React from "react";
import {RadioController, SliderProps} from "@obrie/sdk";

export interface ReactRadioProps extends SliderProps {
    ref: React.RefObject<RadioController<any>>
}

const radioView = (props: any): any => null;
export const Radio = React.forwardRef((props: ReactRadioProps, ref): JSX.Element => {
    return <radioView ref={ref} {...props} />
})
