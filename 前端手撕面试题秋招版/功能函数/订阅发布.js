class eventEmitter {
    event

    constructor() {
        this.event = {}
    }

    sub(eventName, fn) {
        if (this.event(eventName)) {
            this.event(eventName).push(fn)
        } else {
            this.event(eventName) = []
            this.event(eventName).push(fn)
        }
    }

    fire(eventName) {
        if (!this.event(eventName)) {
            console.log('事件名不对')
            return
        }

        for (let item of this.event(eventName)) {
            item()
        }
    }

    off(eventName) {
        if (!this.event(eventName)) {
            return
        }

        delete this.event(eventName)
    }

    once(eventName, fn) {
        const onceFn = () => {
            fn()
            this.off(eventName)
        }

        this.sub(eventName, onceFn)
    }
}