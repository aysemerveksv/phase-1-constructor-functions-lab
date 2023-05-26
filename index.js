// Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver constructor function
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation constructor function
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Testing the constructor functions
  // Creating a new Scooter instance
  const scooter = new Scooter(2022, "red", "X200");
  console.log(scooter);
  
  // Creating a new Driver instance
  const driver = new Driver("John Doe", 30, 5);
  console.log(driver);
  
  // Creating a new PickupLocation instance
  const location = new PickupLocation("123 Main St", "New York");
  console.log(location);
  