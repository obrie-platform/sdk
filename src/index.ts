declare global {
    interface ObrieInterface {
        sendMessage(message: string): void;
    }
}

export * from './uimanager'
export * from './interface/interfaces'
export * from './interface/components'
export * from './controllers/TextFieldRef'
export * from './controllers/WebViewRef'
export * from './controllers/MapRef'
export * from './apis/requests'