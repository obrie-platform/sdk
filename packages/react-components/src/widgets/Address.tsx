import * as React from "react";
import {AddressProps} from "@obrie/sdk";

export interface ReactAddressProps extends AddressProps {
}

const addressView = (props: any): any => null;
export function Address(props: ReactAddressProps): JSX.Element {
    return <addressView {...props} />
}
