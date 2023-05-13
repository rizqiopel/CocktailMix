// File: main.js (akan menangani interaksi dengan elemen-elemen HTML dan memperbarui tampilan aplikasi.)

document.addEventListener("DOMContentLoaded", function () {
  const addBookForm = document.getElementById("add-book-form");
  const titleInput = document.getElementById("title-input");
  const authorInput = document.getElementById("author-input");
  const yearInput = document.getElementById("year-input");
  const readInput = document.getElementById("read-input");
  const readBooksContainer = document.getElementById("read-books");
  const unreadBooksContainer = document.getElementById("unread-books");
  const searchBookInput = document.getElementById("searchbook");

  function refreshBookshelf() {
    readBooksContainer.innerHTML = "";
    unreadBooksContainer.innerHTML = "";

    const books = getBooks();
    const filteredBooks = filterBooks(books, searchBookInput.value.trim());

    for (let book of filteredBooks) {
      const bookElement = createBookElement(book);
      if (book.isRead) {
        readBooksContainer.appendChild(bookElement);
      } else {
        unreadBooksContainer.appendChild(bookElement);
      }
    }
  }

  function filterBooks(books, keyword) {
    return books.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      return title.includes(keyword) || author.includes(keyword);
    });
  }

  function createBookElement(book) {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book-item");
    bookElement.innerHTML = `
      <h4>Judul Buku: ${book.title}</h4>
      <p>Penulis: ${book.author}</p>
      <p>Tahun Terbit: ${book.year}</p>
      <button class="delete-button" data-id="${book.id}">Hapus</button>
    `;

    const deleteButton = bookElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      const bookId = this.getAttribute("data-id");
      deleteBook(bookId);
      refreshBookshelf();
    });

    return bookElement;
  }

  addBookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    const isRead = readInput.checked;

    addBook(title, author, year, isRead);
    refreshBookshelf();

    // Reset form input values
    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    readInput.checked = false;
  });

  searchBookInput.addEventListener("input", function () {
    refreshBookshelf();
  });

  // Load and refresh bookshelf on page load
  refreshData();
  refreshBookshelf();
});
