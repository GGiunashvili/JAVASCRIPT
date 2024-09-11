// ### პროექტი 47 - Coke Machine - კოკა-კოლის მანქანა
// დავუშვათ, რომ მანქანა ყიდის კოკა-კოლას ბოთლებს 50 ცენტად. მასში მხოლოდ შემდეგი მონეტების ჩაგდება შეგვიძლია: 
// 25-ცენტიანი, 10-ცენტიანი და 5-ცენტიანი.

// დაწერეთ პროგრამა, რომელიც Input-ად სთხოვს მომხმარებელს მონეტის "ჩაგდებას" მანამ, სანამ თანხა 50 ცენტს არ მიაღწევს. 
// პროგრამამ ყოველი მონეტის "ჩაგდების" შემდეგ მომხმარებელს უნდა აცნობოს, რამდენი დარჩა გადასახდელი და კვლავ სთხოვოს input-ის შეყვანა. 
// მას შემდეგ, რაც მომხმარებელი მინიმუმ 50 ცენტს შეიტანს, დაბეჭდეთ, რამდენი ცენტი ხურდა ეკუთვნის მას. 
// დაუშვით, რომ მომხმარებელი მხოლოდ მთელ რიცხვებს შეიყვანს - ყველა ისეთი რიცხვის იგნორირება მოახდინეთ, 
// რომელიც დაშვებული მონეტებიდან არც ერთს არ ემთხვევა.



// Allowed coin denominations
const validCoins = [25, 10, 5];
// Total amount due
let amountDue = 50;

while (amountDue > 0) {
  console.log(`Amount Due: ${amountDue}`);
  
  // Prompt user to insert a coin
  let coin = parseInt(prompt("Insert Coin: "));

  // Check if the inserted coin is valid
  if (validCoins.includes(coin)) {
    amountDue -= coin;
  } else {
    console.log("Invalid coin. Please insert 25, 10, or 5 cents.");
  }
}

// Calculate change owed, if any
let changeOwed = Math.abs(amountDue);
console.log(`Change Owed: ${changeOwed}`);
