const normalizeValue = (v: any) => typeof v === 'string' ? v : String(v)
const isIterable = (o: any) => o != null && typeof o[Symbol.iterator] === 'function'

function normalizeName(name: string) {
    if (typeof name !== 'string')
        name = String(name)

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name))
        throw new TypeError('Invalid character in header field name')

    return name.toLowerCase()
}

class Headers {
    map: WeakMap<any, any> = new Map()

    constructor(headers: any) {
    }
}