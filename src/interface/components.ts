import {
    Alignment, Axis,
    BoxConstraints, BoxDecoration,
    Brightness,
    Clip,
    CrossAxisAlignment,
    EdgeInsets, InputDecoration,
    MainAxisAlignment,
    MainAxisSize, Overflow, StackFit, TextAlign, TextAlignVertical,
    TextBaseline, TextCapitalization,
    TextDirection, TextInputAction, TextInputFormatter, TextInputType, TextOverflow, TextStyle,
    VerticalDirection
} from "./interfaces";

export interface ButtonProps {
    textColor?: string;
    disabledTextColor?: string;
    color?: string;
    disabledColor?: string;
    focusColor?: string;
    hoverColor?: string;
    highlightColor?: string;
    splashColor?: string;
    colorBrightness?: Brightness;
    elevation?: number;
    focusElevation?: number;
    hoverElevation?: number;
    highlightElevation?: number;
    disabledElevation?: number;
    autofocus?: boolean;
    padding?: EdgeInsets;
    clipBehavior?: Clip;
    onPress?: (data: any) => any
}

export interface ColumnProps {
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    crossAxisAlignment?: CrossAxisAlignment;
    textDirection?: TextDirection;
    verticalDirection?: VerticalDirection;
    textBaseline?: TextBaseline;
}

export interface ContainerProps {
    width?: number // @ not implemented
    height?: number // @ not implemented
    constraints?: BoxConstraints // @ not implemented
    alignment?: Alignment
    padding?: EdgeInsets | number
    margin?: EdgeInsets | number
    decoration?: BoxDecoration // @ not implemented
    foregroundDecoration?: BoxDecoration // @ not implemented
    clipBehavior?: Clip // @ not implemented
}

export interface ExpandedProps {
    flex?: number;
}

export interface FormProps {
    onSubmit?: (data: any) => any
}

export interface ListViewProps {
    scrollDirection?: Axis;
    reverse?: boolean;
    shrinkWrap?: boolean;
    padding?: Alignment;
}

export interface RowProps {
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    crossAxisAlignment?: CrossAxisAlignment;
    textDirection?: TextDirection;
    verticalDirection?: VerticalDirection;
    textBaseline?: TextBaseline;
}

export interface ScreenProps {
    title?: string;
    brightness?: Brightness;
    appBar?: {
        backgroundColor: string;
    };
    backgroundColor?: string;
}

export interface TextProps {
    style?: TextStyle;
    textDirection?: TextDirection;
    softWrap?: boolean;
    overflow?: TextOverflow;
    textScaleFactor?: number;
    maxLines?: number;
    textAlign?: TextAlign;
}

export interface TextFieldProps {
    ref?: (ref: any) => any;
    name?: string;
    placeholder?: string;
    keyboardType?: TextInputType;
    textAlign?: TextAlign;
    textDirection?: TextDirection;
    textCapitalization?: TextCapitalization;
    textInputAction?: TextInputAction;
    textAlignVertical?: TextAlignVertical;
    obscuringCharacter?: string;
    obscureText?: boolean;
    maxLines?: number;
    minLines?: number;
    maxLengthEnforced?: boolean;
    maxLength?: number;
    minLength?: number;
    expands?: boolean;
    autocorrect?: boolean;
    enableSuggestions?: boolean;
    enabled?: boolean;
    style?: TextStyle;
    readOnly?: boolean;
    autofocus?: boolean;
    showCursor?: boolean;
    label?: string;
    decoration?: InputDecoration;
    keyboardAppearance?: Brightness;
    inputFormatters?: TextInputFormatter[];
    onChanged?: (text: string) => any;
    onEditingComplete?: (text: string) => any;
    onSubmitted?: (text: string) => any;
}

export interface TouchableProps {
    onTapDown?: () => any;
    onTapUp?: () => any;
    onTap?: () => any;
    onTapCancel?: () => any;
    onDoubleTap?: () => any;
    onLongPress?: () => any;
    onLongPressStart?: () => any;
    onLongPressUp?: () => any;
    onLongPressEnd?: () => any;
}

export interface StackProps {
    overflow?: Overflow;
    fit?: StackFit;
}

export interface PositionedProps {
    position: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    } | 'fill'
    width?: number;
    height?: number;
}

export interface SafeAreaProps {
    top?: boolean;
    left?: boolean;
    right?: boolean;
    bottom?: boolean;
    minimum?: EdgeInsets;
    maintainBottomViewPadding?: boolean;
}