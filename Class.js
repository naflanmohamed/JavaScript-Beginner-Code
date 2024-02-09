class Train {

    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

var mySecondTrain = new Train('blue', true);
console.log(mySecondTrain); // Train {color: 'blue', lightsOn: true}


class Bus {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var bus1 = new Bus('red', false);

bus1.toggleLights(); // undefined
bus1.lightsStatus(); // Lights on? true
bus1.getSelf(); // Train {color: 'red', lightsOn: true}
bus1.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

class HighSpeedBus extends Bus {

}
