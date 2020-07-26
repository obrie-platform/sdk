import * as React from 'react'
import {PropsWithChildren} from "react";

declare global {
    const window: Record<any, any>;
    const ObrieApi: ObrieInterface;

    namespace JSX {
        interface IntrinsicElements {
            screen: {};
            listView: {};
            textField: {};
            buttonView: {};
            containerView: {};
            formView: {
                onSubmit?: (data: any) => any
            };
        }
    }

    interface ObrieInterface {
        sendMessage(message: string): void;
        registerCallback(callback: (message: string) => any): void;
    }
}

export interface ScreenProps extends PropsWithChildren<any> {
    backgroundColor?: string;
}
const screen = (props: any): any => null;
export function Screen(props: ScreenProps): any {
    return <screen {...props} />
}

export interface HeaderProps extends PropsWithChildren<any> {
    title: string;
}
const header = (props: any): any => null;
export function Header(props: HeaderProps): any {
    return <header {...props} />
}

export interface ListViewProps extends PropsWithChildren<any> {
}
const listView = (props: any): any => null;
export function ListView(props: ListViewProps): any {
    return <listView {...props} />
}

export interface FormProps extends PropsWithChildren<any> {
    onSubmit?: (data: any) => any
}
const formView = (props: any): any => null;
export function Form(props: FormProps): any {
    return <formView {...props} />
}

export interface ButtonProps extends PropsWithChildren<any> {
    onPress?: (data: any) => any
}
const buttonView = (props: any): any => null;
export function Button(props: ButtonProps): any {
    return <buttonView {...props} />
}

export interface TextFieldProps extends PropsWithChildren<any> {
    ref?: (ref: any) => any;
    name?: string;
    placeholder?: string;
    label?: string;
}
const textFieldView = (props: any): any => null;
export function TextField(props: TextFieldProps): any {
    return <textField {...props} />
}

/* UI Widgets */

export enum BoxFit {
    fill = 'fill',
    contain = 'contain',
    cover = 'cover',
    fitWidth = 'fitWidth',
    fitHeight = 'fitHeight',
    none = 'none',
    scaleDown = 'scaleDown'
}

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

export enum Alignment {
    topLeft = 'topLeft',
    topRight = 'topRight',
    bottomLeft = 'bottomLeft',
    bottomRight = 'bottomRight',
    centerLeft = 'centerLeft',
    centerRight = 'centerRight',
    center = 'center',
}

export interface ContainerProps extends PropsWithChildren<any> {
    alignment?: Alignment | 'center' | 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight' | 'centerLeft' | 'centerRight'
    padding?: EdgeInsets | number
    margin?: EdgeInsets | number
    decoration?: BoxDecoration
}
const containerView = (props: any): any => null;
export function Container(props: ContainerProps): any {
    return <containerView {...props} />
}

/* Hooks */

interface UseForm {
    errors: string[],
    register: (elm: any) => any
    handleSubmit: (callback: (data: any) => any) => any
}
export const useForm = (): UseForm => {
    const data = {}

    return {
        errors: [],
        register(elm) {},
        handleSubmit(callback) {
            callback(data);
        }
    }
}

export enum Permission {
    UserDetails = 'userDetails'
}

export enum PermissionStatus {
    Granted,
    Rejected,
    Error
}

export const usePermission = (permission: Permission | Permission[], callback: (status: PermissionStatus) => any) => {
}