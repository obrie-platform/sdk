export type RealtimeCallback = (topic: string, payload: unknown) => any

window.realtimeListeners = []
window.notifyRealtime = (topic: string, payload: any) => {
    const listeners = window.realtimeListeners.filter(([topics]: any) => topics.includes(topic))
    for (const [, callback] of listeners) {
        callback(topic, payload)
    }
}

export function listenRealtime(topics: string[], callback: RealtimeCallback): () => void {
    window.realtimeListeners.push([topics, callback])

    return () => {
        const index = window.realtimeListeners.findIndex(([, fCallback]: any) => fCallback === callback)
        window.realtimeListeners.splice(index, 1)
    }
}
