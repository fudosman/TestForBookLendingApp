const fetchBooks = require('../fetchBooks');

describe('fetchBooks function', ()=>{
  test('fetches data from a json file', () => {
  expect(fetchBooks.books).toContainEqual({
      author: 'Marguerite Yourcenar',
      country: 'France/Belgium',
      imageLink: 'images/memoirs-of-hadrian.jpg',
      language: 'French',
      link: 'https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n',
      pages: 408,
      title: 'Memoirs of Hadrian',
      year: 1951,
      borrowed: false
    });
  });
});