console.log('vehicle');

class Engine {
  constructor(cylinder,piston,) {
    this.cylinder = cylinder;
    this.heater = heater; 	
    this.hood = hood;
    this.horn = horn;	
    this.ignition = ignition; 	
    this.alternator = alternator;
  }

  Send_current(){
    console.log(`send current do ${this.alternator}`)
  }

   ingnition(){
    console.log(`${this.ingnition}`)
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

