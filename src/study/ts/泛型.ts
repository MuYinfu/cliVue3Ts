// 定义类型
function echo<T> (arg: T): T {
  return arg
}

const result = echo('123') // 类型推论
// const result: number = echo(123); //定义类型

function swap<T, U> (tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

swap([1, 2])
