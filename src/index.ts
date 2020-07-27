declare global {
    interface ObrieInterface {
        sendMessage(message: string): void;
    }
}

export * from './uimanager'
export * from './interface/interfaces'
export * from './interface/components'