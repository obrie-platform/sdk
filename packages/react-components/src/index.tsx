import * as React from 'react'

declare const window: Record<any, any>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            screen: {};
            columnView: {};
            listView: {};
            expandedView: {};
            textFieldView: {};
            buttonView: {};
            textView: {};
            containerView: {};
            formView: {
                onSubmit?: (data: any) => any
            };
        }
    }
}

export * from './hooks/useForm'
export * from './hooks/usePermission'
export * from './widgets/Column'
export * from './widgets/Row'
export * from './widgets/Button'
export * from './widgets/Container'
export * from './widgets/Form'
export * from './widgets/Expanded'
export * from './widgets/ListView'
export * from './widgets/Screen'
export * from './widgets/TextField'