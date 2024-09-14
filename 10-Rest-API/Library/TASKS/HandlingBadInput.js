// ### პროექტი 50 - Handling Bad Input - ცუდი Input-ის მართვა

// 72-ის წესი სწრაფი მეთოდია იმის შესაფასებლად, თუ რამდენი ხანი დასჭირდება თქვენი ინვესტიციის გაორმაგებას. 
// ამის გამოსათვლელად 72 მის მოსალოდნელ შემოსავალზე (ROR) უნდა გავყოთ. ეს კარგი ინსტრუმენტია, 
// რომელიც დაგეხმარებათ გაარკვიოთ, არის თუ არა აქციები, ობლიგაციები ან ანაბრები თქვენთვის მომგებიანი. 
// ასევე, კარგი პროგრამაა input-ის გასატესტად, რადგან რადგან კომპიუტერებს ნულზე გაყოფა არ შეუძლიათ.

// იმის ნაცვლად, რომ პროგრამა შეაჩეროთ, როდესაც მომხმარებელი არასწორ input-ს შეიყვანს, 
// შეგიძლიათ უბრალოდ განაგრძოთ input-ის მოთხოვნა, სანამ არ მიიღებთ ვალიდურ ჩანაწერს. 
// შექმენით კალკულატორი, რომელიც მოგთხოვთ ინვესტიციის Rate of Return-ს (ROR) და გამოთვლის, 
// რამდენი წელი დასჭირდება თქვენი ინვესტიციის გაორმაგებას.

// ფორმულა შემდეგია: years = 72 /r, სადაც r არის ROR-ის მითითებული მაჩვენებელი.

// Example Output

// ```shell
// > What is the rate of return? 0
// > Sorry. That's not a valid input.
// > What is the rate of return? ABC
// > Sorry. That's not a valid input.
// > What is the rate of return? 4
// > It will take 18 years to double your initial investment.
// ```

// - არ მისცეთ მომხმარებელს საშუალება, პროგრამაში ჩაწეროს 0.
// - არ მისცეთ საშუალება, ჩაწეროს არა-რიცხვითი input.
// - გამოიყენეთ ციკლი (loop) ცუდი input-ისთვის, რათა დარწმუნდეთ, რომ მომხმარებელი ვალიდურ მნიშვნელობას შეიყვანს.

// function calculateYearsToDouble(interestRate) {
//     return 72 / interestRate;
// }

// while (true) {
//     // const userInput = prompt("What is the rate of return?");
//     const userInput = "2";

    
//     // გადაკეთება რიცხვად
//     const rateOfReturn = parseFloat(userInput);
    
//     // ვალიდური ინპუტის შემოწმება
//     if (isNaN(rateOfReturn) || rateOfReturn <= 0) {
//         console.log("Sorry. That's not a valid input.");
//     } else {
//         const years = calculateYearsToDouble(rateOfReturn);
//         console.log(`It will take ${years} years to double your initial investment.`);
//         break; // დაიხურება ციკლი, როდესაც ვალიდური მნიშვნელობა მიიღება
//     }
// }
