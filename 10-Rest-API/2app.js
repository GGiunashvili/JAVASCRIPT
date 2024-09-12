// --------------------------- GET
// async function fetchData() {
//     const response = await fetch("http://localhost:3000/people");
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();

// ---------------------------POST

// async function postPerson(person) {
//     const responseGet = await fetch("http://localhost:3000/people");
//     const people = await responseGet.json();
//     const maxId = Math.max(...people.map(p => parseInt(p.id)));

//     // Assign the next ID
//     person.id = (maxId + 1).toString();
//     const response = await fetch("http://localhost:3000/people", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(person),
//     });

//     console.log(response);
// }
 
// // Calling the postPerson function with correct object syntax
// postPerson({ name: "IDTEST4", age: "20" });


// async function createUser(user, age) {
//     try {
//       const response = await fetch("http://localhost:3000/people", {
//         method: "POST",
//         headers: {
//           'Content-Type': "application/json"
//         },
//         body: JSON.stringify({
//           name: user,
//           age: age
//         })
//       });
  
//       // თუ მოთხოვნა არ არის წარმატებული
//       if (!response.ok) {
//         throw new Error("Invalid request");
//       }
  
//       // JSON მონაცემების წამოღება
//       const data = await response.json();
//       console.log("User created successfully", data);
//     } catch (error) {
//       console.log("Error:", error.message);
//     }
//   }
  
//   // ფუნქციის გამოძახება
//   createUser("Luka", 25);
  


async function addTeamToEurope() {
    try {
        const response = await fetch("http://localhost:3000/footballTeams", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                team: "Georgia"
            })
        });

        if (!response.ok) {
            throw new Error("Invalid request");
        }

        const data = await response.json();
        console.log("Team added successfully:", data);
        
    } catch (error) {
        console.log("Error:", error.message);
    }
}

addTeamToEurope();



// ---------------------------DELETE
// async function deleteUser(id) {
//     try {
//       const response = await fetch(`http://localhost:3000/people/${id}`, {
//         method: "DELETE",
//         headers: {
//           'Content-Type': "application/json"
//         }
//       });
  
//       // თუ მოთხოვნა არ არის წარმატებული
//       if (!response.ok) {
//         throw new Error("Invalid request");
//       }
  
//       // JSON მონაცემების წამოღება
//       const data = await response.json();
//       console.log("User deleted", data);
//     } catch (error) {
//       console.log("Error:", error.message);
//     }
//   }
  
//   // ფუნქციის გამოძახება
//   deleteUser(1); // აქ ჩაწერე მომხმარებლის ID, რომლის წაშლაც გსურს
  


//------------------- PATCH
// async function changeUser(id, age) {
//     try {
//         const response = await fetch(`http://localhost:3000/people/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': "application/json"
//             },
//             body: JSON.stringify({
//                 age: age
//             })
//         });

//         // თუ პასუხი არ არის წარმატებული
//         if (!response.ok) {
//             throw new Error("Invalid request");
//         }

//         // JSON მონაცემების წამოღება
//         const data = await response.json();
//         console.log("User info changed", data);

//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// // ფუნქციის გამოძახება
// changeUser(2, 100); // აქ ჩაწერე მომხმარებლის ID და ახალი ასაკი



