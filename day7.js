//Activity 1: Object Creation and Access
//Task 1:
const book = {
  title: "A Game of Thrones",
  author: "George R.R. Martin",
  year: "1996",
};

console.log(book);

//Task 2:
console.log(`Title : ${book.title}`);
console.log(`Author : ${book.author}`);


//Activity 2:
//Task 3:
const book1 = {
  title: "A Storm of Swords",
  author: "George R.R. Martin",
  year: "2000",
  getSelection: () => {
    return `Title: ${book1.title}, Author: ${book1.author}`;
  },
};

console.log(book1.getSelection());

//Task 4:
const book2 = {
  title: "A Dance with Dragon",
  author: "George R.R. Martin",
  year: "2010",
  updateYear: (year) => {
    book2.year = year;
  },
};

book2.updateYear(2011);
console.log(book2);


//Activity 3: Nested Objects
//Task 5:
const library = {
  name: "Pustakalay",
  books: [
    {
      title: "A Storm of Swords",
      author: "George R.R. Martin",
      year: "2000",
    },
    {
      title: "A Feast for Crows",
      author: "George R.R. Martin",
      year: "2005",
    },
    {
      title: "A Clash of Kings",
      author: "George R.R. Martin",
      year: "1998",
    },
  ],
};

console.log(library);

//Task 6:
const libraryName = library.name;
const booksTitle = library.books.map((book) => {
  return book.title;
});

console.log(booksTitle);


//Activity 4: The this Keyword
//Task 7:
const book3 = {
  title: "A Storm of Swords",
  author: "George R.R. Martin",
  year: "2000",
  getSelection: function () {
    return `Title: ${this.title}, Author: ${this.year}`;
  },
};

console.log(book3.getSelection());


//Activity 5: Object iteration
//Task 8:
const book4 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

for (const key in book4) {
  console.log(`${key}: ${book4[key]}`);
}

//Task 9:
const book5 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
};

console.log(Object.keys(book5))
console.log(Object.values(book5))