import {
    Alignment, Axis,
    BoxConstraints, BoxDecoration,
    Brightness,
    Clip,
    CrossAxisAlignment,
    EdgeInsets,
    MainAxisAlignment,
    MainAxisSize, TextAlign,
    TextBaseline,
    TextDirection, TextOverflow, TextStyle,
    VerticalDirection
} from "./interfaces";
import {PropsWithChildren} from "react";

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
    label?: string;
}