import * as React from "react";
import {StackProps} from "@obrie/sdk";

export interface ReactStackProps extends StackProps {
    children?: React.ReactNode
}

const stackView = (props: any): any => null;
export function Stack(props: ReactStackProps): JSX.Element {
    return <stackView {...props} />
}
