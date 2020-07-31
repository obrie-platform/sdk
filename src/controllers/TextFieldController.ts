import {BaseRef} from "./BaseRef";

export interface TextFieldControllerModel {
    focus(): Promise<void>;
    blur(): Promise<void>;
}

export class TextFieldController extends BaseRef implements TextFieldControllerModel {
    blur(): Promise<void> {
        return this.call('blur');
    }

    focus(): Promise<void> {
        return this.call('focus');
    }
}