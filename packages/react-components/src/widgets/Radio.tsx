import * as React from "react";
import {RadioController, RadioProps} from "@obrie/sdk";

export interface ReactRadioProps<T> extends RadioProps<T> {
    ref: React.RefObject<RadioController<T>>
}

const radioView = (props: any): any => null;
export const Radio = React.forwardRef((props: ReactRadioProps<any>, ref): JSX.Element => {
    return <radioView ref={ref} {...props} />
})
