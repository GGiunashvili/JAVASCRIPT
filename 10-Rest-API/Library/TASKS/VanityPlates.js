// ### დავალებები

// ### პროექტი 49 - Vanity Plates - სანომრე ნიშნები

// მასაჩუსეტში შეგიძლიათ თქვენი მანქანისთვის თქვენთვის სასურველი სანომრე ნიშნები აიღოთ, 
// იმ ასოებითა და ციფრებით, რაც გნებავთ, მაგრამ რამდენიმე წესი უნდა იყოს დაცული:

// - ყველა სანომრე ნიშანი უნდა იწყებოდეს მინიმუმ ორი ასოთი.
// - შეიძლება შეიცავდეს მაქსიმუმ 6 სიმბოლოს (ასოს ან რიცხვს) და მინიმუმ 2 სიმბოლოს.
// - ციფრების გამოყენება არ შეიძლება სანომრე ნიშნის შუაში; ისინი ბოლოს უნდა იყოს. 
// მაგალითად, AAA222 იქნება მისაღები, თუმცა AAA22A ამ წესს ვერ დააკმაყოფილებს.
// - გამოყენებული პირველი რიცხვი არ შეიძლება იყოს "0".
// - დაშვებული არ არის წერტილების, სივრცეების (space) და პუნქტუაციის ნიშნების გამოყენება.

// შექმენით პროგრამა, რომელიც მოუწოდებს მომხმარებელს სანომრე ნიშნის შეყვანისკენ და და შემდეგ output-ად 
// გამოაქვს ან valid (თუ ნიშნები აკმაყოფილებს ყველა მოთხოვნას), ან - Invalid. დაუშვით, რომ მომხმარებლის input-ის ყველა ასო იქნება დიდი.

// Example Output

// ```shell
// > Plate: HELLO
// > Valid
// > Plate: HELLO, WORLD
// > Invalid
// > Plate: GOODBYE
// > Invalid
// > Plate: 50
// > Invalid
// > Plate: BTCMP5
// > Valid
// > Plate: BTCMP0
// > Invalid
// ```



// function isValidVanityPlate(plate) {
//     const lengthValid = plate.length >= 2 && plate.length <= 6;
//     const startsWithLetters = /^[A-Z]{2,}/.test(plate);
//     const endsWithNumbers = /\d*$/.test(plate);
//     const noMiddleDigits = /^[A-Z]+[0-9]*$/.test(plate);
//     const firstDigitNotZero = !(/\d/.test(plate) && plate.indexOf('0') < plate.search(/\d/));
    
//     return lengthValid && startsWithLetters && endsWithNumbers && noMiddleDigits && firstDigitNotZero;
// }

// // const userInput = prompt("შეიყვანეთ სანომრე ნიშანი:");
// const userInput = "HELLO";

// const result = isValidVanityPlate(userInput) ? "Valid" : "Invalid";
// console.log(result);
