// // PROMISES


// // I. რა არის Promise?

// // process on image
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png


// // II. Promise-ის შექმნა

// const myPromise = new Promise((resolve, reject) => {
//     // ასინქრონული ოპერაცია აქ
//     let success = true; // ვთქვათ, ეს არის ოპერაციის შედეგი

//     if (success) {
//         resolve("Operation was successful!"); // წარმატებული შედეგის შემთხვევა
//     } else {
//         reject("Operation failed!"); // შეცდომის შემთხვევა
//     }
// });

// // same to write as function 

// function performAsyncOperation() {
//     return new Promise((resolve, reject) => {
//         // Asynchronous operation here
//         let success = true; // Let's assume this is the result of the operation

//         if (success) {
//             resolve("Operation was successful!"); // Successful outcome
//         } else {
//             reject("Operation failed!"); // Failure outcome
//         }
//     });
// }

// // Usage
// performAsyncOperation()
//     .then(result => {
//         console.log(result); // Logs: "Operation was successful!"
//     })
//     .catch(error => {
//         console.error(error); // Logs error message if the operation failed
//  });



// //  III-IV. Promise Chaining

// // შექმენი პრომისი, რომელიც თავიდან აბრუნებს 10-ს. შემდეგ, გამოიყენე chaining, 
// // რომ ჯერ გაამრავლო ეს რიცხვი 2-ზე და შედეგი დაბეჭდო კონსოლში, 
// // შემდეგ კი მიიღებული შედეგი გაამრავლო 3-ზე და კვლავ დაბეჭდო კონსოლში. თუ სადმე შეცდომა მოხდება, ისიც კონსოლში გამოიტანე.

// const myPromise = new Promise((resolve, reject) => {
//     resolve(10);
// });

// myPromise
// .then(result => {
//     console.log(result); // ბეჭდავს 10
//     return result * 2;
// })
// .then(result => {
//     console.log(result); // ბეჭდავს 20
//     return result * 3;
// })
// .then(result => {
//     console.log(result); // ბეჭდავს 60
// })
// .catch(error => {
//     console.error(error);
// });
    


// // V-VI. მრავალ Promise-ის მართვა: Promise.all, Promise.race

// // A Promise.all

// // Promise.all: ეშვება რამდენიმე Promise პარალელურად და აბრუნებს ახალ Promise-ს, რომელიც შესრულდება მაშინ, 
// // როდესაც ყველა გადაცემული Promise დასრულდება.

// // 1 example

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values); // ბეჭდავს [3, 42, "foo"]
// })
// .catch((error) => {
//     console.error('One of the promises failed:', error); // ბეჭდავს შეცდომის შეტყობინებას
// });

// 2 example
// const fetchData1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// const fetchData2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
// const fetchData3 = fetch("https://jsonplaceholder.typicode.com/todos/3");
// const fetchData4 = fetch("https://jsonplaceholder.typicode.com/todos/4");
// const fetchData5 = fetch("https://jsonplaceholder.typicode.com/todos/5");
// const fetchData6 = fetch("https://jsonplaceholder.typicode.com/todos/6");
// const fetchData7 = fetch("https://jsonplaceholder.typicode.com/todos/7");
// const fetchData8 = fetch("https://jsonplaceholder.typicode.com/todos/8");
// const fetchData9 = fetch("https://jsonplaceholder.typicode.com/todos/9");
// const fetchData10 = fetch("https://jsonplaceholder.typicode.com/todos/10");

// Promise.all([
//   fetchData1,
//   fetchData2,
//   fetchData3,
//   fetchData4,
//   fetchData5,
//   fetchData6,
//   fetchData7,
//   fetchData8,
//   fetchData9,
//   fetchData10,
// ])
//   .then((responses) => {
//     return Promise.all(responses.map((response) => response.json()));
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));




// // B Promise.race
// // Promise.race: ეშვება რამდენიმე Promise და აბრუნებს პირველ Promise-ს, 
// // რომელიც დასრულდება (არ აქვს მნიშვნელობა, წარმატებულად თუ წარუმატებლად).

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value); // ბეჭდავს "two"
//   });

  

// // VII. async და await - Promises-ის გამოყენება უფრო მარტივად

// // async და await არის Promises-ის გამოყენების უფრო მარტივი გზა. async ფუნქცია ავტომატურად აბრუნებს Promise-ს, 
// // ხოლო await კლავიში აჩერებს კოდის შესრულებას, სანამ Promise არ შესრულდება.

// async function fetchData() {
//   try {
//       let response = await fetch("https://api.github.com/users/ggiunashvili");
//       let data = await response.json();
//       console.log(data);
//   } catch (error) {
//       console.error("Error:", error);
//   }
// }

// fetchData();

// // it looks like this in Promise

// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);
//       })
//       .catch(error => {
//           console.error("Error:", error);
//       });
// }

// fetchData();


// // VIII. შეცდომების მართვა Promise-ებთან

// const myPromise = new Promise((resolve, reject) => {
//   reject("Something went wrong!");
// });

// myPromise
//   .then(result => {
//       console.log(result);
//   })
//   .catch(error => {
//       console.error("Caught an error:", error); // ბეჭდავს "Caught an error: Something went wrong!"
//   });


// // IX. ბოლო finally მეთოდი

// // finally მეთოდი გამოიყენება იმისთვის, რომ კოდი შესრულდეს, განურჩევლად იმისა, წარმატებულად შესრულდა თუ არა Promise.
// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     })
//     .finally(() => {
//         console.log("Promise has been settled."); // შესრულდება ყველა შემთხვევაში
//     });











// SOME GOOD EXAMPLES

// PROMISE

// 1. Check Weather
// function checkWeather() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           // Simulating weather check
//           let isSunny = Math.random() > 0.5;
//           if (isSunny) {
//               resolve('It is sunny today!');
//           } else {
//               reject('It is rainy today.');
//           }
//       }, 2000); // Delay of 2 seconds
//   });
// }

// checkWeather()
// .then((message) => {
//   console.log(message); // Logs "It is sunny today!" if resolved
// })
// .catch((error) => {
//   console.log(error); // Logs "It is rainy today." if rejected
// });
    

