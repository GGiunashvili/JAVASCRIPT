/* დაწერეთ პროგრამა, რომელიც მიმსგავსებული იქნება ბიბლიოთეკის ფუნქციონირებასთან. გვექნება წიგნები, მომხმარებლები. 
იუზერებს შეეძლებათ წიგნების სესხება და ჩაბარება.
  
  - api-ში გვექნება ორი ენდფოინთი - users და books:
      - user-ს ექნება ფროფერთები: id, name, borrowedBooks
      - book-ს ექნება ფროფერთები: id, name, author
  
  - დაწერეთ ფუნქცია, რომელიც დაამატებს ახალ იუზერებს
  - დაწერეთ ფუნქცია, რომელიც ამოშლის არსებულ იუზერს
  
  - დაწერეთ ფუქნცია, რომელიც დაამატებს ახალ წიგნებს
  - დაწერეთ ფუქნცია, რომელიც ამოშლის არსებულ წიგნს
  
  - დაწერეთ ფუნქცია, რომლის მეშვეობითაც იუზერი ისესხებს წიგნს
  - დაწერეთ ფუნქცია, რომლის მეშვეობითაც იუზერი დააბრუნებს წიგნს
   */


// HTTP Methods:
// POST - გამოიყენება ახალი ელემენტის დასამატებლად
// DELETE - გამოიყენება არსებული ელემენტის წასაშლელად
// GET - გამოიყენება ინფორმაციის წამოსაღებად API-დან
// PUT - გამოიყენება არსებული ელემენტის შესაცვლელად (გვიწევს ობიექტის ყველა ფროფერთის დაწერა, თუნდაც ყველა არ იცვლებოდეს)
// PATCH - გამოიყენება არსებული ელემენტის შესაცვლელად (საკმარია მხოლოდ იმ ფროფერთის დაწერა, რომელიც იცვლება, დანარჩენი არაა აუცილებელი)


// Add a new user
async function addNewUser(namesss) {
    try {
      const userResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: namesss,
          borrowedBooks: [],
        }),
      });
  
      if (!userResponse.ok) {
        throw new Error("Failed to add new user");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  addNewUser("ninooo");


  // Delete a user
  async function deleteUser(id) {
    try {
      const deleteResponse = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      if (!deleteResponse.ok) {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
    // deleteUser("1");

  // Add a new book
  async function addNewBook(name, author) {
    try {
      const bookResponse = await fetch("http://localhost:3000/books-1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          author,
        }),
      });
  
      if (!bookResponse.ok) {
        throw new Error("Failed to add new book");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

//   addNewBook("razmuxin", "dostoevksi");
  
  // Generic function to add a book (with full details)
  async function addBook(book) {
    try {
      const bookResponse = await fetch("http://localhost:3000/books-1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({book}),
      });
  
      if (!bookResponse.ok) {
        throw new Error("Failed to add the book");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

//   addBook("jsjsjsjsj");
  
  // Delete a book
  async function deleteBook(id) {
    try {
      const deleteResponse = await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
      });
      if (!deleteResponse.ok) {
        throw new Error("Failed to delete book");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  
  // Borrow a book (User borrows a book from the library)
  async function borrowBook(userId, bookId) {
    try {
      const userResponse = await fetch(`http://localhost:3000/users/${userId}`);
      if (!userResponse.ok) {
        throw new Error("User doesn't exist");
      }
  
      const bookResponse = await fetch(`http://localhost:3000/books-1/${bookId}`);
      if (!bookResponse.ok) {
        throw new Error("Book doesn't exist");
      }
  
      const user = await userResponse.json();
      const book = await bookResponse.json();
  
      const borrowBookResponse = await fetch(
        `http://localhost:3000/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            borrowedBooks: [...user.borrowedBooks, book],
          }),
        }
      );
  
      if (!borrowBookResponse.ok) {
        throw new Error("Failed to borrow the book from the library");
      }
  
    //   await deleteBook(bookId);
    } catch (error) {
      console.log(error.message);
    }
  }

  borrowBook("1", "8")
  
  // Return a book (User returns a book to the library)
  let progress = 0;
  
  async function returnBook(userId, bookId) {
    try {
      const userResponse = await fetch(`http://localhost:3000/users/${userId}`);
      if (!userResponse.ok) {
        throw new Error("User doesn't exist");
      }
  
      const user = await userResponse.json();
  
      // Check if the user has the book
      const bookToReturn = user.borrowedBooks.find((book) => book.id === bookId);
      if (!bookToReturn) {
        throw new Error("User doesn't have that book borrowed");
      }
  
      // Filter the book out of the borrowedBooks array
      const updatedBooksArr = user.borrowedBooks.filter(
        (book) => book.id !== bookId
      );
  
      // Update the user's borrowedBooks list
      const updatedBooksResponse = await fetch(
        `http://localhost:3000/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            borrowedBooks: updatedBooksArr,
          }),
        }
      );
  
      if (!updatedBooksResponse.ok) {
        throw new Error("Failed to return the book");
      }
  
      progress = 1;
  
      // Add the book back to the library
      await addBook(bookToReturn);
    } catch (error) {
      console.log(error.message);
    } finally {
      if (progress === 1) {
        console.log(
          "წიგნის ბიბლიოთეკაში დაბრუნებისას ხარვეზი მოხდა და არც ლაშას დარჩა ჩასაბარებელი წიგნი"
        );
      }
    }
  }
  
  // Example function calls
//   addNewUser("beqa");

  
  // deleteUser(1);
  // deleteUser(2);
  
  // addNewBook("The Great Gatsby", "F. Scott Fitzgerald");
  // addNewBook("To Kill a Mockingbird", "Harper Lee");
  
  // borrowBook(3, 7);
//   returnBook(3, 7);
  