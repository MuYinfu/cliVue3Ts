// 全局对象
const g1: Array<number> = [1, 2, 3]
const date = new Date().getTime()

// 打包对象
Math.random()

// dom 和 bom
document.body
document.querySelector('body')

// utility types
// Partial 内置插件, 将参数可选化
// Omit 内置插件 忽律参数的属性
interface IPERSON {
	name: string;
	age: number;
}

const v1: IPERSON = {
  name: '1',
  age: 1
}

type IPARTIAL = Partial<IPERSON>

const v2: IPARTIAL = {}

type IOMIT = Omit<IPERSON, 'name'>

const v3: IOMIT = {
  age: 123
}
