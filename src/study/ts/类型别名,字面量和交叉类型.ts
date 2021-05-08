// 类型别名
type PlusType = (x: number, y: number) => number;
let s1: PlusType

type SoN = string | number;
const c1: SoN = '1231'

// 字面量 原始类型
const s2: 'name' = 'name'
type Directions = 'up' | 'down' | 'left' | 'right';
const s3: Directions = 'up'

// 联合类型

interface IName {
	name: string;
}

type Ipersion = IName & {
	age: number;
}

const ip1: Ipersion = {
  name: '123',
  age: 123
}
