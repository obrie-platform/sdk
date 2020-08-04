import {BaseRef} from "./BaseRef";

export interface RadioControllerModel<T> {
    setValue(value: T): Promise<void>;
}

export class RadioController<T> extends BaseRef implements RadioControllerModel<T> {
    setValue(value: T): Promise<void> {
        return this.call('setValue', { value });
    }
}