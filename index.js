console.log('vehicle');

class Engine {
  constructor(cylinder, piston, ) {
    this.cylinder = cylinder;
    this.heater = heater;
    this.hood = hood;
    this.horn = horn;
    this.ignition = ignition;
    this.alternator = alternator;
  }

  Send_current() {
    console.log(`send current do ${this.alternator}`)
  }

  ingnition() {
    console.log(`${this.ingnition}`)
  }

  cylinders() {
    console.log(`${this.cylinder} cylinders engine`)
  }

  start() {
    console.log(`The engine has started!`);
  }
}

class bodyWork = {
  cosntructor(color, doors) {
    this.color = color,
      this.doors = doorw,
  }
  getColor() {
    console.log(`the bodywork is ${this.color}`);
  }
}

const v8 = new Engine(8);
const body = new bodyWork('red', 2);

v8.cylinders();
v8.start();
body.getColor();

/**************************************************************************************/
/**************************************************************************************/
/************************------Class Bodywork--------**********************************/
/**************************************************************************************/
/**************************************************************************************/

class Bodywork {
  constructor() {
    
  }

  Window(){
    console.log(`Aliquip anim culpa occaecat et nulla mollit commodo anim Lorem qui.`)
  }

   paiting(){
    console.log(`Occaecat occaecat eu incididunt esse.`)
  }

  metal() {
    console.log(`Ea ex occaecat non dolor aute occaecat.`)
  }

  start() {
    console.log(`The bodywork has started!`);
  }
}

const toyota = new Bodywork(8);

toyotav8.Window();
toyota.start();
