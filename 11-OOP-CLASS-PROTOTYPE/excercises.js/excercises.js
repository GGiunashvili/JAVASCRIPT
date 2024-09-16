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

class BankAccount {
    #balance; // private property

    constructor(initialBalance) {
        this.#balance = initialBalance; // initializing private balance
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.#balance}.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // withdraw(amount) {
    //     if (amount > this.#balance) {
    //         console.log("Insufficient funds.");
    //     } else if (amount > 0) {
    //         this.#balance -= amount;
    //         console.log(`Withdrew ${amount}. New balance is ${this.#balance}.`);
    //     } else {
    //         console.log("Withdrawal amount must be positive.");
    //     }
    // }

    // getBalance() {
    //     return this.#balance; // method to check balance
    // }
}
let myAccount = new BankAccount(100);  // creates account with initial balance of 100

console.log(myAccount.deposit)

// გამოყენება
// let myAccount = new BankAccount(100);  // creates account with initial balance of 100

// myAccount.deposit(50);  // Deposited 50. New balance is 150.
// myAccount.withdraw(30);  // Withdrew 30. New balance is 120.
// myAccount.withdraw(200); // Insufficient funds.

// console.log(`Final balance: ${myAccount.getBalance()}`);  // Final balance: 120

// 4. პოლიმორფიზმი:  შემქენით კლასი "Shape", რომელშიც იქნება მეთოდი სახელად "calculateArea". შექმენით ქვეკლასები "Circle" და "Rectangle", რომლებშიც ახლადშექმნილ მეთოდს გადააწერთ მშობლის მეთოდს.
// 5. სტატიკური მეთოდი: შექმენით კლასი "Calculator" სტატიკური მეთოდით, რომელიც პარამეტრად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.
// 6. Getter and Setter: შექმენით კლასი "Temperature" private ფორფერთით - "celsius". დაამატეთ getter და setter მეთოდები. getter მეთოდი უნდა აბრუნებდეს celsius ფროფერთის. setter მეთოდი პარამეტრად უნდა იღებდეს ფარენჰეიტს, გადაჰყავდეს ცელსიუსში და ანიჭებდეს მიღებულ მნიშვნელობას celsius ფროფერთის.
// 7. შექმენით კლასი - "ArrayHelper" მეთოდით "reverseArray", რომელიც პარამეტრად იღებს მასივს და აბრუნებს მის შებრუნებულ ვერსიას.
// 8. შექმენით კლასი "Circle", რომელიც დააგენერირებს ობიექტებს "radius" ფროფერთით. დაამატეთ მეთოდები წრის ფართობისა და პერიმეტრის გასაგებად. შექმენით "createCircle" მეთოდი, რომელიც დააბრუნებს რაიმე რადიუსის მქონე წრის ობიექტს. (ახალი წრე შექმენით Circle კლასიდან)