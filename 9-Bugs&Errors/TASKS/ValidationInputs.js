// ### პროექტი 45 - Validating Inputs - Input-ების ვალიდაცია
// ხშირად პროგრამის ლოგიკის დაშლა პატარა ფუნქციებად გვიწევს, რომლებიც თითოეულ დავალებას ასრულებენ. 
// შემდეგ ეს ფუნქციები თანმიმდევრობით, მთლიანი პროგრამის ასამუშავებლად გამოძახება.

// დაწერეთ პროგრამა, რომელიც მოგთხოვთ სახელს, გვარს, თანამშრომლის ID-ს და ZIP კოდს. 
// დარწმუნდით, რომ input-ები ვალიდურია შემდეგი წესების მიხედვით:

// • სახელი უნდა იყოს შევსებული.
// • გვარი უნდა იყოს შევსებული.
// • სახელი და გვარი უნდა იყოს მინიმუმ ორი სიმბოლოს სიგრძის.
// • თანამშრომლის ID არის AA-1234 ფორმატში - ორი ასო, დეფისი და ოთხი რიცხვი.
// • ZIP კოდი უნდა იყოს რიცხვი.

// არასწორ მონაცემებზე აჩვენეთ შესაბამისი შეცდომის შეტყობინებები.


// * შექმენით ფუნქცია თითოეული ტიპის ვალიდაციისთვის. შემდეგ შექმენით validateInput ფუნქცია, 
// რომელიც იღებს ყველა Input-ის მონაცემს და იძახებს კონკრეტული ვალიდაციის ფუნქციებს.



// ფუნქცია სახელის ვალიდაციისთვის
function validateFirstName(firstName) {
    if (firstName.length === 0) {
        return "First name must be filled in.";
    } else if (firstName.length < 2) {
        return "First name must be at least 2 characters long.";
    }
    return ""; // ვალიდურია
}

// ფუნქცია გვარის ვალიდაციისთვის
function validateLastName(lastName) {
    if (lastName.length === 0) {
        return "Last name must be filled in.";
    } else if (lastName.length < 2) {
        return "Last name must be at least 2 characters long.";
    }
    return ""; // ვალიდურია
}

// ფუნქცია თანამშრომლის ID-ს ვალიდაციისთვის
function validateEmployeeID(employeeID) {
    const employeeIDPattern = /^[A-Za-z]{2}-\d{4}$/; // AA-1234 ფორმატი
    if (!employeeIDPattern.test(employeeID)) {
        return "Employee ID must be in the format AA-1234.";
    }
    return ""; // ვალიდურია
}

// ფუნქცია ZIP კოდის ვალიდაციისთვის
function validateZipCode(zipCode) {
    const zipCodePattern = /^\d+$/; // მხოლოდ რიცხვები
    if (!zipCodePattern.test(zipCode)) {
        return "The ZIP code must be numeric.";
    }
    return ""; // ვალიდურია
}

// ძირითადი ვალიდაციის ფუნქცია
function validateInput(firstName, lastName, employeeID, zipCode) {
    let errors = [];

    // თითოეული ვალიდაციის ფუნქციის გამოძახება
    const firstNameError = validateFirstName(firstName);
    if (firstNameError) {
        errors.push(firstNameError);
    }

    const lastNameError = validateLastName(lastName);
    if (lastNameError) {
        errors.push(lastNameError);
    }

    const employeeIDError = validateEmployeeID(employeeID);
    if (employeeIDError) {
        errors.push(employeeIDError);
    }

    const zipCodeError = validateZipCode(zipCode);
    if (zipCodeError) {
        errors.push(zipCodeError);
    }

    // თუ შეცდომები არსებობს, ვაბრუნებთ შეცდომების სიას
    if (errors.length > 0) {
        return errors;
    }

    return ["There were no errors found."];
}

// პროგრამის ძირითადი ნაწილი
function main() {
    // const firstName = prompt("Enter your first name:");
    const firstName = "giorgi";

    // const lastName = prompt("Enter your last name:");
    const lastName = "giunashvili";

    // const employeeID = prompt("Enter your employee ID (format AA-1234):");
    const employeeID = "AA-1234";

    // const zipCode = prompt("Enter your ZIP code:");
    const zipCode = "0133";


    const validationErrors = validateInput(firstName, lastName, employeeID, zipCode);

    validationErrors.forEach(error => {
        console.log(error);
    });
}

main();
