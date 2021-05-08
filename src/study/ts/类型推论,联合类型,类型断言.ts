// 类型推论
const str = 'str'

// 联合类型
let strOrNum: number | string
strOrNum = '123'
strOrNum = 123

// 类型断言
function getL (input: string | number): number {
  const str = input as string // 将input看成string类型
  return str.length

  // if(typeof input == 'string') {
  // 	return  input.toString().length;
  // }
}
