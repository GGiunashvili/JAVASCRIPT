
// // განსხვავებული ტიპის callback ფუნქციები:

// // 1. სინქრონული Callback:

// function greet(name, callback) {
//     console.log("Hello " + name + " nice to meet u " + callback() + " see u tomorrow");
// }

// function sayGoodbye() {
//     return "Goodbye!";
// }

// greet("Levan", sayGoodbye);


// // 2. ასინქრონული Callback:

// // შექმენი ფუნქცია, რომელიც 3 წამში მიიღებს ტექსტს და შემდეგ გამოიძახებს callback ფუნქციას, 
// // რომელიც ამ ტექსტს დიდ ასოებად გადაიყვანს და კონსოლში გამოიტანს.

// function getData(callback) {
//     setTimeout(() => {
//         const data = "hello, world!";
//         // console.log("Data received");
//         callback(data);
//     }, 1000);
// }

// function processData(data) {
//     const processedData = data.toUpperCase();
//     console.log("Processed Data: " + processedData);
//     // console.log("rame" + processedData)

// }
// getData(processData);



// // 3. Callback in Array Methods:


// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubled); // [2, 4, 6, 8, 10]


// // 4. Callback in Event Handling:

// document.getElementById("myButton").addEventListener("click", function() {
//     console.log("Button clicked!");
// });


// // 5. Callback in Promises:

// fetch("https://api.github.com/users/ggiunashvili")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); // ბეჭდავს მთელ JSON ობიექტს
//         return data.login; // აბრუნებს login ველს შემდეგი then-ისთვის
//     })
//     .then(userLogin => console.log(userLogin))
//     .catch(error => console.error("Error:", error));


//     // const handleResponse = response => response.json();
//     const handleData = data => console.log(data);
//     const handleError = error => console.error("Error:", error);
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(handleResponse)
//         .then(handleData)
//         .catch(handleError);


// //  6. Callback with Higher-Order Functions:

// function higherOrderFunction(callback) {
//     callback(); // იძახებს callback ფუნქციას, რომელიც გადაეცა არგუმენტად
// }

// higherOrderFunction(function() {
//     console.log("This is a callback function!"); // ბეჭდავს "This is a callback function!"
// });

