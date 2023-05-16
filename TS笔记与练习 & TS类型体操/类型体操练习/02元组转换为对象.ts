namespace A {
  // 传入一个元组类型， 将这个元组类型转换为对象类型
  // 这个对象的键/值都是从元组中遍历出来
  type TupleObject<T extends readonly any[]> = {
    [K in T[number]]: K;
  };
}
