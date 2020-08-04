import {BaseRef} from "./BaseRef";

export interface SliderControllerModel {
    setValue(value: number): Promise<void>;
}

export class SliderController extends BaseRef implements SliderControllerModel {
    setValue(value: number): Promise<void> {
        return this.call('setValue', { value });
    }
}