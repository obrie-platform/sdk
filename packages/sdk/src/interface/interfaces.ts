export type Brightness = 'dark' | 'light'

export type FlexibleColor = string | BridgedValue<"colorTween">;
export type FlexibleNumber = number | BridgedValue<"tween">;

export type BoxFit =
    'fill'
    | 'contain'
    | 'cover'
    | 'fitWidth'
    | 'fitHeight'
    | 'none'
    | 'scaleDown'

export interface DecorationImage {
    source: string;
    alignment: Alignment,
    fit: BoxFit
}

export interface Offset {
    x?: FlexibleNumber;
    y?: FlexibleNumber;
}

export interface BoxShadow {
    color?: FlexibleColor,
    offset?: Offset,
    blurRadius?: FlexibleNumber,
}

export interface BoxDecoration {
    color?: FlexibleColor,
    image?: DecorationImage,
    borderRadius?: FlexibleNumber,
    boxShadow?: [BoxShadow],
}

export interface EdgeInsets {
    top?: FlexibleNumber,
    left?: FlexibleNumber,
    right?: FlexibleNumber,
    bottom?: FlexibleNumber
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

export type ImageRepeat = 'repeat' | 'repeatX' | 'repeatY' | 'noRepeat'
export type BlendMode = 'clear'
    | 'src'
    | 'dst'
    | 'srcOver'
    | 'dstOver'
    | 'srcIn'
    | 'dstIn'
    | 'srcOut'
    | 'dstOut'
    | 'srcATop'
    | 'dstATop'
    | 'xor'
    | 'plus'
    | 'modulate'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'colorDodge'
    | 'colorBurn'
    | 'hardLight'
    | 'softLight'
    | 'difference'
    | 'exclusion'
    | 'multiply'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'

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
export type Overflow = 'clip' | 'visible'
export type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end'
export type StackFit = 'loose' | 'expand'
export type Orientation = 'portrait' | 'landscape'

export type TextInputType = 'text' | 'multiline' | 'number' | 'phone' | 'dateTime' | 'emailAddress' | 'url' | 'visiblePassword'
export type TextCapitalization = 'words' | 'sentences' | 'characters' | 'none'
export type TextInputAction = 'none' | 'unspecified' | 'done' | 'go' | 'search' | 'send' | 'next' | 'previous' | 'continueAction' | 'join' | 'route' | 'emergencyCall' | 'newline'
export type TextAlignVertical = 'top' | 'center' | 'bottom'
export type FloatingLabelBehavior = 'never' | 'auto' | 'always'
export type TableCellVerticalAlignment = 'top'
 | 'middle'
 | 'bottom'
 | 'baseline'
 | 'fill'

export interface TextInputFormatter {
    formatEditUpdate(oldText: string, newText: string): string;
}

export interface Rect {
    top: number;
    left: number;
    right: number;
    bottom: number;
}

export interface BorderSide {
    color?: FlexibleColor;
    width?: FlexibleNumber;
}

export type InputBorderType = 'underline' | 'outline'

export interface InputBorder {
    type: InputBorderType,
    border: BorderSide
}

export interface InputDecoration {
    labelText?: string;
    labelStyle?: TextStyle;
    helperText?: string;
    helperStyle?: TextStyle;
    helperMaxLines?: FlexibleNumber;
    hintStyle?: TextStyle;
    hintMaxLines?: FlexibleNumber;
    errorText?: string;
    errorMaxLines?: FlexibleNumber;
    floatingLabelBehavior?: FloatingLabelBehavior;
    isCollapsed?: boolean;
    isDense?: boolean;
    contentPadding?: EdgeInsets;
    filled?: boolean;
    fillColor?: FlexibleColor;
    focusColor?: FlexibleColor;
    hoverColor?: FlexibleColor;
    errorBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
    disabledBorder?: InputBorder;
    enabledBorder?: InputBorder;
    border?: InputBorder;
}

export interface TextStyle {
    inherit?: boolean;
    color?: FlexibleColor;
    backgroundColor?: FlexibleColor;
    fontSize?: FlexibleNumber;
    letterSpacing?: FlexibleNumber;
    wordSpacing?: FlexibleNumber;
    height?: FlexibleNumber;
    decoration?: TextDecoration;
    decorationColor?: FlexibleColor;
    decorationStyle?: TextDecorationStyle;
    textBaseline?: TextBaseline;
    fontWeight?: FontWeight;
}

export interface BoxConstraints {
    minWidth?: FlexibleNumber;
    maxWidth?: FlexibleNumber;
    minHeight?: FlexibleNumber;
    maxHeight?: FlexibleNumber;
}

export interface TableBorder {
    top?: BorderSide;
    right?: BorderSide;
    bottom?: BorderSide;
    left?: BorderSide;
    horizontalInside?: BorderSide;
    verticalInside?: BorderSide;
}

export type Curve = [number, number, number, number];

export interface Animation<T> {
    ref: number;
    addStatusListener: (callback: (status: AnimationStatus) => any) => any;
    removeStatusListener: (callback: (status: AnimationStatus) => any) => any;
    status: AnimationStatus;
    value: number;
    bridgeValue: BridgedValue<"animationValue">
}

export enum AnimationStatus {
    dismissed = 'dismissed',
    forward = 'forward',
    reverse = 'reverse',
    completed = 'completed',
}

export interface AnimationController<T> extends Animation<T> {
    duration: number;
    repeat(options: { reverse: boolean, min: number, max: number, period: number }): void;
    reverse(options: { from?: number }): void;
    forward(options: { from?: number }): void;
    stop(options: { cancelled?: boolean }): void;
    animateTo(target: number, options: { duration?: number, curve?: Curve }): void;
}

export type BridgedValueType = 'tween' | 'colorTween' | 'value' | 'animationValue';

export interface BridgedValue<T extends BridgedValueType> {
    bridge: boolean;
    type: T;
    ref: number;
    payload: Record<string, any>
}

export function Tween(begin: number, end: number): { animate: (animation: Animation<any>) => BridgedValue<"tween"> } {
    return {
        animate: (animation: Animation<any>) => ({
            bridge: true,
            type: "tween",
            payload: { begin, end },
            ref: animation.ref
        })
    }
}

export function ColorTween(begin: string, end: string): { animate: (animation: Animation<any>) => BridgedValue<"colorTween"> } {
    return {
        animate: (animation: Animation<any>) => ({
            bridge: true,
            type: "colorTween",
            payload: { begin, end },
            ref: animation.ref
        })
    }
}