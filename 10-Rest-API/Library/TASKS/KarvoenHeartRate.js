// ### პროექტი 52 - Karvonen Heart Rate

// Karvonen Heart Rate არის ერთ-ერთი მეთოდი თქვენი პულსის დადგენისთვის. შექმენით პროგრამა, რომელიც შეეკითხება 
// მოხმარებელს მის ასაკსა და გულისცემას, შემდეგ კი ამ მონაცემებზე დაყრდნობით დაითვლის პულსს,
// სხვადასხვა ინტენსიურობის მიხედვით (55 % -იდან 95 % -მდე). გამოიტანეთ ამ ყველაფრის ამსახველი ცხრილი. 
// სეთი, როგორიც მაგალითშია ნაჩვენები.

// - გამოსათვლელი ფორმულა: TargetHeartRate = (((220 - age) - restingHR) \* intensity) + restingHR

// მაგალითად:


// - ხელით არ დაწეროთ პროცენტები, გამოიყენეთ ციკლი და გაზარდეთ 5 პროცენტით 55-95 მნიშვნელობები.
// - გააკეთეთ ვალიდაცია, არ მისცეთ მომხმარებელს საშუალება რომ შეიყვანოს input-ში რიცხვების გარდა სხვა სიმბოლოები.


function calculateTargetHeartRate(age, restingHR, intensity) {
    return (((220 - age) - restingHR) * intensity) + restingHR;
}

// მომხმარებლის ასაკისა და resting heart rate-ის მოთხოვნა
// const restingPulse = prompt("Resting Pulse:");
// const ageInput = prompt("Age:");
const restingPulse = "80";
const ageInput = "30";


// ვალიდაციის შემოწმება
const restingHR = parseInt(restingPulse);
const age = parseInt(ageInput);

if (isNaN(restingHR) || isNaN(age)) {
    console.log("Please enter valid numbers for resting pulse and age.");
} else {
    console.log("Intensity | Rate");
    console.log("-------------|--------");
    
    for (let intensity = 0.55; intensity <= 0.95; intensity += 0.05) {
        const targetHeartRate = calculateTargetHeartRate(age, restingHR, intensity);
        console.log(`${(intensity * 100).toFixed(0)}% | ${Math.round(targetHeartRate)} bpm`);
    }
}
