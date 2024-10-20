let library = [
    "Lord of the Rings",
    "Game of Thrones",
    "Life of Pi",
    "Alice in Wonderland",
    "The Divine Comedy"
]; // This is an array of books

function displayBooks() {
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    library.forEach(function(title, index) {
        let bookInfo = document.createElement("p");
        bookInfo.textContent = '${index + 1}. ${title}';
        bookList.appendChild(bookInfo);
    }); 
}

function addBook(event) {
    event.preventDefault();

    let titleInput = document.getElementById("bookTitle");
    let title = titleInput.value;

    library.push(title);

    titleInput.value = "";

    displayBooks();
}

function searchBook() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";

    let foundBooks = library.filter(function (title) {
        return title.toLowerCase().includes(searchInput);
    });

    foundBooks.forEach(function (title, index) {
        let bookInfo = document.createElement("p");
        bookInfo.textContent = '${title}';
        searchResult.appendChild(bookInfo);
    })
}

document.getElementById("addBookForm").addEventListener("submit", addBook);
displayBooks();