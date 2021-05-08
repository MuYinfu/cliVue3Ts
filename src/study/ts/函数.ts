// 一等公民 由输入输出构成的方法

function add (x: number, y: number, z?: number): number {
  return x + y
}

const res = add(1, 2)

// 函数类型
const add2 = (x: number, y: number, z?: number): number => {
  return x + y
}

interface Isum {
	(x: number, y: number, z?: number): number;
}

const res2: Isum = add2
