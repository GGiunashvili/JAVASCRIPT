// ### სავარჯიშოები

// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ობიექტს და დააბრუნებს მის name ფროფერთის მნიშვნელობას.
//  თუ name ფროფერთი არ გააჩნია, დაარეთარნეთ null.

// function getNameProperty(obj) {
//     if (obj.hasOwnProperty('name')) {
//       return obj.name;
//     }
//     return null;
//   }
  
//   // Example usage:
//   const obj1 = { name: "John", age: 30 };
//   const obj2 = { age: 25 };
  
//   console.log(getNameProperty(obj1)); // Output: "John"
//   console.log(getNameProperty(obj2)); // Output: null
  

// 2. გადააწყეთ პირველი დავალება try/catch-ის გამოყენებით. თუ name ფროფერთი არ გააჩნია, გაისროლეთ ერორი და შემდეგ გაუმკლავდით.

// function getNameProperty(obj) {
//     try {
//       if (obj.hasOwnProperty('name')) {
//         return obj.name;  // Return directly when the condition is true
//       }
//       throw new Error('Property "name" is missing');
//     } catch (error) {
//       console.error(error.message);
//       return null;
//     }
//   }
  
//   // Example usage:
//   const obj1 = { name: "John", age: 30 };
//   const obj2 = { age: 25 };
  
//   console.log(getNameProperty(obj1));
//   console.log(getNameProperty(obj2)); 

// 3. დაწერეთ ფუნქცია, რომელიც იღებს ორ რიცხვს პარამეტრებად და ცდილობს მათ გაყოფას. თუ რომელიმე რიცხვის ტიპის არაა, გაისროლეთ ერორი. 
// ასევე გაუმკლავდით იმ შემთხვევასაც, როცა მეორე რიცხვი 0-ია (0-ზე გაყოფა არ შეიძლება).

// function x (a, b){
//     try{
//         if(isNaN(a) || isNaN(b)){
//             throw new Error('first or second input is not number')
//         }
//         if(b == 0){
//             throw new Error('b is zero u cant divdide')
//         }
//         return a / b;
//     } catch(error){
//         console.log(error.message);
//         return null
//     }
// }
// let num1 = 20;
// let num2 = 0;

// console.log(x(num1, num2))


// 4. დაწერეთ ფუნქცია სახელად promptAge, რომელიც შეეკითხება მომხმარებელს თავის ასაკს და თუ არასწორად იქნება ასაკი შემოყვანილი, 
// გასივრის ერორს. ეს ფუნქცია გამოიძახეთ isAdult ფუნქციაში, რომელიც ადგენს არის თუ არა მომხმარებელი სრულწლოვანი. 
// გამოიყენეთ try/catch ერორების გასამკლავებლად.

// function promptAge() {
//     let agePrompt = prompt("What's your age?");

//     // თუ შეყვანილი არ არის რიცხვი ან რიცხვი არასწორია (ნაკლებია 0-ზე)
//     if (isNaN(agePrompt) || agePrompt.trim() === "" || agePrompt < 0) {
//         throw new Error("Please enter a valid age.");  // ერორის სროლა
//     }

//     return Number(agePrompt);  
// }


// function isAdult() {
//     try {
//         let age = promptAge(); 


//         if (age >= 18) {
//             console.log("You are an adult.");
//         } else {
//             console.log("You are not an adult.");
//         }
//     } catch (error) {

//         console.error(error.message);  
//     }
// }

// isAdult();


// 5. დაწერეთ ფუნქცია, რომელიც ცდილობს JSON სტრინგის პარსინგს (მაგალითად სტრინგად ჩაწერილ ობიექტს გადაიყვანს ობიექტში). 
// გამოიყენეთ try/catch იმ ქეისებისთვის, როცა JSON სტრინგი არავალიდურია.

function parseJSON(jsonString) {
    try {
        // JSON სტრინგის პარსინგის მცდელობა
        let parsedObject = JSON.parse(jsonString);
        console.log("Parsed successfully:", parsedObject);
        return parsedObject;
    } catch (error) {
        // თუ JSON სტრინგი არ არის ვალიდური, დავიჭერთ ერორს და დავბეჭდავთ
        console.error("Invalid JSON string:", error.message);
        return null; // დაბრუნება null არავალიდური JSON-ის შემთხვევაში
    }
}

// მაგალითები:

// ვალიდური JSON სტრინგი
const validJSONString = '{"name": "John", "age": 30}';
parseJSON(validJSONString); // Parsed successfully: {name: "John", age: 30}

// არავალიდური JSON სტრინგი
const invalidJSONString = '{"name": "John", "age": 30'; // გამოტოვებულია დახურვის ფრჩხილი
parseJSON(invalidJSONString); // Invalid JSON string: Unexpected end of JSON input


// 6. დაწერეთ ფუნქცია, რომელიც აგზავნის რექვესთს GitHub-ის API-ზე და მოაქვს გითჰაბის იუზერის დატა. 
// (მაგალითად: https://api.github.com/users/ggiunashvili). თუ სასურველი პასუხი ვერ მიიღეთ (როცა response.ok არის false), 
//     გაისროლეთ ერორი და გამკლავდით მას. გამოიყენეთ async/await სინტაქსი.

// ფუნქცია, რომელიც მოაქვს GitHub-ის იუზერის მონაცემები
async function fetchGitHubUserData(username) {
    const url = `https://api.github.com/users/${username}`;
    
    try {
        // რექვესთის გაგზავნა GitHub API-ზე
        const response = await fetch(url);
        
        // თუ response.ok არის false, ვსვრით ერორს
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        // პასუხის JSON ფორმატში გადაყვანა
        const userData = await response.json();
        
        // მონაცემების კონსოლში გამოტანა
        console.log("User Data:", userData);
        return userData;
        
    } catch (error) {
        // ერორის დამუშავება და კონსოლში გამოტანა
        console.error("Failed to fetch user data:", error.message);
        return null;
    }
}

// ფუნქციის გამოძახება, temuritsutskiridze იუზერის ინფორმაციის მისაღებად
fetchGitHubUserData("ggiunashvili");
