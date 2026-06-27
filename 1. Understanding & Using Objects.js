let car = { 
  color: 'red', 
  make: 'Toyota', 
  model: 'Corolla', 
  start: function() {
        return 'Engine started!';
    },
    displayColor() {
        console.log('The color of the car is ' + this.color); // prints "The color of the car is red"
    }
};

let carStart = car.start(); // calls the start method and returns 'Engine started!'

let carColor1 = car.color;

car.color = 'blue'; // modifying color property
car.roofRack = true; // adding roofRack property
delete car.roofRack; // removing roofRack property

let house = { 'number of rooms': 4,  1: 'one',
};

let rooms = house['number of rooms']; // equals 4
let one = house[1]; // equals 'one'

let user = {
    name: 'John',
    age: 30,
};

let userName = user.name; // 'John'
let userAge = user['age']; // 30

user.isAdmin = true; // a new property 'isAdmin' is added
user.introduce = function() { // a new method is added
    console.log("Hi, I am " + this.name);
}
delete user.age; // deletes the 'age' property
