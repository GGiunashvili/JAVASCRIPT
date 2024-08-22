// პირველი ფრომისი, რომელიც დაარეზოლვებს რიცხვს
let firstPromise = new Promise((resolve, reject) => {
    let number = 4; // ან ნებისმიერ რიცხვს, რომელიც გსურთ
    resolve(number);
  });
  
  // მეორე ფრომისი, რომელიც მიიღებს რიცხვს და გაამრავლებს მას 2-ზე
  firstPromise
    .then((resolvedNumber) => {
      return new Promise((resolve, reject) => {
        let multipliedNumber = resolvedNumber * 2;
        resolve(multipliedNumber);
      });
    })
    .then((finalResult) => {
      console.log('Final result:', finalResult); // Final result: 10
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  


// // პირველი ფუნქცია, რომელიც დაარეზოლვებს რიცხვს
// function resolveNumber() {
//   return new Promise((resolve, reject) => {
//     let number = 5; // ან ნებისმიერ რიცხვს, რომელიც გსურთ
//     resolve(number);
//   });
// }

// // მეორე ფუნქცია, რომელიც მიიღებს რიცხვს და გაამრავლებს მას 2-ზე
// function multiplyByTwo(number) {
//   return new Promise((resolve, reject) => {
//     let multipliedNumber = number * 2;
//     resolve(multipliedNumber);
//   });
// }

// // promise chaining
// resolveNumber()
//   .then(multiplyByTwo) // პირველ ფრომისის რეზოლვებული რიცხვი გადაეცემა მეორე ფუნქციას
//   .then((finalResult) => {
//     console.log('Final result:', finalResult); // Final result: 10
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
