Function.prototype._call = function (context, ...args) {
    const cur = this
    const sinal = Symbol('_call')

    context[sinal] = cur

    const res = context[sinal](...args)
    delete context[sinal]
    return res
}
