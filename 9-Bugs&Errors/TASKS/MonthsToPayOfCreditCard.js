// ### პროექტი 44 - Months to Pay Off a Credit Card - საკრედიტო ბარათის დაფარვისთვის საჭირო თვეები
// საკრედიტო ბარათის ბალანსის დაფარვას შეიძლება გაცილებით მეტი დრო დასჭირდეს, ვიდრე მის მფლობელს წარმოუდგენია. 
// გასარკვევად ფორმულა კი არც ისე "მიმზიდველია"... მაგრამ ფორმულის სირთულე შეგიძლიათ, ფუნქციით დამალოთ. 

// შექმენით პროგრამა, რომელიც დაგეხმარებათ განსაზღვროთ, რამდენი თვე დასჭირდება საკრედიტო ბარათის ბალანსის დაფარვას. 
// პროგრამამ უნდა სთხოვოს მომხმარებელს შემდეგი ინფორმაციის შეყვანა: საკრედიტო ბარათის ბალანსი, 
// ბარათის APR (წლიური საპროცენტო განაკვეთი), და თვიური გადასახადი. შემდეგ პროგრამამ უნდა დააბრუნოს თვეების რაოდენობა. ფორმულა შემდეგია:

// ![Image](/images/week3-formula.png)

// • n არის თვეების რაოდენობა.
// • i არის დღიური მაჩვენებელი (APR / 365).
// • b - ბალანსი.
// • p - ყოველთვიური გადასახდელი თანხა.

// Example Output
// ```shell
// > What is your balance? 5000
// > What is the APR on the card (as a percent)? 12
// > What is the monthly payment you can make? 100

// > It will take you 70 months to pay off this card.
// ```

// * გამოიყენეთ ფუნქცია, სახელწოდებით countMonthsUntilPaidOff, რომელიც არგუმენტად იღებს ბალანსს, 
// APR-ს და ყოველთვიურ გადასახადს და აბრუნებს თვეების რაოდენობას. ამ მნიშვნელობებს ფუნქციის გარედან არ მიწვდეთ.



function countMonthsUntilPaidOff(balance, apr, monthlyPayment) {
    // APR-ს გადავიყვანთ დღიურ საპროცენტო მაჩვენებელში
    const dailyRate = apr / 100 / 365;
    
    // გამოვთვლით თვეების რაოდენობას (n)
    const months = Math.ceil(
        -(1 / 30) *
        Math.log(1 + balance / monthlyPayment * (1 - Math.pow(1 + dailyRate, 30))) /
        Math.log(1 + dailyRate)
    );
    
    return months;
}

function main() {
    // const balance = parseFloat(prompt("What is your balance?"));
    const balance = "1000";

    // const apr = parseFloat(prompt("What is the APR on the card (as a percent)?"));
    const apr = "10";

    // const monthlyPayment = parseFloat(prompt("What is the monthly payment you can make?"));
    const monthlyPayment = 100;


    const months = countMonthsUntilPaidOff(balance, apr, monthlyPayment);

    console.log(`It will take you ${months} months to pay off this card.`);
}

main();
