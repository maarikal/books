const form = document.querySelector("form");
const bookNameInput = document.querySelector("#raamatuNimi");
const bookAuthorInput = document.querySelector("#raamatuAutor");
const bookIsbnInput = document.querySelector("#ISBN");
const bookInput = document.querySelector("#nimekiri")
const deleteAllBooks = document.querySelector("#delete-books");

form.addEventListener("submit", addBook);
bookInput.addEventListener("click", deleteBook);
deleteAllBooks.addEventListener("click", deleteBooks);


function addBook(event) {
    const raamatuNimi = bookNameInput.value;
    const raamatuAutor = bookAuthorInput.value;
    const raamatuISBN = bookIsbnInput.value;
    console.log(raamatuNimi + " " + raamatuAutor + " " + raamatuISBN);

    let tr = document.createElement("tr");
    const raamat = [raamatuNimi, raamatuAutor, raamatuISBN];
    for(let i=0; i<raamat.length; i++) {
        let td = document.createElement("td");
        let tekst = document.createTextNode(raamat[i]);
        td.appendChild(tekst);
        tr.appendChild(td);
        tr.appendChild(td);
    }
    bookInput.appendChild(tr);

    // loome lingitava elemendi ja lingi atribuudi
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.className = "secondary-content";
    link.appendChild(document.createTextNode("X"));  // loome kustutamise nupu (X-i)
    tr.appendChild(link);

    addBookToLocalStorage(raamat);

    bookNameInput.value = "";
    bookAuthorInput.value = "";
    bookIsbnInput.value = ""; // teeme sisetuse kastid (ehk input väljad) tühjaks pärast iga sisestust
    event.preventDefault(); // kontrollib, kas vorm Submit töötab
}


function deleteBook(event) {
    if(event.target.textContent == "X") {
        if(confirm("Do you want to delete this book?")) {
            event.target.parentElement.remove();
        }
    }
}


function deleteBooks() {
    if(confirm("Do you want to delete all books?")) {
        while(bookInput.firstElementChild) {
            bookInput.removeChild(bookInput.firstChild);
        }
    }
}


function addBookToLocalStorage(raamat) {
    let books;
    if(localStorage.getItem("books") === null) {
        books = [];
    }   else {
        books = JSON.parse(localStorage.getItem("books"));
    }
   books.push(raamat);
    localStorage.setItem("books", JSON.stringify(books));
    console.log(books);
}
