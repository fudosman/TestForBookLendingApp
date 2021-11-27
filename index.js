const Allbooks = require("./fetchBooks");

// USING THE MODULE DESIGN PATTERN TO IMPLEMENT THE LIBRARY
let library = (function () {
  
  // private global variables
  let _books = Allbooks.books;

  // add a book
  function addBooks({ author, country, imageLink, language, link, pages, title, year }) {
    let newBook = {
      author: author,
      country: country,
      imageLink: imageLink,
      language: language,
      link: link,
      pages: pages,
      title: title,
      year: year
    };

    if (newBook.author == undefined) {
      console.log("Author is required");
      return {
        status: "error",
        message: "Please enter an author",
      };
    } else if (newBook.title == undefined) {
      console.log("Title is required");
      return {
        status: "error",
        message: "Please enter a title",
      };
    } else if (newBook.year == undefined) {
      console.log("Year is required");
      return {
        status: "error",
        message: "Please enter a year",
      };
    } else if (newBook.pages == undefined) {
      console.log("Pages is required");
      return {
        status: "error",
        message: "Please enter the number of pages",
      };
    } else if (newBook.country == undefined) {
      console.log("Country is required");
      return {
        status: "error",
        message: "Please enter the country",
      };
    } else if (newBook.language == undefined) {
      console.log("Language is required");
      return {
        status: "error",
        message: "Please enter the language",
      };
    } else if (newBook.imageLink == undefined) {
      console.log("Image Link is required");
      return {
        status: "error",
        message: "Please enter the image link",
      };
    } else if (newBook.link == undefined) {
      console.log("Link is required");
      return {
        status: "error",
        message: "Please enter the link",
      };
    }else {
      let duplicate = _books.find(book => book.title === newBook.title);
      if (duplicate) {
        console.log("Book already exists");
        return {
          status: "error",
          message: "Book already exists",
        };
      }
      _books.push(newBook);
      console.log("Book added successfully");
      return {
        status: "success",
        message: "Book added",
      };
    } 
  }

  // Borrow a book
  function borrowBook(title) {
    let book = _books.find(book => book.title === title);
    if (book) {
      if(book.borrowed === true){
        console.log("Book already borrowed, try another time");
        return {
          status: "error",
          message: "Book already borrowed",
        };
      }

      book.borrowed = true;
      console.log(`${book.title} has been borrowed`);
      return {
        status: "success",
        message: "Book borrowed",
      };
    } else {
      console.log("Book not found");
      return {
        status: "error",
        message: "Book not found",
      };
    }
  }
  // Return borrrowed books
  function returnBook(title) {
    let book = _books.find(book => book.title === title);
    if (book) {
      book.borrowed = false;
      console.log(`${book.title} has been returned`);
      return {
        status: "success",
        message: "Book returned",
      };
    } else {
      console.log("Book not found");
      return {
        status: "error",
        message: "Book not found",
      };
    }
  }
  // View all books in library
  function viewAllBooks() {
    // console.log(_books);
    if(_books.length === 0){
      console.log("No books in library");
      return {
        status: "error",
        message: "No books in library",
      };
    } else {
      console.log("Books in library", _books);
      return {
        status: "success",
        message: "Books found",
        books: _books,
      };
    }
    
  }
  // View one book in library
  function viewOneBook(title) {
    let book = _books.find(book => book.title === title);
    if (book) {
      console.log(book);
      return {
        status: "success",
        message: "Book found",
        book: book,
      };
    } else {
      console.log("Book not found");
      return {
        status: "error",
        message: "Book not found",
      };
    }
  }
  // View borrowed books
  function viewBorrowedBooks() {
    let borrowedBooks = _books.filter(book => book.borrowed === true);
    if (borrowedBooks.length > 0) {
      console.log(borrowedBooks);
      return {
        status: "success",
        message: "Books found",
        books: borrowedBooks,
      };
    } else {
      console.log("No borrowed books, plz lend out some books!");
      return {
        status: "error",
        message: "No borrowed books",
      };
    }
  }

  return {
    addBooks: addBooks,
    borrowBook: borrowBook,
    returnBook: returnBook,
    viewAllBooks: viewAllBooks,
    viewOneBook: viewOneBook,
    viewBorrowedBooks: viewBorrowedBooks,
    donateBook: addBooks
  };
})();



// INITIALIZING THE LIBRARY
// library.viewAllBooks();

// library.addBooks({
//   author: 'Leo Tolstoy',
//   country: 'Russia',
//   imageLink: 'images/the-death-of-ivan-ilyich.jpg',
//   language: 'Russian',
//   link: 'https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n',
//   pages: 1006,
//   title: 'Death of Ivan',
//   year: 1886
// });

// library.borrowBook("The Divine Comedy");
// library.borrowBook("The Red and the Black");
// library.borrowBook("Oedipus the King");
library.borrowBook("King Lear");
library.borrowBook("Hamlet");
library.borrowBook("Hamlet");


// library.returnBook("The Divine Comedy");


// library.donateBook({
//   "author": "Laurence Sterne",
//   "country": "England",
//   "imageLink": "images/the-life-and-opinions-of-tristram-shandy.jpg",
//   "language": "English",
//   "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
//   "pages": 640,
//   "title": "The Life And Opinions of Tristram Shandy",
//   "year": 1760
// });

// library.viewBorrowedBooks();

// library.viewOneBook("Gulliver's Travels");

module.exports = {
  library: library
};