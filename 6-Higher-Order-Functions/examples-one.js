// for (let mt = 0; mt < 10; mt = mt +1 ) {
//     console.log(mt);
//   }

// function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//       console.log(i);
//     }
// }

//   repeatLog(2);

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//       action(i);
//     }
//   }
  
//   repeat(3, console.log);


// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//       action(i);
//     }
//   }

// let labels = [];
// repeat(5, i => {
//   labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

// function greaterThan(n) {
//     return m => m > n;
//   }
//   let greaterThan10 = greaterThan(10);
//   console.log(greaterThan10(11));
//   // → true

// ["A", "B"].forEach(l => console.log(l));
// // → A
// // → B



// // filter and Map
// // filter გაფილტრავს დააბრუნებს თრუს
// // map შეადარებს და ჩამოგვიწერს მხოლოდ თრუებს ერთად



// 1. დაწერეთ პროგრამა რომელიც რიცხვების მასივს დაალაგებს ზრდადობის და კლებადობის მიხედვით

// let nums = [4, 1, 2, 3];
// // let numsSort = nums.sort((a, b) => b - a);
// let numsSort = nums.sort((a, b) => a - b);
// console.log(numsSort)

// 2. გვაქვს ადამიანების ობიექტების მასივი.
// ობიექტების ფროფერთებია - სახელი, ასაკი, პროფესია. 
// გაფილტრეთ მასივი და დატოვეთ ისეთი ელემენტები, რომელთა ასაკი მეტია 18-ზე და პროფესიაა პროგრამირება. 
// დარჩნილი ობიექტებიდან გამოიტანეთ მხოლოდ სახელები

// let people = [
//     {name: "Giorgi", age: 25, profession: "programmer"},
//     {name: "Vakho", age: 23, profession: "soccer"},
//     {name: "Tokareshka", age: 16, profession: "art director"},
//     {name: "Niki", age: 25, profession: "programmer"}
// ];

// let aged = people.filter((person) => person.age >= 18 && person.profession === "programmer");
// // let names = aged.map(person => person.name);
// // console.log(names); 



// // 3. დაწერეთ პროგრამა, რომელიც წინადადების ყველა სიტყვას აიყვანს მაღალ რეგისტრში


// // 4. დაქარეთ პროგრამა, რომელიც იპოვნის მასივის ყველა რიცხვის ჯამს

// let nums = 1, 2, 3, 4;

// console.log(nums.sum())





