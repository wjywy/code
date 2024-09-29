/**
 * 设计一个支持push，pop，top操作，并能在常数时间内检索到最小元素的栈
 * 思路：用一个栈来存储元素，另一个栈来存储最小值
 */
class MinStack {
    protected Stack:number[] = [];
    protected MinStack:number[] = [];

    push(val: number): void {
        this.Stack.push(val);
        this.MinStack.push(Math.min(val, this.getMin() ?? Infinity));
    }

    pop(): void {
        this.Stack.pop();
        this.MinStack.pop();
    }

    top(): number {
        return this.Stack[this.Stack.length - 1];
    }

    getMin(): number {
        return this.MinStack[this.MinStack.length - 1];
    }
}