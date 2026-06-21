class Car {
  constructor(first) {
    this.firstName = first;
  }
  present() {
    return "I am " + this.firstName;
  }
};

class Bike extends Car {
  constructor(first,brand) {
    super(first);
    this.brand = brand;
  }
  show() {
    return this.present() + " I have " + this.brand;
  }
};

let man = new Bike("Rafique", "Suzuki");
console.log(man.show());
