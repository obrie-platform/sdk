export type Brightness = 'dark' | 'light'

export type BoxFit =
    'fill'
    | 'contain'
    | 'cover'
    | 'fitWidth'
    | 'fitHeight'
    | 'none'
    | 'scaleDown'

export interface DecorationImage {
    alignment: Alignment,
    fit: BoxFit
}

export interface Offset {
    x?: number;
    y?: number;
}

export interface BoxShadow {
    color?: string,
    offset?: Offset,
    blurRadius?: number,
}

export interface BoxDecoration {
    color?: string,
    image?: DecorationImage,
    borderRadius?: number,
    boxShadow?: [BoxShadow],
}

export interface EdgeInsets {
    top?: number,
    left?: number,
    right?: number,
    bottom?: number
}

export type Alignment =
    'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'centerLeft'
    | 'centerRight'
    | 'center'

export type CrossAxisAlignment =
    'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'baseline'

export type MainAxisAlignment =
    'start'
    | 'end'
    | 'center'
    | 'spaceBetween'
    | 'spaceAround'
    | 'spaceEvenly'

export type MainAxisSize = 'min' | 'max'
export type TextBaseline = 'alphabetic' | 'ideographic'
export type TextDirection = 'rtl' | 'ltr'
export type Axis = 'horizontal' | 'vertical'
export type VerticalDirection = 'up' | 'down'

export type Clip = 'none' | 'hardEdge' | 'antiAlias' | 'antiAliasWithSaveLayer'
export type FontWeight = 'normal' | 'semibold' | 'bold'
export type TextDecoration = 'none' | 'underline' | 'overline' | 'lineThrough'
export type TextDecorationStyle = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy'
export type TextOverflow = 'clip' | 'fade' | 'ellipsis' | 'visible'
export type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end'

export interface TextStyle {
    inherit?: boolean;
    color?: string;
    backgroundColor?: string;
    fontSize?: number;
    letterSpacing?: number;
    wordSpacing?: number;
    height?: number;
    decoration?: TextDecoration;
    decorationColor?: string;
    decorationStyle?: TextDecorationStyle;
    textBaseline?: TextBaseline;
    fontWeight?: FontWeight;
}

export interface BoxConstraints {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
}