import {BaseRef} from "./BaseRef";

export interface WebViewController {
    loadUrl(url: string): Promise<void>;
    currentUrl(): Promise<string>;
    canGoBack(): Promise<boolean>;
    canGoForward(): Promise<boolean>;
    goBack(): Promise<void>;
    goForward(): Promise<void>;
    reload(): Promise<void>;
    clearCache(): Promise<void>;
    getTitle(): Promise<string>;
    scrollTo(x: number, y: number): Promise<void>;
    scrollBy(x: number, y: number): Promise<void>;
    getScrollX(): Promise<number>;
    getScrollY(): Promise<number>;
    evaluateJavascript(javascriptString: String): Promise<void>;
}

export class WebViewRef extends BaseRef implements WebViewController {
    canGoBack(): Promise<boolean> {
        return this.call('canGoBack');
    }

    canGoForward(): Promise<boolean> {
        return this.call('canGoForward');
    }

    clearCache(): Promise<void> {
        return this.call('clearCache');
    }

    currentUrl(): Promise<string> {
        return this.call('currentUrl');
    }

    evaluateJavascript(javascriptString: String): Promise<void> {
        return this.call('evaluateJavascript', { javascriptString });
    }

    getScrollX(): Promise<number> {
        return this.call('getScrollX');
    }

    getScrollY(): Promise<number> {
        return this.call('getScrollY');
    }

    getTitle(): Promise<string> {
        return this.call('getTitle');
    }

    goBack(): Promise<void> {
        return this.call('goBack');
    }

    goForward(): Promise<void> {
        return this.call('goForward');
    }

    loadUrl(url: string): Promise<void> {
        return this.call('loadUrl', { url });
    }

    reload(): Promise<void> {
        return this.call('reload');
    }

    scrollBy(x: number, y: number): Promise<void> {
        return this.call('scrollBy', { x, y });
    }

    scrollTo(x: number, y: number): Promise<void> {
        return this.call('scrollTo', { x, y });
    }

}