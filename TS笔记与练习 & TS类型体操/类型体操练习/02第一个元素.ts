namespace A {
  // 实现一个通用First<T>,
  // 它接受一个数组T并返回它的第一个元素的类型
  type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
}
