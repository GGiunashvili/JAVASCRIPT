// ### პროექტი 48 - Just setting up my twttr - ჩემი twttr-ის დაყენება
// ტექსტური შეტყობინებების ან ე.წ. "ტვიტების" გაგზავნისას, არც ისე იშვიათია სიტყვების შემოკლება დროისა და 
// შეტყობინების სიგრძის დაზოგვის მიზნით. ეს ხშირად ხმოვანთა გამოტოვების ხარჯზე ხდება, როგორც თავდაპირველად Twitter-ს ეძახდნენ twttr-ს. 

// შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტის შეყვანას და შემდეგ იმავე ტექსტს დაბეჭდავს, მ
// აგრამ ყველა ხმოვანს (A, E, I, O და U) გამოტოვებს, მიუხედავად იმისა, დიდი ასოებით ეწერა ისინი თუ - პატარა ასოებით.

// Function to remove vowels from input text
function removeVowels(text) {
    // Define a regular expression for vowels (both uppercase and lowercase)
    const vowels = /[aeiouAEIOU]/g;
    // Replace all vowels with an empty string
    return text.replace(vowels, '');
}

// Prompt user for input
const inputText = prompt("Input: ");
// Process the input to remove vowels
const outputText = removeVowels(inputText);

// Display the output
console.log(`Output: ${outputText}`);
