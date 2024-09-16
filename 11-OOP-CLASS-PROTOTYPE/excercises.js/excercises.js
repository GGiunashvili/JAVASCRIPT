// ### სავარჯიშოები

// 1. შექმენით კლასი სახელად "Person". დააგენერირეთ ობიექტი, რომელსაც ექნება "name" და "age" ფროფერთები და "sayHello" 
// მეთოდი(ეს ყველაფერი კლასშივე უნდა გაუწეროთ). გამოაკონსოლეთ ობიექტის ფროფერთები.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }


// let person = new Person("giorgi", 25);
// console.log(person.sayHello());


// 2. მემკვიდრეობითობა: შექმენით კლასი "Student", რომელიც იქნება "Person"-ის შთამომავალი. დაამატეთ ახალი "grade" ფროფერთი.
// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);  // მშობლის კლასის კონსტრუქტორის გამოძახება
//         this.grade = grade;  // ახალი "grade" ფროფერთი
//     }

//     // ახალი მეთოდი, რომელიც გამოდის სტუდენტის ქულას
//     displayGrade() {
//         return `${this.name} is in grade ${this.grade}.`;
//     }
// }

// let student = new Student("Meji", 29, 9);
// console.log(student.displayGrade())

// 3. ენკაფსულაცია: შექმენით კლასი სახელად "BankAccount" private ფროფერთით - "balance". 


// დაამატეთ მეთოდები "deposit" და "withdraw" თანხის შეტანა-გამოტანისთვის. შესატან ან გამოსატან თანხას მეთორები უნდა იღებდნენ პარამეტრად. 
// bonus: თუ გამოსატანი თანხა მეტია  არსებულ ბალანსზე, გმოიტანეთ შესაბამისი შეტყობინება.

// class BankAccount {
//     #balance; // private property

//     constructor(initialBalance) {
//         this.#balance = initialBalance; // initializing private balance
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Deposited ${amount}. New balance is ${this.#balance}.`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > this.#balance) {
//             console.log("Insufficient funds.");
//         } else if (amount > 0) {
//             this.#balance -= amount;
//             console.log(`Withdrew ${amount}. New balance is ${this.#balance}.`);
//         } else {
//             console.log("Withdrawal amount must be positive.");
//         }
//     }

//     getBalance() {
//         return this.#balance; // method to check balance
//     }
// }


// // გამოყენება
// let myAccount = new BankAccount(100);  // creates account with initial balance of 100

// myAccount.deposit(50);  // Deposited 50. New balance is 150.
// myAccount.withdraw(30);  // Withdrew 30. New balance is 120.
// myAccount.withdraw(200); // Insufficient funds.

// console.log(`Final balance: ${myAccount.getBalance()}`);  // Final balance: 120

// 4. პოლიმორფიზმი:  შემქენით კლასი "Shape", რომელშიც იქნება მეთოდი სახელად "calculateArea". 
// შექმენით ქვეკლასები "Circle" და "Rectangle", რომლებშიც ახლადშექმნილ მეთოდს გადააწერთ მშობლის მეთოდს.

class Shape {
    constructor(){};

    calculateArea(){
        return "Shape";
    }
}

let shape = new Shape();
console.log(shape.calculateArea())

class Circle extends Shape{
    // constructor(){};s
    calculateArea(){
        return "circle"
    }
}

let circle = new Circle();
console.log(circle.calculateArea())

// 5. სტატიკური მეთოდი: შექმენით კლასი "Calculator" სტატიკური მეთოდით, რომელიც პარამეტრად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.

class Calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    calcMethod(){
        return this.a + this.b;
    }
}
let calculator = new Calculator(10, 2);
console.log(calculator.calcMethod());

// 6. Getter and Setter: შექმენით კლასი "Temperature" private ფორფერთით - "celsius". დაამატეთ getter და setter მეთოდები.
//  getter მეთოდი უნდა აბრუნებდეს celsius ფროფერთის. setter მეთოდი პარამეტრად უნდა იღებდეს ფარენჰეიტს,
//   გადაჰყავდეს ცელსიუსში და ანიჭებდეს მიღებულ მნიშვნელობას celsius ფროფერთის.
class Temperature {
    #celsius; // private property

    constructor(celsius) {
        this.#celsius = celsius;
    }

    // Getter for celsius
    get celsius() {
        return this.#celsius;
    }

    // Setter for fahrenheit (takes fahrenheit and converts to celsius)
    set fahrenheit(fahrenheit) {
        this.#celsius = (fahrenheit - 32) * 5 / 9;
    }

    // Getter for fahrenheit (converts celsius to fahrenheit)
    get fahrenheit() {
        return (this.#celsius * 9 / 5) + 32;
    }
}

// გამოყენება
let temp = new Temperature(11); // 0°C

console.log(temp.celsius); // 0°C
temp.fahrenheit = 100; // 100°F-ს გადაყავს ცელსიუსში
console.log(temp.celsius); // 37.777...°C
console.log(temp.fahrenheit); // ისევ 100°F, რადგან ახლა გვაქვს get for fahrenheit


// 7. შექმენით კლასი - "ArrayHelper" მეთოდით "reverseArray", რომელიც პარამეტრად იღებს მასივს და აბრუნებს მის შებრუნებულ ვერსიას.
class ArrayHelper {
    constructor(array) {
        this.array = array;
    }

    reverseArray() {
        return this.array.reverse();
    }
}

// გამოყენება
const helper = new ArrayHelper([1, 2, 3, 4, 5]);
console.log(helper.reverseArray()); // [5, 4, 3, 2, 1]



// ესეც სტატუკური
class ArrayHelper {
    // მეთოდი, რომელიც შებრუნებულ მასივს აბრუნებს
    static reverseArray(array) {
        return array.slice().reverse();
    }
}

// გამოყენება
const myArray = [1, 2, 3, 4, 5];
const reversedArray = ArrayHelper.reverseArray(myArray);

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(myArray); // [1, 2, 3, 4, 5] (ორიგინალი მასივი არ იცვლება)


// 8. შექმენით კლასი "Circle", რომელიც დააგენერირებს ობიექტებს "radius" ფროფერთით.
//  დაამატეთ მეთოდები წრის ფართობისა და პერიმეტრის გასაგებად. შექმენით "createCircle" მეთოდი, 
//  რომელიც დააბრუნებს რაიმე რადიუსის მქონე წრის ობიექტს. (ახალი წრე შექმენით Circle კლასიდან)

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // მეთოდი, რომელიც ითვლის წრის ფართობს (A = πr²)
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // მეთოდი, რომელიც ითვლის პერიმეტრს/სიგრძეს (C = 2πr)
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    // სტატიკური მეთოდი, რომელიც ქმნის ახალ Circle ობიექტს
    static createCircle(radius) {
        return new Circle(radius);
    }
}

// გამოყენება
const myCircle = Circle.createCircle(5); // ახალი Circle ობიექტი 5-ის რადიუსით
console.log(`Area: ${myCircle.getArea()}`); // წრის ფართობი
console.log(`Circumference: ${myCircle.getCircumference()}`); // წრის პერიმეტრი
