import * as React from "react";
import {SafeAreaProps, StackProps} from "@obrie/sdk";

export interface ReactSafeAreaProps extends SafeAreaProps {
    children?: React.ReactNode
}

const safeAreaView = (props: any): any => null;
export function SafeArea(props: ReactSafeAreaProps): JSX.Element {
    return <safeAreaView {...props} />
}
