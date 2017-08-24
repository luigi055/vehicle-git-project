console.log('vehicle');


class Engine {
  constructor(cylinder) {
    this.cylinder = cylinder;
  }

  cylinders() {
    console.log(`${this.cylinder} cylinders engine`)
  }

  start() {
    console.log(`The engine has started!`);
  }
}

const v8 = new Engine(8);

v8.cylinders();
v8.start();