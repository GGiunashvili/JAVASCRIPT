// ### სავარჯიშოები

// 1. შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.
// 2. დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში 
// სახელის values.
// 3. წაშალეთ ასაკის property.
// 4. დაამატეთ ობიექტში job.
// 5. დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.


let person = {
    name: "guram",
    surname: "beridze",
    age: 20,
    sayHello: function(){
        console.log(this.name);
    }
}
// person.sayHello();
delete person.age

person.job = "front";

person.job.length
person.getJobLength = function() {
    return this.job.length;
};

// for (let key in Person) {
//     if (typeof Person[key] === 'function') {
//         methodCount++;
//     }
// }
// console.log(person.getJobLength())

// 6. ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.
let propertyCount = 0;
for (let key in person) {
    propertyCount++;
}
// console.log(propertyCount); 

// 7. დაადგინეთ, აქვს თუ არა ობიექტს gender ფროფერთი. თუ არ აქვს, 
// მაშინ შექმენით მეთოდი რომელიც იმავე ობიექტს gender ფროფერთის შეუქმნის.

if (!person.hasOwnProperty('gender')) {
    
    person.addGender = function(genderValue) {
        this.gender = genderValue;
    };
}
person.addGender('Male');
// console.log(person); 

// 8. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.
// for (key in person){
//     console.log(key + ": " + person[key])
// }
// console.log(key)


// 9. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value. 
// for (value in person){
//     console.log(person[value])
// }
// console.log(value)

// 10. გვაქვს სახელების მასივი. შექმენით ობიექტი, სადაც key-value წყვილებად იქნება სახელები და მათი რაოდენობები მასივში.
// let names = ["Guram", "Ana", "Guram", "Mariam", "Ana", "Guram"];

// let nameCounts = {};

// for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (nameCounts[name]) {
//         nameCounts[name]++;
//     } else {
//         nameCounts[name] = 1;
//     }
// }

// console.log(nameCounts);


// 11. შექმენით პროდუქტის პროტოტიპი, რომელსაც ექნება მეთოდი პროდუქტის ფასის საჩვენებლად. 

// პროტოტიპზე დაყრდნობით შექმენით რამდენიმე პროდუქტის ობიექტი, რომელთაც ექნებათ სახელისა და ფასის ფროფერთები.

// 1. შექმენით კალათის პროტოტიპი რომელზე დაყრდნობითაც შეიქმნება კალათის ობიექტები. 
// 2. კალათის ობიექტში უნდა გვქონდეს მასივი, სადაც შეგვეძლება პროდუქტის ობიექტების დამატება. 
// 3. პროტოტიპშივე უნდა იყოს მეთოდი, რომელიც დაამატებს მასივში ახალ პროდუქტებს და მეთოდი, 
// რომელიც დაითვლის კალათაში არსებული ყველა პროდუქტის ჯამურ ფასს.

// Product პროტოტიპი
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// მეთოდი, რომელიც აჩვენებს პროდუქტის ფასს
Product.prototype.showPrice = function() {
    console.log(`The price of ${this.name} is ${this.price} GEL`);
};

// პროდუქტების ობიექტების შექმნა
const product1 = new Product('Laptop', 1500);
const product2 = new Product('Phone', 800);
const product3 = new Product('Tablet', 500);

// პროდუქტის ფასის ჩვენება
// product1.showPrice(); 
// product2.showPrice();
// product3.showPrice();

// // 1. Cart პროტოტიპი
function Cart() {
    this.items = [];
}

// // 3. მეთოდი, რომელიც ამატებს ახალ პროდუქტს კალათაში
Cart.prototype.addProduct = function(product) {
    this.items.push(product);
    console.log(`${product.name} was added to the cart.`);
};

// // 3. მეთოდი, რომელიც ითვლის კალათაში არსებული პროდუქტების ჯამურ ფასს
Cart.prototype.totalPrice = function() {
    return this.items.reduce((total, product) => total + product.price, 0);
};

// // 2. კალათის ობიექტის შექმნა
const cart = new Cart();

// // პროდუქტების დამატება კალათაში
// cart.addProduct(product1);
// cart.addProduct(product2);
// cart.addProduct(product3);

// // კალათაში არსებული პროდუქტების ჯამური ფასის გამოთვლა
const total = cart.totalPrice();
// console.log(`Total price of products in the cart is ${total} GEL`);




// <!-- 12. Object Deep Comparison: Write a function that compares two objects deeply and returns true if they are equal, 
// and false otherwise. The function should handle nested objects and arrays. 
// For example, given the objects \{ a: 1, b: \{ c: 2 \} \} and \{ a: 1, b: \{ c: 2 \} \}, the function should return true. -->
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }

    if (typeof x !== 'object' || typeof y !== 'object' || x === null || y === null) {
        return false;
    }

    let keysX = Object.keys(x);
    let keysY = Object.keys(y);

    if (keysX.length !== keysY.length) {
        return false;
    }

    for (let key of keysX) {
        if (!keysY.includes(key) || !deepEqual(x[key], y[key])) {
            return false;
        }
    }

    return true;
}

// Example usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
// console.log(deepEqual(obj1, obj2));  // Output: true

const obj3 = { a: 1, b: { c: 3 } };
// console.log(deepEqual(obj1, obj3));  // Output: false


