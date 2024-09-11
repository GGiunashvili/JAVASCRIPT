// ### პროექტი 46 - Camel Case
// თუ ცვლადი არაერთ სიტყვას შეიცავს, ზოგიერთ ენაში ხშირია ცვლადების სახელებისთვის camel case-ის გამოყენება,
// - პირველი სიტყვის პირველი ასო პატარაა, ყოველი მომდევნო სიტყვის პირველი ასო კი დიდი. მაგალითად, 
// მომხმარებლის სახელის ცვლადს შეიძლება ეწოდოს firstName, მისთვის სასურველი მეტსახელისთვის კი - preferredFirstName.

// ზოგიერთ ენაში ამის საპირისპიროდ ე.წ. snake case გამოიყენება, 
// სადაც სიტყვები გამოყოფილია ქვედა ხაზებით (_) და ყველა ასო მცირე რეგისტრშია. 
// მაგალითად, იმავე ცვლადებს დაერქმევა first_name და preferred_first_name.

// შექმენით პროგრამა, რომელიც მომხმარებელს მოუწოდებს, input-ად შეიყვანოს ცვლადის სახელი camel case-ში, 
// პროგრამამ კი უნდა დაბეჭდოს იგივე სახელი snake case-ში. დაუშვით, რომ მომხმარებლის ჩანაწერი აუცილებლად camel case სტილში იქნება. 

function camelToSnake(camelCaseStr) {
    // ვიპოვით ყველა დიდ ასოს და ჩავანაცვლებთ მას ქვედა ხაზით და პატარა ასოთი
    const snakeCaseStr = camelCaseStr.replace(/([A-Z])/g, '_$1').toLowerCase();
    return snakeCaseStr;
}

function main() {
    // const camelCaseInput = prompt("Enter a variable name in camel case:");
    const camelCaseInput = "shsh jKSKSjs";

    const snakeCaseOutput = camelToSnake(camelCaseInput);
    console.log(`The snake case version is: ${snakeCaseOutput}`);
}

main();
