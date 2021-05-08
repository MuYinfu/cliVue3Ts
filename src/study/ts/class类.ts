class Animal {
	protected name: string; // 子类可以使用 但是子类的实例无法调用
	// public 默认公开属性 可以在子类中使用和继承
	// private 私有只能本类使用 实例不可使用
	readonly age: number | undefined; // 只读 初始之后无法修改
	constructor (name: string, age?: number) {
	  this.name = name
	  this.age = age
	}

	protected eat () {
	  console.log(this.name)
	}
}

const snake = new Animal('123')

// console.log(snake.eat())

class Dog extends Animal {
  bark () {
    this.eat()
    console.log(`${this.name}123`)
  }
}

const nn = new Dog('nn')
nn.bark()

class Cat extends Animal {
	static cate = '123';

	constructor (name: string) {
	  super(name)
	}

	run () {
	  super.eat()
	}
}

const cat1 = new Cat('xm')
cat1.run()
console.log(Cat.cate)

// ts类的修饰符
