// ### სავარჯიშოები

// 1.რიცხვების მასივის გათვალისწინებით, 
// გამოიყენეთ ფილტრი ახალი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ ლუწი რიცხვებს.

// let nums = [2, 4, 5];
// let evenNums = nums.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(evenNums);


// 2.მომხმარებლების გაფილტვრა ასაკის მიხედვით: 
// მომხმარებლის ობიექტების მასივის გათვალისწინებით, თვისებების სახელით და ასაკის მიხედვით, 
// გამოიყენეთ ფილტრი 18 წელზე უფროსი ასაკის მომხმარებელთა მასივის შესაქმნელად.

// let people = [
//     {
//         name: "giorgi",
//         age: 17
//     },
//     {
//         name: "tornike",
//         age: 19
//     }
// ]
// let adultPeople = people.filter(person => person.age > 18 && person.name === "tornike");
// console.log(adultPeople)


// 3.სტრიქონების გაფილტვრა სიგრძის მიხედვით: სტრიქონების მასივის გათვალისწინებით, 
// გამოიყენეთ ფილტრი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ 5 სიმბოლოზე მეტ სტრიქონებს.
// let texts = [
//     {text: "tx"},
//     {text: "txt"},
//     {text: "text"},
//     {text: "text5"},
//     {text: "textt6"}
// ]

// let longText = texts.filter(filteredTxt => filteredTxt.text.length > 5)
// console.log(longText)

// 4.გააორმაგეთ რიცხვები: მოცემული რიცხვების მასივისთვის, შექმენით ახალი მასივი, სადაც თითოეული რიცხვი გაორმაგდება.

// let nums = [1, 2, 3, 4];
// let numsX = nums.map(x => x * 2);
// console.log(numsX)

// 5.მომხმარებლის ობიექტების მასივის გათვალისწინებით, შექმენით მასივი,სადაც მხოლოდ მომხმარებლის სახელებს დააბრუნებს თუ მათი ასაკი იქნება 18ზე მეტი.
// let users = [
//     { name: "Giorgi", age: 19 },
//     { name: "Tornike", age: 17 },
//     { name: "Nino", age: 22 }
// ];
// let usersNames = users.map(usersNames => usersNames.name)


// let adultUsers = users.filter(adult => adult.age > 18)
// let adultUsersNames = adultUsers.map(usersNames => usersNames.name)
// console.log(adultUsersNames)


// მოკლე ვარიანტი
// let userNamesOver18 = users
//     .filter(user => user.age > 18)
//     .map(user => user.name);        

// console.log(userNamesOver18);

// 6.სტრიქონების მასივის გათვალისწინებით, შევქმნათ ახალი მასივი, 
// სადაც თითოეული სტრიქონი გარდაიქმნება მაღალ რეგისტრში,ანუ დიდ ასოებად..

// let strings = ["apple", "banana", "cherry", "date"];

// let upperStrings = strings.map(i => i[0].toUpperCase() + i.slice(1)); 

// let combinedString = upperStrings.join(' ');

// console.log(combinedString);

// 7.იპოვეთ რიცხვების მასივში ყველა რიცხვის ჯამი.ვიყენებთ მაღალი დონის ფუნქციებს.

// let nums = [1, 2, 3, 4];

// let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 20);

// console.log(sum);


// 8.გვაქვს მასივი,სადაც ყრია ადამიანის სახელები,ჩვენი მიზანია შევქმნათ ობიექტი, 
// რომელშიც მითითებული იქნება თუ რამდენჯერ მეორდება მასივში თითოეული სახელი. მაგალითად: \{ "გიო": 2, "საბა": 5, "ნიკა": 3 \}
// let names = ["Ana", "Giorgi", "Nino", "Tornike", "Nino", "Giorgi", "Giorgi"];

// let nameCounts = names.reduce((accumulator, currentName) => {
//     // თუ აკუმულატორში უკვე არსებობს ეს სახელი, ვუმატებთ ერთს
//     if (accumulator[currentName]) {
//         accumulator[currentName] += 1;
//     } else {
//         // თუ ეს სახელი ჯერ არ არსებობს, ვქმნით ახალ ჩანაწერს 1-ით
//         accumulator[currentName] = 1;
//     }
//     return accumulator;
// }, {}); // საწყისი მნიშვნელობა არის ცარიელი ობიექტი

// console.log(nameCounts);
// // შედეგი იქნება: { Giorgi: 3, Nino: 2, Tornike: 1, Ana: 1 }


// let names = ["Ana", "Giorgi", "Nino", "Tornike", "Nino", "Giorgi", "Giorgi"];

// let nameCounts = names.reduce((accumulator, currentName) => {
//     if (accumulator[currentName]) {
//         accumulator[currentName] += 1;
//     } else {
//         accumulator[currentName] = 1;
//     }
//     return accumulator;
// }, {});

// // ობიექტის გარდაქმნა მასივში
// let nameEntries = Object.entries(nameCounts);

// // დახარისხება კლებადობით
// nameEntries.sort((a, b) => b[1] - a[1]);

// // გამოიტანოს შედეგები
// nameEntries.forEach(([name, count]) => {
//     let message = `"${name}" არის გამოყენებული ${count} ჯერ.`;
//     console.log(message);
// });


// 9.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი ზრდადობით.

// let nums = [2, 4, 1, 3];

// let lowNums = nums.sort((a,b) => a - b );

// console.log(lowNums)


// 10.რიცხვების მასივის გათვალისწინებით,დავალაგოთ მასივი კლებადობით.

// let nums = [2, 4, 1, 3];

// let lowNums = nums.sort((a,b) => a - b );

// console.log(lowNums) 

// 11.მომხმარებლების დალაგება სახელების მიხედვით: 
// მომხმარებლის ობიექტების მასივის გათვალისწინებით,დავაბრუნოთ მასივი რომელიც დალაგებული იქნება  ანბანურად მომხმარებლის სახელის მიხედვით.

// let names = ["Ana", "Giorgi", "Nino", "Tornike", "Nino", "Giorgi", "Giorgi"];


// let sortNames = names.sort((a, b) => a.localeCompare(b));

// console.log(sortNames);


// 12.სტრიქონების მასივის გათვალისწინებით, დავაბრუნოთ მასივი,რომელშიც იქნება ელემენტები ზრდადობით,სტრიქონების სიგრძის  მიხედვით.
// let strings = ["apple", "banana", "cherry", "date"];

// // დალაგება სიგრძის მიხედვით
// let sortedByLength = strings.sort((a, b) => a.length - b.length);

// console.log(sortedByLength);


// 13.მასივის გათვალისწინებით, გამოიყენეთ forEach თითოეული ელემენტის კონსოლში დასაპრინტად.
// let fruits = ["apple", "banana", "cherry", "date"];

// // forEach მეთოდის გამოყენება თითოეული ელემენტის კონსოლში გამოსატანად
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });

// // ან Arrow Function-ის გამოყენებით
// fruits.forEach(fruit => console.log(fruit));

// 14.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ forEach რიცხვების  ჯამის გამოსათვლელად.
// let numbers = [10, 20, 30, 40];

// // ჯამის დათვლა forEach() გამოყენებით
// let total = 0;
// numbers.forEach(num => total += num);

// console.log(total); // შედეგი: 100

// 15.რიცხვების მასივის გათვალისწინებით, გამოიყენეთ every, რათა შეამოწმოთ არის თუ არა ყველა რიცხვი დადებითი.
// რიცხვების მასივის გათვალისწინებით, გამოიყენეთ some, რათა შეამოწმოთ არის თუ არა ზოგიერთი  რიცხვი დადებითი.// ყველა ელემენტი დადებითი უნდა იყოს
// let numbers = [10, 20, 30, 40];
// let allPositive = numbers.every(num => num > 0);
// console.log(allPositive); // შედეგი: true

// // ზოგიერთი ელემენტი დადებითი უნდა იყოს
// let mixedNumbers = [10, -20, 30, -40];
// let somePositive = mixedNumbers.some(num => num > 0);
// console.log(somePositive); // შედეგი: true




// 16.იურიდიული ასაკის ყველა მომხმარებელი: მომხმარებლის ობიექტების სიმრავლის გათვალისწინებით,  შეამოწმეთ, არის თუ არა ყველა მომხმარებელი 18 წლის ან უფროსი ასაკის.
// let users = [
//     { name: "Giorgi", age: 19 },
//     { name: "Nino", age: 22 },
//     { name: "Tornike", age: 18 }
// ];

// // every() - შეამოწმოს, ყველა მომხმარებელი 18 წლის ან უფროსი უნდა იყოს
// let allAdults = users.every(user => user.age >= 18);

// console.log(allAdults); 

// 17.სტრიქონების მასივის გათვალისწინებით, შეამოწმეთ,არის თუ არა ყველა სტრიქონი ცარიელი.
// let strings = ["", "", "", ""]; // ყველა სტრიქონი ცარიელია

// // every() - უნდა შევამოწმოთ, ყველა სტრიქონი ცარიელია თუ არა
// let allEmpty = strings.every(str => str === "");

// console.log(allEmpty); // შედეგი: true

// 18.ზოგიერთი რიცხვი კენტია: რიცხვების მასივის გათვალისწინებით,  შეამოწმეთ არის თუ არა კენტი რიცხვები.
// let numbers = [2, 4, 6, 8, 10, 11]; // 11 არის კენტი რიცხვი

// // some() - უნდა შევამოწმოთ, არსებობს თუ არა მინიმუმ ერთი კენტი რიცხვი
// let hasOdd = numbers.some(number => number % 2 !== 0);

// console.log(hasOdd); // შედეგი: true

// 19.ზოგიერთი მომხმარებელი ასაკობრივ ზღვარს ქვემოთ: მომხმარებლის ობიექტების სიმრავლის გათვალისწინებით, გამოიყენეთ some, რომ შეამოწმოთ არის თუ არა 18 წლამდე ასაკის მომხმარებლები.
// let users = [
//     { name: "Giorgi", age: 19 },
//     { name: "Nino", age: 22 },
//     { name: "Luka", age: 17 } // 17 წლისაა, რაც ნიშნავს, რომ არის 18 წლამდე ასაკის მომხმარებელი
// ];

// // some() - უნდა შევამოწმოთ, არის თუ არა მინიმუმ ერთი მომხმარებელი 18 წლამდე
// let hasUnderage = users.some(user => user.age < 18);

// console.log(hasUnderage); // შედეგი: true

// 20.დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.
// function capitalizeWords(sentence) {
//     return sentence
//         .split(' ') // დაყავით წინადადება სიტყვებზე
//         .map(word => 
//             word.charAt(0).toUpperCase() + word.slice(1) // თითოეული სიტყვის პირველი ასო აქციეთ დიდ ასოზე
//         )
//         .join(' '); // გაწვდილი სიტყვები გაწვდეთ ერთ სტრიქონში
// }

// // მაგალითისთვის
// let sentence = "hello world";
// let capitalizedSentence = capitalizeWords(sentence);

// console.log(capitalizedSentence);



// 21.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების 
// მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// function getUniquePropertyValues(objectsArray, propertyName) {
//     // შექმნათ Set, რათა უზრუნველყოს უნიკალური მნიშვნელობები
//     const uniqueValues = new Set();

//     // გაიარეთ თითოეული ობიექტი და დაამატეთ მისი თვისების მნიშვნელობა Set-ში
//     objectsArray.forEach(obj => {
//         if (obj[propertyName] !== undefined) {
//             uniqueValues.add(obj[propertyName]);
//         }
//     });

//     // დაბრუნეთ Array, რომელიც შეიცავს Set-ის უნიკალურ მნიშვნელობებს
//     return Array.from(uniqueValues);
// }

// // მაგალითისთვის
// const people = [
//     { name: "Giorgi", age: 25 },
//     { name: "Nino", age: 30 },
//     { name: "Giorgi", age: 25 },
//     { name: "Tornike", age: 30 },
//     { name: "Ana", age: 22 }
// ];

// const uniqueNames = getUniquePropertyValues(people, "name");
// console.log(uniqueNames); // შედეგი: ["Giorgi", "Nino", "Tornike", "Ana"]

// const uniqueAges = getUniquePropertyValues(people, "age");
// console.log(uniqueAges); // შედეგი: [25, 30, 22]

// 22.დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, 
// თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.
// function isPangram(sentence) {
//     // ყველა ანბანის ასოს სია
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//     // წინადადების სტრიქონის დამუშავება
//     const lowerCaseSentence = sentence.toLowerCase();

//     // ყველა ასოს შემოწმება
//     return alphabet.split('').every(letter => lowerCaseSentence.includes(letter));
// }

// // მაგალითისთვის
// let sentence1 = "The quick brown fox jumps over the lazy dog";
// let sentence2 = "Hello world";

// console.log(isPangram(sentence1)); // შედეგი: true
// console.log(isPangram(sentence2)); // შედეგი: false

// 23.დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების 
// მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".
// function getUniqueSortedWords(sentence) {
//     // გავრცელებული ინგლისური სიტყვების სია
//     const commonWords = new Set(["the", "a", "is", "and", "of", "to", "in", "for", "on", "with", "as", "at", "by"]);

//     // წინადადების გაწვდვა სიტყვებზე
//     const words = sentence
//         .toLowerCase() // რეგისტრის გარეშე
//         .split(/\s+/)  // გაწვდოს სიტყვებზე (მიწერილი, თუ არის spaces, tabs ან new lines)
//         .filter(word => !commonWords.has(word)) // გამორიცხვები გავრცელებული სიტყვების
//         .filter((value, index, self) => self.indexOf(value) === index) // უნიკალური სიტყვები
//         .sort(); // ანბანური თანმიმდევრობა

//     return words;
// }

// // მაგალითისთვის
// let sentence = "The quick brown fox jumps over the lazy dog and the quick brown fox.";
// let uniqueWords = getUniqueSortedWords(sentence);

// console.log(uniqueWords); // შედეგი: ["brown", "dog", "fox", "jumps", "lazy", "over", "quick"]




// 24.დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
// function removeFalsyValues(array) {
//     return array.filter(Boolean);
// }

// // მაგალითისთვის
// let mixedArray = [0, "hello", false, 23, "", null, 45, undefined, "world", NaN];
// let filteredArray = removeFalsyValues(mixedArray);

// console.log(filteredArray); 


// 25.დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად
// function reverseWords(sentence) {
//     return sentence
//         .split(' ') // გაწვდეთ წინადადება სიტყვებზე
//         .reverse() // სიტყვების თანმიმდევრობის პირიქით მოქცევა
//         .join(' '); // გაწვდეთ სიტყვები ერთ სტრიქონში
// }

// // მაგალითისთვის
// let sentence = "The quick brown fox jumps over the lazy dog";
// let reversedSentence = reverseWords(sentence);

// console.log(reversedSentence); // შედეგი: "dog lazy the over jumps fox brown quick The"
