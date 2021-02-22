var Car = require('./Components/Car.js');
var sleep = require('sleep');

var Car1 = new Car(1, 25, 'street1');
var Car2 = new Car(1, 20, 'street1');
var Car3 = new Car(1, 20, 'street2');
var Car4 = new Car(4, 25, 'street2');
var Car5 = new Car(5, 20, 'street2');

let carsArray = [Car1, Car2, Car3, Car4, Car5];

carsArray.forEach((car) => {
  console.log(car.increasseSpeed());
  sleep.msleep(500);
});

// console.log(Car1.increasseSpeed());

// let speed = 10;

// for (var i = 0; i < speed; i++) {
//   sleep.msleep(500);
//   console.log(Car1.increasseSpeed());
// }

console.log(Car1.toString());
