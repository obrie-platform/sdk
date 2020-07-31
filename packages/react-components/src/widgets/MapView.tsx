import * as React from "react";
import {MapProps} from "@obrie/sdk";

export interface ReactMapViewProps extends MapProps {
}

const mapView = (props: any): any => null;
export function MapView(props: ReactMapViewProps): JSX.Element {
    return <mapView {...props} />
}
