// File: storage.js(akan bertanggung jawab untuk menyimpan dan mengambil data buku dari penyimpanan lokal)

const STORAGE_KEY = "BOOKSHELF_APP";

let books = [];

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Maaf, browser tidak mendukung penyimpanan lokal");
    return false;
  }
  return true;
}

function saveData() {
  const parsedData = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsedData);
}

function loadData() {
  let serializedData = localStorage.getItem(STORAGE_KEY);
  serializedData = serializedData ? serializedData : "[]";
  return JSON.parse(serializedData);
}

function updateData() {
  if (isStorageExist()) {
    saveData();
  }
}

function refreshData() {
  books = loadData();
}
