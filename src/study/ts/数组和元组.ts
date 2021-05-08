const arr: number[] = [1, 2, 3]
arr.push(123)

// arr.push('123') 报错

function test () {
  console.log(arguments)
}

// 元组 定义数组元素的数据类型
const arr2: [string, number] = ['123', 123]
arr2.push('123')
arr2.push(123)
// arr2.push(true) 报错
