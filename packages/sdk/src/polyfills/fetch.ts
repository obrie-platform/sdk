import {sendAndReceive} from "../uimanager";

interface FetchInit {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'CONNECT' | 'TRACE' | 'PATCH' | 'HEAD'
    headers: Record<string, any>
    body: string | Record<string, any>
}

export class Body {
    constructor(private response: string) {
    }

    async json(): Promise<any> {
        return JSON.parse(this.response)
    }

    async text(): Promise<string> {
        return this.response
    }
}

export interface Response {
    headers: Headers
    ok: boolean
    status: number
    statusText?: string
    body: Body
    json(): Promise<any>
    text(): Promise<any>
}

window.fetch = async (resource: string, init?: FetchInit): Promise<Response> => {
    const result = await sendAndReceive<Record<string, any>>("httpRequest", null, {
        resource,
        data: init
    })

    return {
        headers: new Headers(result.headers),
        ok: result.ok,
        status: result.status,
        statusText: result.statusText,
        body: new Body(result.body),
        json(): Promise<any> {
            return this.body.json()
        },
        text(): Promise<string> {
            return this.body.text()
        }
    }
}

declare global {
    function fetch(resource: string, init?: FetchInit): Promise<Response>;
}
