import * as React from 'react'

declare global {
    const window: Record<any, any>;
    const ObrieApi: ObrieInterface;

    interface ObrieInterface {
        sendMessage(message: string): void;
    }
}
