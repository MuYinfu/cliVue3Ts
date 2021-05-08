class Queue<T> {
	private data: Array<any> = [];
	push (item: T) {
	  return this.data.push(item)
	}

	pop (): T {
	  return this.data.pop()
	}
}

const queue = new Queue<number>()
queue.push(1)
queue.pop()

const queue2 = new Queue<string>()
queue2.push('123')
queue2.pop()

interface keyPair<T, U> {
	key: T;
	value: U;
}

const kp1: keyPair<number, string> = {
  key: 1,
  value: '1'
}

const kp2: keyPair<object, any> = {
  key: {
    a: 1
  },
  value: 1
}

const arrG: Array<number> = [1, 2, 3]
