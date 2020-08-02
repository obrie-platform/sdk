import {
    Alignment,
    Axis, BlendMode, BorderSide,
    BoxConstraints,
    BoxDecoration, BoxFit,
    BridgedValue,
    Brightness,
    Clip,
    CrossAxisAlignment,
    Curve,
    EdgeInsets,
    FlexibleColor,
    FlexibleNumber, ImageRepeat,
    InputDecoration,
    MainAxisAlignment,
    MainAxisSize,
    Overflow, Rect,
    StackFit,
    TableBorder,
    TableCellVerticalAlignment,
    TextAlign,
    TextAlignVertical,
    TextBaseline,
    TextCapitalization,
    TextDirection,
    TextInputAction,
    TextInputFormatter,
    TextInputType,
    TextOverflow,
    TextStyle,
    VerticalDirection
} from "./interfaces";
import {ObrieElement} from "../uimanager";

export interface ButtonProps {
    textColor?: FlexibleColor;
    disabledTextColor?: FlexibleColor;
    color?: FlexibleColor;
    disabledColor?: FlexibleColor;
    focusColor?: FlexibleColor;
    hoverColor?: FlexibleColor;
    highlightColor?: FlexibleColor;
    splashColor?: FlexibleColor;
    colorBrightness?: Brightness;
    elevation?: FlexibleNumber;
    focusElevation?: FlexibleNumber;
    hoverElevation?: FlexibleNumber;
    highlightElevation?: FlexibleNumber;
    disabledElevation?: FlexibleNumber;
    autofocus?: boolean;
    padding?: EdgeInsets | FlexibleNumber;
    clipBehavior?: Clip;
    border?: BorderSide;
    borderRadius?: FlexibleNumber;
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
    width?: FlexibleNumber
    height?: FlexibleNumber
    constraints?: BoxConstraints // @ not implemented
    alignment?: Alignment
    padding?: EdgeInsets | FlexibleNumber
    margin?: EdgeInsets | FlexibleNumber
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
    padding?: EdgeInsets | FlexibleNumber;
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
    type?: string;
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
    textScaleFactor?: FlexibleNumber;
    maxLines?: number;
    textAlign?: TextAlign;
}

export interface TextFieldProps {
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
    onEditingComplete?: () => any;
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
        top?: FlexibleNumber;
        left?: FlexibleNumber;
        right?: FlexibleNumber;
        bottom?: FlexibleNumber;
    } | 'fill'
    width?: FlexibleNumber;
    height?: FlexibleNumber;
}

export interface SafeAreaProps {
    top?: boolean;
    left?: boolean;
    right?: boolean;
    bottom?: boolean;
    minimum?: EdgeInsets;
    maintainBottomViewPadding?: boolean;
}

export type JavascriptMode = 'disabled' | 'unrestricted'

export interface JavascriptMessage {
    message?: string;
}

export interface JavascriptChannel {
    name: string;
    onMessageReceived: JavascriptMessage;
}

export enum WebResourceErrorType {
    authentication = 'authentication',
    badUrl = 'badUrl',
    connect = 'connect',
    failedSslHandshake = 'failedSslHandshake',
    file = 'file',
    fileNotFound = 'fileNotFound',
    hostLookup = 'hostLookup',
    io = 'io',
    proxyAuthentication = 'proxyAuthentication',
    redirectLoop = 'redirectLoop',
    timeout = 'timeout',
    tooManyRequests = 'tooManyRequests',
    unknown = 'unknown',
    unsafeResource = 'unsafeResource',
    unsupportedAuthScheme = 'unsupportedAuthScheme',
    unsupportedScheme = 'unsupportedScheme',
    webContentProcessTerminated = 'webContentProcessTerminated',
    webViewInvalidated = 'webViewInvalidated',
    javaScriptExceptionOccurred = 'javaScriptExceptionOccurred',
    javaScriptResultTypeIsUnsupported = 'javaScriptResultTypeIsUnsupported',
}

export interface WebResourceError {
    errorCode: number;
    description: string;
    domain?: string;
    errorType?: WebResourceErrorType;
}

export interface WebViewProps {
    initialUrl?: string;
    onWebViewCreated?: () => any;
    javascriptMode?: JavascriptMode;
    javascriptChannels?: JavascriptChannel[];
    onPageStarted?: (url: string) => any;
    onPageFinished?: (url: string) => any;
    onWebResourceError?: (error: WebResourceError) => any;
    gestureNavigationEnabled?: boolean;
    userAgent?: string;
}

export interface MapMarker {
    image?: string;
    coordinates?: [number, number];
    label?: string;
}

export interface MapProps {
    center?: [number, number];
    zoom?: number;
    markers?: MapMarker[];
    showLocation?: boolean;
}

export interface SizedBoxProps {
    width?: FlexibleNumber;
    height?: FlexibleNumber;
}

export interface OverflowBoxProps {
    alignment?: Alignment;
    minWidth?: FlexibleNumber;
    maxWidth?: FlexibleNumber;
    minHeight?: FlexibleNumber;
    maxHeight?: FlexibleNumber;
}

export interface TableColumnWidth {}

export class FlexColumnWidth implements TableColumnWidth {
    constructor(private value: FlexibleNumber) {
    }
}

export class FractionColumnWidth implements TableColumnWidth {
    constructor(private value: FlexibleNumber) {
    }
}

export class FixedColumnWidth implements TableColumnWidth {
    constructor(private value: FlexibleNumber) {
    }
}

export class IntrinsicColumnWidth implements TableColumnWidth {
    constructor(private value?: FlexibleNumber) {
    }
}

export interface TableProps {
    textDirection?: TextDirection;
    border?: TableBorder;
    defaultVerticalAlignment?: TableCellVerticalAlignment;
    defaultColumnWidth?: TableColumnWidth;
    columnWidths?: { [key: number]: TableColumnWidth };
    textBaseline?: TextBaseline;
}

export interface TableRowProps {
    decoration?: BoxDecoration;
}

export type CurveType =
    'fastLinearToSlowEaseIn'
    | 'ease'
    | 'easeIn'
    | 'easeInToLinear'
    | 'easeInSine'
    | 'easeInCubic'
    | 'easeInQuart'
    | 'easeInQuint'
    | 'easeInExpo'
    | 'easeInCirc'
    | 'easeInBack'
    | 'easeOut'
    | 'linearToEaseOut'
    | 'easeOutSine'
    | 'easeOutQuad'
    | 'easeOutCubic'
    | 'easeOutQuart'
    | 'easeOutQuint'
    | 'easeOutExpo'
    | 'easeOutCirc'
    | 'easeOutBack'
    | 'easeInOut'
    | 'easeInOutSine'
    | 'easeInOutQuad'
    | 'easeInOutCubic'
    | 'easeInOutQuart'
    | 'easeInOutQuint'
    | 'easeInOutExpo'
    | 'easeInOutCirc'
    | 'easeInOutBack'
    | 'fastOutSlowIn'
    | 'slowMiddle'

export const Curves: Record<CurveType, Curve> = {
    fastLinearToSlowEaseIn: [0.18, 1.0, 0.04, 1.0],
    ease: [0.25, 0.1, 0.25, 1.0],
    easeIn: [0.42, 0.0, 1.0, 1.0],
    easeInToLinear: [0.67, 0.03, 0.65, 0.09],
    easeInSine: [0.47, 0.0, 0.745, 0.715],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOut: [0.0, 0.0, 0.58, 1.0],
    linearToEaseOut: [0.35, 0.91, 0.33, 0.97],
    easeOutSine: [0.39, 0.575, 0.565, 1.0],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeOutCubic: [0.215, 0.61, 0.355, 1.0],
    easeOutQuart: [0.165, 0.84, 0.44, 1.0],
    easeOutQuint: [0.23, 1.0, 0.32, 1.0],
    easeOutExpo: [0.19, 1.0, 0.22, 1.0],
    easeOutCirc: [0.075, 0.82, 0.165, 1.0],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOut: [0.42, 0.0, 0.58, 1.0],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInOutCubic: [0.645, 0.045, 0.355, 1.0],
    easeInOutQuart: [0.77, 0.0, 0.175, 1.0],
    easeInOutQuint: [0.86, 0.0, 0.07, 1.0],
    easeInOutExpo: [1.0, 0.0, 0.0, 1.0],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55],
    fastOutSlowIn: [0.4, 0.0, 0.2, 1.0],
    slowMiddle: [0.15, 0.85, 0.85, 0.15],
}

export interface AnimatedContainerProps extends ContainerProps {
    duration: number;
    curve: Curve;
}

export interface AnimatedOpacityProps {
    onEnd: () => any;
    opacity: number;
    duration: number;
    curve: Curve;
}

export interface SlideTransitionProps {
    position: BridgedValue<"animationValue">;
}

export interface AnimatedBuilderProps {
    animation: BridgedValue<"animationValue">;
}

export interface ImageProps {
    source: string;
    width?: FlexibleNumber;
    height?: FlexibleNumber;
    color?: FlexibleColor;
    colorBlendMode?: BlendMode;
    fit?: BoxFit;
    alignment?: Alignment;
    repeat?: ImageRepeat;
    centerSlice?: Rect;
    borderRadius?: FlexibleNumber;
    margin?: EdgeInsets | FlexibleNumber;
}

export interface TabProps {
    text?: string;
    icon?: string;
    iconMargin?: EdgeInsets;
    child?: any;
}

export interface RouteProps {
    path: string;
}