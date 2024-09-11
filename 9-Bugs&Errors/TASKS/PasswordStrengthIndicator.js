// ### პროექტი 43 - Password Strength Indicator - პაროლის სიძლიერის შემფასებელი
// ექმენით პროგრამა, რომელიც განსაზღვრავს მოცემული პაროლის სიძლიერეს ამ წესების საფუძველზე:

// • ძალიან სუსტი პაროლი შეიცავს მხოლოდ ციფრებს და რვა სიმბოლოზე ნაკლებია.
// • სუსტი პაროლი შეიცავს მხოლოდ ასოებს და რვა სიმბოლოზე ნაკლებია.
// • ძლიერი პაროლი შეიცავს ასოებს და მინიმუმ ერთ რიცხვს, ასევე, მინიმუმ რვა სიმბოლოს.
// • ძალიან ძლიერი პაროლი შეიცავს ასოებს, ციფრებს და სპეციალურ სიმბოლოებს და არის მინიმუმ რვა სიმბოლოს სიგრძის.

// Example Output
// ```shell
// > The password '12345' is a very weak password.
// > The password 'abcdef' is a weak password.
// > The password 'abc123xyz' is a strong password.
// > The password '1337h@xor!' is a very strong password.
// ```

// * შექმენით passwordValidator ფუნქცია, რომელიც მიიღებს პაროლს არგუმენტად და დააბრუნებს მნიშვნელობას, რომელიც შეფასდება 
// პაროლის სიძლიერის დასადგენად. ფუნქციამ არ უნდა დააბრუნოს სტრიქონის (string) ტიპის მნიშვნელობა.



function passwordValidator(password) {
    const hasLetters = /[a-zA-Z]/.test(password); // შეამოწმებს ასოებს
    const hasNumbers = /[0-9]/.test(password);    // შეამოწმებს რიცხვებს
    const hasSpecialChars = /[!@#\$%\^\&*\)\(+=._-]/.test(password); // სპეციალურ სიმბოლოებს
    const isLongEnough = password.length >= 8;   // შეამოწმებს სიგრძეს (8 სიმბოლოზე მეტი ან ტოლი)

    if (!isLongEnough && hasNumbers && !hasLetters && !hasSpecialChars) {
        return 1; // ძალიან სუსტი პაროლი (მხოლოდ რიცხვები, ნაკლები 8-ზე)
    } 
    else if (!isLongEnough && hasLetters && !hasNumbers && !hasSpecialChars) {
        return 2; // სუსტი პაროლი (მხოლოდ ასოები, ნაკლები 8-ზე)
    } 
    else if (!isLongEnough && hasLetters && hasNumbers && !hasSpecialChars) {
        return 3; // საშუალო პაროლი (ასოები და რიცხვები, მაგრამ ნაკლები 8-ზე)
    }
    else if (isLongEnough && hasLetters && hasNumbers && !hasSpecialChars) {
        return 4; // ძლიერი პაროლი (ასოები და რიცხვები, 8 სიმბოლო ან მეტი)
    } 
    else if (isLongEnough && hasLetters && hasNumbers && hasSpecialChars) {
        return 5; // ძალიან ძლიერი პაროლი (ასოები, რიცხვები და სპეციალური სიმბოლოები, 8 სიმბოლო ან მეტი)
    } 
    else {
        return 0; // პაროლის სიძლიერე ვერ განისაზღვრა
    }
}

function main() {
    // const password = prompt("Enter your password:");
    const password = "sh11";

    const strength = passwordValidator(password);

    switch (strength) {
        case 1:
            console.log(`The password '${password}' is a very weak password. (მხოლოდ რიცხვები, ნაკლები 8-ზე)`);
            break;
        case 2:
            console.log(`The password '${password}' is a weak password. (მხოლოდ ასოები, ნაკლები 8-ზე)`);
            break;
        case 3:
            console.log(`The password '${password}' is a medium strength password. (ასოები და რიცხვები, მაგრამ ნაკლები 8-ზე)`);
            break;
        case 4:
            console.log(`The password '${password}' is a strong password. (ასოები და რიცხვები, 8 სიმბოლო ან მეტი)`);
            break;
        case 5:
            console.log(`The password '${password}' is a very strong password. (ასოები, რიცხვები და სპეციალური სიმბოლოები, 8 სიმბოლო ან მეტი)`);
            break;
        default:
            console.log("Password strength cannot be determined.");
    }
}

main();
