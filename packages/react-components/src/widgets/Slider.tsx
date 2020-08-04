import * as React from "react";
import {SliderController, SliderProps} from "@obrie/sdk";

export interface ReactSliderProps extends SliderProps {
    ref: React.RefObject<SliderController>
}

const sliderView = (props: any): any => null;
export const Slider = React.forwardRef((props: ReactSliderProps, ref): JSX.Element => {
    return <sliderView ref={ref} {...props} />
})
