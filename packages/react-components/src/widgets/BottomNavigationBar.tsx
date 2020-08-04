import * as React from "react";
import {BottomNavigationBarProps} from "@obrie/sdk";

export interface ReactBottomNavigationBarProps extends BottomNavigationBarProps {
    children: React.ReactNode;
}

const bottomNavigationBarConfig = (props: any): any => null;
export function BottomNavigationBar(props: ReactBottomNavigationBarProps): JSX.Element {
    return <bottomNavigationBarConfig {...props} />
}