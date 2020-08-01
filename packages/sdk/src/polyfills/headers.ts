const map = new WeakMap
const wm = (o: any) => map.get(o)
const normalizeValue = (v: any) => typeof v === 'string' ? v : String(v)
const isIterable = (o: any) => o != null && typeof o[Symbol.iterator] === 'function'

function normalizeName(name: string) {
    if (typeof name !== 'string')
        name = String(name)

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name))
        throw new TypeError('Invalid character in header field name')

    return name.toLowerCase()
}

// eslint-disable-next-line no-unused-vars
class Headers {
    map: WeakMap<any, any>

    /**
     * Headers class
     *
     * @param   Object  headers  Response headers
     * @return  Void
     */
    constructor(headers: any) {
        map.set(this, Object.create(null))

        if ( isIterable(headers) )
            for (const [name, value] of headers)
                this.append(name, value)

        else if ( headers )
            for (const name of Object.keys(headers))
                this.append(name, headers[name])
    }

    append(name: string, value: string) {
        const map = wm(this)

        name = normalizeName(name)
        value = normalizeValue(value)

        if (!map[name])
            map[name] = []

        map[name].push(value)
    }


    /**
     * Delete all header values given name
     *
     * @param   String  name  Header name
     * @return  Void
     */
    delete(name: string) {
        delete wm(this)[normalizeName(name)]
    }


    /**
     * Iterate over all headers as [name, value]
     *
     * @return  Iterator
     */
    *entries() {
        const map = wm(this)

        for (const name in map)
            yield [name, map[name].join(',')]
    }

    /**
     * Return first header value given name
     *
     * @param   String  name  Header name
     * @return  Mixed
     */
    get(name: string) {
        const map = wm(this)
        name = normalizeName(name)

        return map[name] ? map[name][0] : null
    }

    /**
     * Check for header name existence
     *
     * @param   String   name  Header name
     * @return  Boolean
     */
    has(name: string) {
        return normalizeName(name) in wm(this)
    }

    /**
     * Iterate over all keys
     *
     * @return  Iterator
     */
    *keys() {
        for (const [name] of this)
            yield name
    }

    /**
     * Overwrite header values given name
     *
     * @param   String  name   Header name
     * @param   String  value  Header value
     * @return  Void
     */
    set(name: string, value: string) {
        wm(this)[normalizeName(name)] = [normalizeValue(value)]
    }

    /**
     * Iterate over all values
     *
     * @return  Iterator
     */
    *values() {
        for (const [name, value] of this)
            yield value
    }

    /**
     * The class itself is iterable
     * alies for headers.entries()
     *
     * @return  Iterator
     */
    [Symbol.iterator]() {
        return this.entries()
    }

    /**
     * Create the default string description.
     * It is accessed internally by the Object.prototype.toString().
     *
     * @return  String  [Object Headers]
     */
    get [Symbol.toStringTag]() {
        return 'Headers'
    }
}