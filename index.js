const Automobile = {
  make: "",
  model: "",
  year: 0,

  displayInfo() {
    console.log(
      `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Number of Doors: ${this.numDoors}`
    );
  },
};

function createFourWheeler(make, model, year, numDoors) {
  const fourWheeler = Object.create(Automobile);

  fourWheeler.numDoors = numDoors;

  fourWheeler.make = make;
  fourWheeler.model = model;
  fourWheeler.year = year;

  return fourWheeler;
}

const myCar = createFourWheeler("Tata", "Nexon", 2023, 5);

myCar.displayInfo();
