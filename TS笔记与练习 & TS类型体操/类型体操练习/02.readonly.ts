namespace A {
  // 实现只读；接收一个泛型参数，并返回一个完全一样的类型
  type myReadonly<T> = {
    readonly [K in keyof T]: T[K];
  };
}
