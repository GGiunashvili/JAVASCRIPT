let a = 1000;
let interval = setInterval(() => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  if (seconds == 30) {
    clearInterval(interval);
  }
  console.log(`${hours}:${minutes}:${seconds}`);
}, a);
