// 对对象进行描述
interface Person {
	name: string;
	age: number;
	id?: number; // 可选
	readonly index: number; // 只读
}

const p1: Person = {
  name: 'myf',
  age: 18,
  index: 0
}

// p1.index = 123 报错
