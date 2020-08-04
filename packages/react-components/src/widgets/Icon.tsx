import * as React from "react";
import {IconProps} from "@obrie/sdk";

export interface ReactIconProps extends IconProps {
}

const iconView = (props: any): any => null;
export function Icon(props: ReactIconProps): JSX.Element {
    return <iconView {...props} />
}
