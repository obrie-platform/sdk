import {BaseRef} from "./BaseRef";

export interface CheckboxControllerModel {
    setValue(value: boolean): Promise<void>;
}

export class CheckboxController extends BaseRef implements CheckboxControllerModel {
    setValue(value: boolean): Promise<void> {
        return this.call('setValue', { value });
    }
}