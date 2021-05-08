interface R {
	switchR(t: boolean): void;
}

interface Rv extends R {
	name: string;
}

interface Battery {
	checkBatteryStatus(): void;
}

// 接口之间可以继承
interface RoB extends Rv {
	checkBatteryStatus(): void;
}

class Car implements Rv {
  constructor (public name: string) {

  }

  switchR (t: boolean) {

  }
}

class Cellphone implements R, Battery {
  switchR (t: boolean) {

  }

  checkBatteryStatus () {

  }
}

class C implements RoB {
  constructor (public name: string) {

  }

  switchR (t: boolean) {

  }

  checkBatteryStatus () {

  }
}
