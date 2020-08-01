import * as React from "react";
import {ImageProps} from "@obrie/sdk";

export interface ReactImageProps extends ImageProps {
    children?: React.ReactNode
}

const imageView = (props: any): any => null;
export function Image(props: ReactImageProps): JSX.Element {
    return <imageView {...props} />
}
