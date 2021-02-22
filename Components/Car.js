class Car {
  constructor(id, speed, location) {
    this.id = id;
    this.speed = speed;
    this.location = location;
  }
  increasseSpeed() {
    this.speed++;
    return `Increase speed to ${this.speed}`;
  }
  decreaseSpeed() {
    this.speed--;
    return `Decrease speed to ${this.speed}`;
  }
  toString() {
    return `Car Id is: ${this.id} and its speed is ${this.speed} and its location is ${this.location}`;
  }
}

module.exports = Car;
