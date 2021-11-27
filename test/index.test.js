const library = require("../index");

// test the addBook function
describe("Library.library.addBook", () => {
  test("should add a book", () => {
    const book = {
      "author": "Laurence Sterne",
      "country": "England",
      "imageLink": "images/the-life-and-opinions-of-tristram-shandy.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "year": 1760
    };
    expect(book.author).toBeDefined();
    expect(book.title).toBeDefined();
    expect(book.year).toBeDefined();
    expect(book.pages).toBeDefined();
    expect(book.country).toBeDefined();
    expect(book.language).toBeDefined();
    expect(book.imageLink).toBeDefined();
    expect(book.link).toBeDefined();
    expect(library.library.viewOneBook("The Life And Opinions of Tristram Shandy")).toEqual(
      expect.objectContaining({
        status: "error",
        message: "Book not found"
      })
    );
    expect(library.library.addBooks(book)).toEqual(
      expect.objectContaining({
        status: "success",
        message: "Book added",
      })
    );
  });
});

// test the borrowBook function
describe("Library.library.borrowBook", () => {
  test('should check if book is already borrowed' , () => {
    expect(library.library.borrowBook('The Divine Comedy')).toEqual(
      expect.objectContaining({
        status: "success",
        message: "Book borrowed",
      })
    );
  });
});


// test the returnBook function
describe("Library.library.returnBook", () => {
  test('should return the book successfully',() => {
    expect(library.library.returnBook('The Divine Comedy')).toEqual(
      expect.objectContaining({
        status: "success",
        message: "Book returned",
      })
    );
  });
});
// test the viewAllBooks function
describe("Library.library.viewAllBooks", () => {
  test('should return all books', () => {
    expect(library.library.viewAllBooks()).toMatchObject(
      {
        status: "success",
        message: "Books found",
      }
    );
  });
});
// test the viewOneBook function
describe("Library.library.viewOneBook", () => {
  test('should return a book', () => {
    expect(library.library.viewOneBook('The Divine Comedy')).toEqual(
      expect.objectContaining({
        status: "success",
        message: "Book found",
      })
    );
  });
});

// test the viewBorrowedBooks function
describe("Library.library.viewBorrowedBooks", () => {
  test('should return borrowed books', () => {
    expect(library.library.viewBorrowedBooks()).toEqual(
      expect.objectContaining({
        status: "success",
        message: "Books found"
      })
    );
  });
});