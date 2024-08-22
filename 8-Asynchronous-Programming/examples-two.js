// Write a function that runs after 2 seconds when executed,
// counts from 1 to 10 and then fetches the github user data.

//https://api.github.com/users/kachkacha2003

// async function getInfoGithub(){
//     let reponse = await fetch("https://api.github.com/users/kachkacha2003");
//     let data = await reponse.json();
//     console.log(data)
// }

// function myFunction(){
//     let count = 0;
//     let interval = setInterval(()=>{
//         count++; 
//         console.log(count)
//         if(count >= 10){
//             clearInterval(interval)
//             getInfoGithub();

//         }
//     },1000)
// }

// setTimeout(myFunction,2000)

async function getInfoGithub(){
    let reponse=await fetch("https://api.github.com/users/kachkacha2003");
    let data=await reponse.json();
    return data;
}

//  function getInfoGithub(){
//     let data= fetch("https://api.github.com/users/kachkacha2003").then((response)=>response.json()).then(data=>data);
//     return data;
// }

function myFunction(){
    let count=0;
    getInfoGithub().then(final=>console.log(final));
    let interval=setInterval(()=>{
        count++;
        console.log(count);

        if(count>=10){
            clearInterval(interval)

        }
    },100)
}

// setTimeout(myFunction,2000)

// console.log(new Date().getDate())
// console.log(new Date().getHours())
// console.log(new Date().getMinutes())
// console.log(new Date().getMonth());
// console.log(new Date().getTime())
// let arr=["ianvari","feb","march","may"];
// console.log(arr[new Date().getMonth()])

// let a = 1000;
// let interval = setInterval(() => {
//   let hours = new Date().getHours();
//   let minutes = new Date().getMinutes();
//   let seconds = new Date().getSeconds();
//   if (seconds == 30) {
//     clearInterval(interval);
//   }
//   console.log(`${hours}:${minutes}:${seconds}`);
// }, a);
