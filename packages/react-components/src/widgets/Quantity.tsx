import * as React from "react";
import {QuantityProps} from "@obrie/sdk";

export interface ReactQuantityProps extends QuantityProps {
}

const quantityView = (props: any): any => null;
export function Quantity(props: ReactQuantityProps): JSX.Element {
    return <quantityView {...props} />
}
