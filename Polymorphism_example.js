//something that can take on many shapes

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

// I can access the bell() method on the bicycle object, using the following syntax: 

console.log(bicycle.bell()); // "Get away, please"

//I can also access the bell() method on the door object, using this syntax:  

console.log(door.bell()); // "Come here, please"

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"