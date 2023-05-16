namespace A {
  // 从联合类型T中排除U的类型成员，但不能直接使用它本身
  type MyExclude<T, U> = T extends U ? never : T;
}
