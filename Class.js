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

