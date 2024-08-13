class LRU {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
    }

    get (key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)

            return value
        }

        return -1
    }

    put (key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.capacity) {
            const oldKey = this.cache.keys().next().value
            this.cache.delete(oldKey)
        }

        this.cache.set(key, value)
    }
}
