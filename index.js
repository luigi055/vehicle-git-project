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

    /** Stters and Getters **/
    get cylinder() {
        return this.cylinder;
    }

    set cylinder(value) {
        this.cylinder = value;
    }

    get heater() {
        return this.heater;
    }

    set heater(value) {
        this.heater = value;
    }

    get hood() {
        return this.hood;
    }

    set hood(value) {
        this.hood = value;
    }

    get horn() {
        return this.horn;
    }

    set horn(value) {
        this.horn = value;
    }

    get ignition() {
        return this.horn;
    }

    set ignition(value) {
        this.ignition = value;
    }

    get alternator() {
        return this.alternator;
    }

    set alternator(value) {
        this.alternator = value;
    }

    /** Function the Engine **/
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

const v8 = new Engine(8);

v8.cylinders();
v8.start();

