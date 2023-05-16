namespace A {
  // Omit会创建一个省略K中字段的T对象
  type MyOmit<T, K extends keyof T> = {
    [key in keyof T as key extends K ? never : key]: T[key];
  };
}
