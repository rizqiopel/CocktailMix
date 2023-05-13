// File: data.js (akan berisi fungsi-fungsi untuk menambahkan, menghapus, dan mengambil data buku.)

function addBook(title, author, year, isRead) {
  const newBook = {
    id: +new Date(),
    title,
    author,
    year,
    isRead,
  };

  books.push(newBook);
  updateData();
}

function deleteBook(bookId) {
  const bookIndex = findBookIndex(bookId);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    updateData();
  }
}

function findBookIndex(bookId) {
  let bookIndex = -1;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === bookId) {
      bookIndex = i;
      break;
    }
  }

  return bookIndex;
}

function getBooks() {
  return books;
}
