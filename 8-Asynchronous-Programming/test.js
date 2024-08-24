function fetchData() {
  // პირველი API მოთხოვნის შესრულება
  const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
  const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json());
  
  // ორივე Promises-ის პარალელურად შესრულება და შედეგების მიღება
  Promise.all([promise1, promise2])
      .then(results => {
          // პირველ API-ს შედეგი
          const data1 = results[0];
          // მეორე API-ს შედეგი
          const data2 = results[1];

          // შედეგების დაბეჭდვა
          console.log('Data 1:', data1);
          console.log('Data 2:', data2);
      })
      .catch(error => {
          // შეცდომის დამუშავება
          console.error('Error fetching data:', error);
      });
}

fetchData();
