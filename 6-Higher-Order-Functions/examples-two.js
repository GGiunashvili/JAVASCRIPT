// const products = [
//   {
//     name: 'Laptop',
//     category: 'Electronics',
//     price: 1000,
//     ratings: [3, 4, 2, 4, 2],
//   },
//   {
//     name: 'Headphones',
//     category: 'Electronics',
//     price: 200,
//     ratings: [4, 3, 4, 3, 4],
//   },
//   { name: 'Sofa', category: 'Furniture', price: 500, ratings: [4, 4, 4, 2, 3] },
//   {
//     name: 'Chair',
//     category: 'Furniture',
//     price: 100,
//     ratings: [],
//   },
//   {
//     name: 'Smartphone',
//     category: 'Electronics',
//     price: 800,
//     ratings: [4, 2, 5, 2, 4, 2],
//   },
//   {
//     name: 'Coffee Table',
//     category: 'Furniture',
//     price: 300,
//     ratings: [4, 4, 4, 4, 3],
//   },
// ];

// 1)Find all electronics products

// let filteredProducts = products.filter(
//   (product) => product.category == 'Electronics'
// );
// console.log(filteredProducts);

//2)Create a list of product names and their average ratings

// let changedProducts = products.map((product) => ({
//   name: product.name,
//   averageRating: Math.floor(
//     product.ratings.reduce((acc, num) => acc + num, 0) / product.ratings.length
//   ),
// }));
// console.log(changedProducts);

//3)Calculate the total cost of all furniture items

let filtered = products.filter((item) => item.category == 'Furniture');

// let sum = filtered.reduce((acc, num) => acc + num.price, 0);
// let maped = filtered.map((product) => product.price);
// console.log(maped);
// let sum=maped.reduce((acc,num)=>acc+num);

// let categories = products.map((product) => product.category);
// console.log(categories);
//4)Check if there are any products with a rating of 5

// let maxRating = products.filter((product) => product.ratings.includes(5));
// console.log(maxRating[0].name);

//5)Verify if every product has at least one rating

// let everyProduct = products.every((product) => product.ratings.length > 0);
// console.log(everyProduct);

//21.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან

// let arr = [1, 2, 3];
// let number = 100;
// let a = arr.reduce((acc, num) => acc + num, number);
// console.log(a);

// let arr = [1, 2, 3, 1, 2, 4, 5, 3, 6, 7];

// let uniqueArr = arr.filter((num, index) => arr.indexOf(num) == index);
// console.log(uniqueArr);

// console.log(arr.indexOf(4));

// //1 -index-0
// let unique = [...new Set(arr)];
// console.log(unique);
