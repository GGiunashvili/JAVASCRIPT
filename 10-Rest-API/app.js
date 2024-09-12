// GET
// async function fetchData() {
//     const response = await fetch("http://localhost:3000/people/1");
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();



// POST
async function postPerson(person) {
    const response = await fetch("http://localhost:3000/people", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
    });

    console.log(response);
}

// Calling the postPerson function with correct object syntax
postPerson({ name: "lasha", age: "20" });
postPerson({ name: "beqa", age: "20" });
postPerson({ name: "tedo", age: "25" });
postPerson({ name: "tedo", age: "22" });


//  PUT
// async function putPerson(id, newPerson) {
//     const response = await fetch(`http://localhost:3000/people/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPerson),
//     });

//     console.log(response);
// }

// // Calling the putPerson function
// putPerson(2, {
//     name: "giorgi",
//     age: 21,
// });




//Patch
// async function putPerson(id, newPerson) {
//     const response = await fetch(`http://localhost:3000/people/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPerson),
//     });

//     console.log(response);
// }

// // Calling the putPerson function
// putPerson(1, {
//     height: "190 cm",
// });
