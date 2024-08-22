// 1. დაადგინეთ, აქვს თუ არა ობიექტს name ფროფერთი. თუ არ აქვს, მაშინ შექმენით მეთოდი რომელიც იმავე ობიექტს name ფროფერთის შეუქმნის.

/*
let person = {};
let person2 = {
  lastname: 'tsutskiridze',
};
function addPropertyIfNeeded(obj, key, value) {
  if (!obj.hasOwnProperty(key)) {
    obj.addName = function (name) {
      this[key] = name;
    };
    obj.addName(value);
    console.log(obj);
  }
}

addPropertyIfNeeded(person, 'name', 'tekla');
addPropertyIfNeeded(person2, 'hobby', 'swimming');
addPropertyIfNeeded(person, 'diploma', 'CS50');
*/

// 2. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property-ს სახელი.
/*
let person = {
  name: 'temo',
  age: 19,
};

for (let key in person) {
  console.log(key);
}

for (let key of Object.keys(person)) {
  console.log(key);
}

// 3. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value.
/*
for (let key in person) {
  console.log(person[key]);
}

for (let value of Object.values(person)) {
  console.log(value);
}
*/

// 4. გვაქვს სახელების მასივი. შექმენით ობიექტი, სადაც key-value წყვილებად იქნება სახელები და მათი რაოდენობები მასივში.

// let names = ['temo', 'nika', 'luka', 'ani', 'temo', 'temo', 'ani', 'nika'];

// let nameCounter = {};

/*
for (let name of names) {
  if (!nameCounter.hasOwnProperty(name)) {
    nameCounter[name] = 1;
  } else {
    nameCounter[name]++;
  }
}
console.log(nameCounter);
*/
/*
let nameCounter = names.reduce((counterObj, name) => {
  if (!counterObj[name]) {
    counterObj[name] = 1;
  } else {
    counterObj[name]++;
  }
  return counterObj;
}, {});
console.log(nameCounter);
*/

/*
const nameCounter = names.reduce((counterObj, name) => {
  counterObj[name] = (counterObj[name] || 0) + 1;
  return counterObj;
}, {});

console.log(nameCounter);
*/

// 5. შექმენით პროდუქტის პროტოტიპი, რომელსაც ექნება მეთოდი პროდუქტის ფასის საჩვენებლად. პროტოტიპზე დაყრდნობით შექმენით რამდენიმე პროდუქტის ობიექტი, რომელთაც ექნებათ სახელისა და ფასის ფროფერთები.

// შექმენით კალათის პროტოტიპი რომელზე დაყრდნობითაც შეიქმნება კალათის ობიექტები. კალათის ობიექტში უნდა გვქონდეს მასივი, სადაც შეგვეძლება პროდუქტის ობიექტების დამატება. პროტოტიპშივე უნდა იყოს მეთოდი, რომელიც დაამატებს მასივში ახალ პროდუქტებს და მეთოდი, რომელიც დაითვლის კალათაში არსებული ყველა პროდუქტის ჯამურ ფასს.

// let productPrototype = {
//     showProductPrice() {
//       console.log(`${this.name}-ის ფასია ${this.price}`);
//     },
//   };
  
//   function createProduct(name, price) {
//     let product = Object.create(productPrototype);
//     product.name = name;
//     product.price = price;
//     return product;
//   }
//   // let productName = prompt('Enter product name: ');
//   // let productPrice = parseInt(prompt('Enter product price: '));
//   let product1 = createProduct('product1', 500);
//   let product2 = createProduct('product2', 100);
//   let product3 = createProduct('product3', 300);
//   let product4 = createProduct('product4', 100);
//   product1.showProductPrice();
  
//   let cartPrototype = {
//     addProduct(product) {
//       this.products.push(product);
//     },
  
//     showFullPrice() {
//       return this.products.reduce(
//         (fullPrice, product) => fullPrice + product.price,
//         0
//       );
//     },
//   };
  
//   function createCart() {
//     let cart = Object.create(cartPrototype);
//     cart.products = [];
//     return cart;
//   }
  
//   let cart1 = createCart();
//   cart1.addProduct(product1);
//   cart1.addProduct(product2);
//   cart1.addProduct(product3);
//   cart1.addProduct(product4);
//   console.log(cart1);
//   console.log(cart1.showFullPrice());
  