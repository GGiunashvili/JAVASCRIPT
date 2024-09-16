// OOP-ის ოთხი ძირითადი პრინციპი:
// ინკაფსულაცია (Encapsulation): მონაცემების (ცვლადების) და მეთოდების დახურვა/დამალვა და მათზე წვდომის კონტროლი.
// აბსტრაქცია (Abstraction): კომპლექსური სისტემის დეტალების დამალვა და მხოლოდ მნიშვნელოვანი ინფორმაციის ჩვენება.
// მემკვიდრეობა (Inheritance): ერთი კლასის ფუნქციონალის გადაცემა სხვა კლასებზე კოდის გადამუშავებისთვის.
// პოლიმორფიზმი (Polymorphism): ერთსა და იმავე მეთოდს შეუძლია განსხვავებული ქცევა სხვადასხვა ობიექტებში.


// 1. შექმენით მანქანის პროტოტიპი, რომელსაც ექნება ძირითადი მახასიათებლები(მაგ: ბორბლების რაოდენობა, start მეთოდი). 
// ამ პროტოტიპის გამოყენებით შექმენით რამდენიმე ბრენდის მანქანის ობიექტი სიჩქარის ფროფერთით

const car = {
    wheels: 4, // Define the wheels property
    start() {
      return "Car is starting";
    }
  };
  
  function createNewCar(speed) {
    let newCar = Object.create(car); // Create a new object inheriting from `car`
    newCar.speed = speed;            // Add the speed property to the new car
    return newCar;
  }
  
  // Create a new BMW car with speed 250
  let BMW = createNewCar(250);
  console.log(BMW.start());    // Output: Car is starting
  console.log(BMW.wheels);     // Output: 4
  
  // Create a new Mercedes car with speed 200
  let mercedes = createNewCar(200);
  console.log(mercedes.wheels); // Output: 4


  class Car {
    constructor(speed) {
      this.wheels = 4;       // Define the wheels property
      this.speed = speed;     // Set the speed property
    }
  
    start() {
      return "Car is starting";
    }
  }
  
  // Create a new car object with speed 100
  const car1 = new Car(100);
  console.log(car1);              // Log the car object
  console.log(car1.start());      // Output: Car is starting
  
  