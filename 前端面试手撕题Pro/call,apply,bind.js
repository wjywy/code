Function.prototype._call = function (context, ...args) { // 换成箭头函数就绑定不到this了
    const fn = this;
    const signal = Symbol('signal');
    context[signal] = fn;
    const res = context[signal](...args);

    delete context[signal];

    return res;
}

Function.prototype._apply = function (context, ...args) {
    const signal = Symbol('signal');
    const fn = this;
    context[signal] = fn;
    const res =  context[signal]([...args]);

    delete context[signal];

    return res;
}

Function.prototype._bind = function (context, ...args) {
    let cur = this
    
    function newFun(...restArgs) {
        let newArgs = [...args, ...restArgs]
        let signalName = Symbol('myBind')
        context[signalName] = cur
        let result = context[signalName](...newArgs)
        delete context[signalName]
        return result
    }

    return newFun
}

let foo = {
    value: 1
}

function bar(name, age) {
    console.log(this.value, 'value')
    console.log(name, 'name')
    console.log(age, 'age')
}

bar._bind(foo, 'jack', 18);