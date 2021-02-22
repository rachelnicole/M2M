var Car = require('./Components/Car.js');

var Car1 = new Car(1, 25, 55);

console.log(Car1.increasseSpeed());

let speed = 10;

for (var i = 0; i < speed; i++) {
  console.log(Car1.increasseSpeed());
}

console.log(Car1.toString());
