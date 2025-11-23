let books = [];

books.push(
  {
    title: Harry Potter And The Philosopher's Stone,
    authorName: J.K. Rowling,
    releaseYear: 1997,
  },
  {
    title: The Lord of the Rings,
    authorName: J.R.R. Tolkien,
    releaseYear: 1954,
  },
  {
    title: The Hobbit or There and Back Again,
    authorName: J.R.R. Tolkien,
    releaseYear: 1937,
  }
);

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

let filteredBooks = books.filter((book) => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
