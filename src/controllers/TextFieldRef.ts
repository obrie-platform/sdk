import {BaseRef} from "./BaseRef";

export interface TextFieldController {
    focus(): Promise<void>;
    blur(): Promise<void>;
}

export class TextFieldRef extends BaseRef implements TextFieldController {
    blur(): Promise<void> {
        return this.call('blur');
    }

    focus(): Promise<void> {
        return this.call('focus');
    }
}