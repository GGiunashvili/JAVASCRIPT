// ### სავარჯიშოები

// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს callback ფუქნციას და იძხებს მას 1 წამის შემდეგ.
  
// function delayedExecution(callback) {
//     setTimeout(() => {
//       callback();
//     }, 1000);
//   }
  
//   // გამოყენების მაგალითი:
//   delayedExecution(() => {
//     console.log("Callback ფუნქცია გამოიძახა 1 წამის შემდეგ!");
//   });

//   function executeAfterDelay(callback) {
//     setTimeout(() => {
//       console.log("1 წამი გავიდა, ახლა გამოვიძახებ callback ფუნქციას...");
//       callback();
//     }, 1000);
//   }
  
//   // გამოყენების მაგალითი:
//   function myCallbackFunction() {
//     console.log("ეს არის callback ფუნქცია, რომელიც გამოიძახეს 1 წამის შემდეგ.");
//   }
  
//   executeAfterDelay(myCallbackFunction);
  
  

// 2. დაწერეთ ფუქნცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს და ორ ქოლბექ ფუქნციას. 
// თუ პირველი რიცხვი მეტია მეორეზე, გამოიძახეთ პირველი ქოლბექი, თუარადა გამოიძხეთ მეორე ქოლბექ ფუნქცია.

// function x (a, b, callback1, callback2){
//     if(a > b){
//         callback1();
//     } else{
//         callback2();
//     }
// }

// x(
//     30,
//     20,
//     () => console.log("true callback1"), // passing a function
//     () => console.log("false callback2")  // passing a function
// )


// 3. დაწერეთ ფუნქცია, რომელიც პარამეტრებად იღებს მასივს, რიცხვს და callback ფუქნციას. 
// callback ფუნქციის გამოძახების შემდეგ მასივში უნდა ჩაიფუშოს რიცხვი და დაბრუნოს განახლებული მასივი. 
// მინიშნება: callback ფუნქციას გამოძახებისას არგუმენტებად გაატანეთ მასივი და რიცხვი, რომელიც მასივში უნდა ჩაიფუშოს.

// function updateArray(arr, num, callback) {
//     // ვიძახებთ callback ფუნქციას არგუმენტებით: მასივი და რიცხვი
//     callback(arr, num);
//     // ჩაგვყავს რიცხვი მასივში
//     arr.push(num);
//     // ვაბრუნებთ განახლებულ მასივს
//     return arr;
// }
// // მაგალითი callback ფუნქციის
// function logArrayAndNumber(arr, num) {
//     console.log("მოცემული მასივი:", arr);
//     console.log("ჩასაფუშავი რიცხვი:", num);
// }
// // ფუნქციის გამოძახება
// const result = updateArray([1, 2, 3], 4, logArrayAndNumber);
// console.log("განახლებული მასივი:", result);



// 4. შექმენით ფრომისი, რომელიც დარეზოლვდება 2 წამის შემდეგ და გამოიტანს წარამტების შეტყობინებას.

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("წარმატება: ფრომისი წარმატებით შესრულდა!");
//     }, 2000); // 2 წამის შემდეგ
// });

// myPromise.then((resolved) => {
//     console.log(resolved);
// });


// function delayedSuccess() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("წარმატება: ფრომისი წარმატებით შესრულდა!");
//         }, 2000); // 2 წამის შემდეგ
//     });
// }

// async function executeAsync() {
//     const message = await delayedSuccess();
//     console.log(message);
// }

// executeAsync();



// 5. შექმენით ფრომისი, რომელიც დარეზოლვდება ან დარეჯექთდება 3 წამის შემდეგ.
//  დარეზოლვდეს თუ იუზერი სრულწლოვანია და დარეჯექთდეს - თუ არაა.
// let i = 20;
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(i > 18){
//             resolve('success');
//         } else{
//             reject("fail");
//         }

//     },300);
// })

// myPromise
// .then(result => console.log(result))


// .catch(
//     (reject => console.log(reject))
// )


// function checkAge(isAdult) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (isAdult) {
//           resolve('User is an adult.');
//         } else {
//           reject('User is not an adult.');
//         }
//       }, 3000);
//     });
//   }
  
//   // გამოყენება
//   checkAge(true)
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  


// 6. შექმენით ფრომისი, რომელიც დაარეზოლვებს შემთხვევების 50%-ში და დანარჩენ 50%-ში დაარეჯექთებს. 
// დაუმკლავდით ორივე ვარიანტს then და catch-ით.


// function promiseTest (){
//     return new Promise((resolve, reject) => {
//         let randomNumber = Math.floor(Math.random() * 100) + 1;
//         if(randomNumber > 50){
//             resolve(`true ${randomNumber} > 50`)
//         }        
//         else if (randomNumber < 50){
//             reject(`ნაკლებია ${randomNumber} < 50`)
//         } 
//         else {
//             resolve(`ტოლია ${randomNumber} = 50`)
//         }
//     })
// }

// promiseTest()
// .then(result=> console.log(result))
// .catch(error => console.log(error))

// 7. შექმენით Promise Chain (მინიმუმ 3 ფრომისით), სადაც თითოეული დარეზოლვდება 1 წამში და გამოიტანს განსხვავებულ 
// წარმატების შეტყობინებებს.

// let promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("ONE success")
//     }, 1000);
// })

// let promise2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("Two success")
//     }, 1000);
// })

// let promise3 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("Three success")
//     }, 1000);
// })


// promise1
//     .then((message1) => {
//         console.log(message1);
//         return promise2; // დაბრუნება შემდეგ ფრომისზე გადასასვლელად
//     })
//     .then((message2) => {
//         console.log(message2);
//         return promise3; // დაბრუნება შემდეგ ფრომისზე გადასასვლელად
//     })
//     .then((message3) => {
//         console.log(message3);
//         console.log('All Promises Resolved!');
//     });



// 8. შექმენით ორი ფრომისი. პირველმა დაარეზოლვოს რიცხვი და მეორემ დარეზოლვებული რიცხვი გაამრავლოს 2-ზე. გამოიყენეთ promise chaining.

// const promise1 = new Promise((resolve) => {
//     const number = 5; // მაგალითად რიცხვი 5
//     resolve(number);
// });

// const promise2 = (number) => {
//     return new Promise((resolve) => {
//         const result = number * 2;
//         resolve(result);
//     });
// };

// promise1
//     .then((resolvedNumber) => {
//         console.log('First Promise Resolved with:', resolvedNumber);
//         return promise2(resolvedNumber);
//     })
//     .then((multipliedNumber) => {
//         console.log('Second Promise Resolved with:', multipliedNumber);
//     });


// 9. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება დადებით რიცხვს და დაითვლის მაგ რიცხვამდე. თითოეული რიცხვი უნდა გამოკონსოლდეს 1 წამის ინტერვალით.


// function calculateNumber(){
//     return new Promise((resolve, reject) => {
//         let i = 1;
//         const intervalId = setInterval(() => {
//             console.log(i);
//             i++;

//             if (i > 5) {
//                 clearInterval(intervalId); // ვწყვეტთ setInterval-ს
//                 resolve('Calculation complete'); // ვრეზოლვებთ ფრომისს
//             }
//         }, 1000);
//     });
// }

// calculateNumber()
//     .then(result => console.log(result));


// 10. დაწერეთ პროგრამა, რომელიც მომხმარბელს შეეკითხება თავისი გითჰაბის იუზერნეიმს და წამოიღებს 
// მის ინფორმაციას გითჰაბის API-დან. API ლინკი - https://api.github.com/users/[username], 
// მაგალითად: https://api.github.com/users/temuritsutskiridze. ჯერ გამოიყენეთ then/catch და შემდეგ async/await.

// githubUserCheckers.html 

// 11. დაწერეთ პროგრამა, რომელსაც API-დან მოაქვს ორი განსხვავებული ინფორმაცია და დაბეჭდოს, როდესაც ორივეს მიიღებს

// function fetchData() {
//     // პირველი API მოთხოვნის შესრულება
//     const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
//     const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json());
    
//     // ორივე Promises-ის პარალელურად შესრულება და შედეგების მიღება
//     Promise.all([promise1, promise2])
//         .then(results => {
//             // პირველ API-ს შედეგი
//             const data1 = results[0];
//             // მეორე API-ს შედეგი
//             const data2 = results[1];
  
//             // შედეგების დაბეჭდვა
//             console.log('Data 1:', data1);
//             console.log('Data 2:', data2);
//         })
//         .catch(error => {
//             // შეცდომის დამუშავება
//             console.error('Error fetching data:', error);
//         });
//   }
  
//   fetchData();
  
// 12. დაწერეთ პროგრამა, რომელიც API-დან წამოიღებს სამ განსხვავებულ დატას და დაბეჭდავს იმას, რომელსაც ყველაზე მალე მიიღებს.

// function fetchFastestData() {
//     // სამ API მოთხოვნას ვქმნით
//     const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
//     const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json());
//     const promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3').then(response => response.json());

//     // Promise.race უზრუნველყოფს, რომ პირველი შესრულებული დაპირება აირჩეს
//     Promise.race([promise1, promise2, promise3])
//         .then(result => {
//             // პირველი დასრულებული მოთხოვნის შედეგი
//             console.log('Fastest Data:', result);
//         })
//         .catch(error => {
//             // შეცდომის დამუშავება
//             console.error('Error fetching data:', error);
//         });
// }

// fetchFastestData();
