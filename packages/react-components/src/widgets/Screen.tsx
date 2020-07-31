import * as React from "react";
import {ScreenProps, TabProps} from "@obrie/sdk";
import {JSXElementConstructor, ReactChild, ReactElement, ReactNode} from "react";
import {Container} from "./Container";
import {ReactTabProps, Tab} from "./Tab";

export interface ReactScreenProps extends ScreenProps {
    children?: React.ReactNode
}

const screen = (props: any): any => null;
export function Screen(props: ReactScreenProps): JSX.Element {
    return <screen {...props} />
}

export interface ReactTabScreenProps extends ScreenProps {
    children?: React.ReactNode;
}

export function TabScreen(props: ReactTabScreenProps): JSX.Element {
    return <screen {...props} type={'tabs'} />
}
