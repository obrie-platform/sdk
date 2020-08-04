import * as React from "react";
import {BottomNavigationBarItemProps} from "@obrie/sdk";

export interface ReactBottomNavigationBarItemProps extends BottomNavigationBarItemProps {
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
    title?: React.ReactNode;
}

const bottomNavigationBarConfig = (props: any): any => null;
export function BottomNavigationBarItem(props: ReactBottomNavigationBarItemProps): JSX.Element {
    return <bottomNavigationBarItemConfig {...props}>
        <tag name={'icon'}>{props.icon}</tag>
        <tag name={'title'}>{props.title}</tag>
        <tag name={'activeIcon'}>{props.activeIcon}</tag>
    </bottomNavigationBarItemConfig>
}