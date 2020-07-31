import * as React from "react";
import {WebViewController, WebViewProps} from "@obrie/sdk";

export interface ReactWebViewProps extends WebViewProps {
    ref?: React.RefObject<WebViewController>
}

const webView = (props: any): any => null;
export function WebView(props: ReactWebViewProps): JSX.Element {
    return <webView {...props} />
}

export { WebViewController }