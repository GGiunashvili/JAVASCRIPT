const fetchData1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
const fetchData2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
const fetchData3 = fetch("https://jsonplaceholder.typicode.com/todos/3");
const fetchData4 = fetch("https://jsonplaceholder.typicode.com/todos/4");
const fetchData5 = fetch("https://jsonplaceholder.typicode.com/todos/5");
const fetchData6 = fetch("https://jsonplaceholder.typicode.com/todos/6");
const fetchData7 = fetch("https://jsonplaceholder.typicode.com/todos/7");
const fetchData8 = fetch("https://jsonplaceholder.typicode.com/todos/8");
const fetchData9 = fetch("https://jsonplaceholder.typicode.com/todos/9");
const fetchData10 = fetch("https://jsonplaceholder.typicode.com/todos/10");

Promise.all([
  fetchData1,
  fetchData2,
  fetchData3,
  fetchData4,
  fetchData5,
  fetchData6,
  fetchData7,
  fetchData8,
  fetchData9,
  fetchData10,
])
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
