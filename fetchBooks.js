let fetchedbooks = [];

function fetchBooks() {
  const fs = require("fs");
  let booksInJson = fs.readFileSync("./books/books.json", "utf-8");
  fetchedbooks = JSON.parse(booksInJson);
  fetchedbooks.forEach(book => {
    book.borrowed = false;
  });
  return {
    BOOKS: fetchedbooks
  };
}

fetchBooks();

module.exports = {
  books : fetchedbooks
};