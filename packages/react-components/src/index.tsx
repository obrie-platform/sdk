import * as React from 'react'

declare const window: Record<any, any>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            screen: any;
            tabChild: any;
            animatedContainerView: any;
            animatedBuilderView: any;
            tableView: any;
            tabView: any;
            imageView: any;
            tableRowView: any;
            safeAreaView: any;
            touchableView: any;
            sizedBoxView: any;
            overflowBoxView: any;
            mapView: any;
            webView: any;
            stackView: any;
            positionedView: any;
            rowView: any;
            columnView: any;
            listView: any;
            animatedOpacityView: any;
            expandedView: any;
            textFieldView: any;
            buttonView: any;
            textView: any;
            containerView: any;
            formView: any;
        }
    }
}

export * from './renderer'
export * from './hooks/useForm'
export * from './hooks/usePermission'
export * from './hooks/useAnimation'
export * from './widgets/Column'
export * from './widgets/Row'
export * from './widgets/Button'
export * from './widgets/Container'
export * from './widgets/Form'
export * from './widgets/Expanded'
export * from './widgets/ListView'
export * from './widgets/Text'
export * from './widgets/Screen'
export * from './widgets/TextField'
export * from './widgets/Positioned'
export * from './widgets/SafeArea'
export * from './widgets/Touchable'
export * from './widgets/Stack'
export * from './widgets/SizedBox'
export * from './widgets/OverflowBox'
export * from './widgets/Table'
export * from './widgets/TableRow'
export * from './widgets/MapView'
export * from './widgets/WebView'
export * from './widgets/AnimatedContainer'
export * from './widgets/AnimatedOpacity'
export * from './widgets/AnimatedBuilder'
export * from './widgets/Tab'
export * from './widgets/Image'
