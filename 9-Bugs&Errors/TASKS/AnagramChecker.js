// ### დავალებები

// ### პროექტი 42 - Anagram Checker - ანაგრამის შემმოწმებელი
// შექმენით პროგრამა, რომელიც ადარებს ორ სტრიქონს და ადგენს არის თუ არა ისინი ანაგრამა (სიტყვა, 
// რომელიც წარმოიქმნება სხვა სიტყვის ასოების გადაადგილებით). პროგრამამ უნდა მოითხოვოს ორივე input-ის 
// წინადადება და პასუხი ისე დაბეჭდოს, როგორც მაგალითშია ნაჩვენები.



// * გამოიყენეთ ფუნქცია, სახელად isAnagram, რომელიც არგუმენტად იღებს ორ სტრიქონს და აბრუნებს boolean-ს. 
// გამოიძახეთ ეს ფუნქცია თქვენი მთავარი ფუნქციიდან.
 // * შეამოწმეთ, ორივე სიტყვა ერთნაირი სიგრძისაა თუ არა.


 function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    let cleanedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    let cleanedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check if lengths are the same
    if (cleanedStr1.length !== cleanedStr2.length) {
        return false;
    }

    // Sort and compare the strings
    let sortedStr1 = cleanedStr1.split('').sort().join('');
    let sortedStr2 = cleanedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

function main() {
    const input1 = "gior    gi GIUNASHVILi";
    const input2 = "Giorgi GiunaShvili   ";

    if (isAnagram(input1, input2)) {
        console.log("The strings are anagrams.");
    } else {
        console.log("The strings are not anagrams.");
    }
}

main();
