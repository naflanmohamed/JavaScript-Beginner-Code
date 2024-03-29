    // Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}

    // Code a Worker class
class Worker extends Person{
    constructor( name, age, energy,xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    sleep(option) {
        if (option) {
            super.sleep();
        }
    }

    doSomethingFun(option) {
        if (option) {
            super.doSomethingFun();
        }
    }

    goToWork() {
        this.xp += 10;
    }

}

// Code an intern object, run methods
function intern() {
     let bob = new Worker("Bob", 21, 110, 0, 10);
    bob.goToWork();
    return bob;
}
    

// Code a manager object, methods
function manager() {
     let alice = new Worker("Alice", 30, 120, 100, 30);
    alice.doSomethingFun();
    return alice;
}