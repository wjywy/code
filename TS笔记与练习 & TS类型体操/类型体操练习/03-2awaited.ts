namespace A {
  // 假如我们有一个Promise对象， 这个Promise对象会返回
  // 一个类型。在TS中，我们用Promise中的T来描述这个Promise
  // 返回的类型。实现一个类型，可以获取这个类型
  type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer R>
    ? R extends PromiseLike<any>
      ? MyAwaited<R>
      : R
    : T;
}
