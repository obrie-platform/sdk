import * as React from 'react'

declare const window: Record<any, any>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            screen: any;
            tag: any;
            tabChild: any;
            bottomNavigationBarConfig: any;
            bottomNavigationBarItemConfig: any;
            iconView: any;
            animatedContainerView: any;
            animatedBuilderView: any;
            tableView: any;
            tabView: any;
            imageView: any;
            switchView: any;
            checkboxView: any;
            radioView: any;
            sliderView: any;
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
            route: any;
        }
    }
}

export * from './renderer'
export * from './hooks/useContext'
export * from './hooks/useStorage'
export * from './hooks/useRouter'
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
export * from './widgets/Route'
export * from './widgets/Icon'
export * from './widgets/Switch'
export * from './widgets/Checkbox'
export * from './widgets/Radio'
export * from './widgets/Slider'
export * from './widgets/BottomNavigationBar'
export * from './widgets/BottomNavigationBarItem'
export * from './context/Router'
