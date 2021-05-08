// function echoWithArr<T>(arg: T[]) : T[] {
// 	console.log(arg.length);
// 	return arg;
// }
interface IwithLength {
	length: number;
}

function echoWithArr2<T extends IwithLength> (arg: T): T {
  console.log(arg.length)
  return arg
}

echoWithArr2('123')
echoWithArr2([1, 2, 3])
