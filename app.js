// event elements
const form = document.querySelector("form");
// kirjuta document.querySelector(" --- ja nüüd vajuta Tab-i, siis võtab selectori käsu automaatselt.
// kirjuta ...querySelectorAll, kui tahad mitut formi valida

const bookList = document.querySelector(".collection");
const deleteTasksBtn = document.querySelector("#delete-tasks");

form.addEventListener("submit", addTask);
// element jälgib sündmust, läheb submit ning tuleb panna ka, kuhu ta läheb (st tegevuse nime), addTask on Anna enda väljamõeldud nimi
taskList.addEventListener("click", deleteTask);
deleteTasksBtn.addEventListener("click", deleteTasks);

function deleteTasks(event) {
    // event.target.previousElementSibling.innerHTML = "";  saab ka nii, aga siin on liialt palju kirjutamist
    //  taskList.innerHTML = ""; kui on väike andmebaas, siis saab nii kustutada (nn asendada tühja väärtusega)

    // while käsku on parem kasutada suurte andmebaasidega, sest see ei koorma süsteemi nii palju kui innerHTML käsk
    while(taskList.firstElementChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

/* function deleteTask(event) {
    if(event.target.textContent) == "X" {
        console.log(event.target.parentElement);  // et näeks brauseris, kust see pärineb, kes on parent
    }
} */

function deleteBook(event) {
    if(event.target.textContent === "X" ) {
        if (confirm("Do you want to delete this book?")) {
            event.target.parentElement.parentElement.remove();
            // saaksid kontrollida nii, et võtad console.log(event.target.parentElement.parentElement) - et näha, mida taha hakkab kustutama; saab ka nt event.target.parentElement või event.target
            let bookTitle = event.target.parentElement.parentElement.firstChild.textContent;
            //let bookISBN = event.target.parentElement
            //console.log(bookTitle);
            //console.log(bookISBN);
            deleteBookFromLocalStrorage(bookTitle);
            }
        }
}

function deleteBookFromLocalStorage(bookTitle) {
    let books;
    if(localStorage.getItem("books") === null) {
        books = [];
    } else {
        books =JSON.parse(localStorage.getItem("books"));
    }
    for (let i = 0; i < books.length; i++) {
        let book = book[i];
        if(book[0] === bookTitle) {
            books.splice(i, 1);  // slice kustutab kindlas kohas massiivis andmed, siin siis kohal i ja ainult 1 elemendi
        }
    }
    console.log(books);
    localStorage.setItem("books", JSON.stringify(books));
}
/* KUSTUTAMINE ISBN koodi järgi
function deleteBookFromLocalStorage(bookISBN) {
    let books;
    if(localStorage.getItem("books") === null) {
        books = [];
    } else {
        books =JSON.parse(localStorage.getItem("books"));
    }
    for (let i = 0; i < books.length; i++) {
        let book = book[i];
        if(book[2] === bookISBN) {
            books.splice(i, 1);  // slice kustutab kindlas kohas massiivis andmed, siin siis kohal i ja ainult 1 elemendi
        }
    }
    console.log(books);
    localStorage.setItem("books", JSON.stringify(books));
} */

/* KUSTUTAMINE ISBN koodi järgi ja forEach()'iga
function deleteBookFromLocalStorage(bookISBN) {
    let books;
    if(localStorage.getItem("books") === null) {
        books = [];
    } else {
        books =JSON.parse(localStorage.getItem("books"));
    }
    books.forEach(function (value, index) {
        if(book[2] === bookISBN) {
            books.splice(index, 1);
        }
    }
    console.log(books);
    localStorage.setItem("books", JSON.stringify(books));
} */



//console.log(form) -- trükib brauseri konsooli, et mis real on form olemas

// JS ja Javas võib olla koodi järjekord sassis, st nt sündmuse defineerid üleval ja all on alles käsk, ta ei loe koodi ainult ülalt alla

/* function addTask(event) {
    console.log(event);  // saab kirjutada veel console.log'i (event.type ja event.target)
    event.preventDefault(); //see käsk peatab tegevust, et oleks näha üritust brauseri konsoolis
}
*/

function addTask(event) {
    const taskInput = document.querySelector("#task");
    let task = taskInput.value;
    // create <li> element
    const li = document.createElement("li");
    // lisame nüüd css klassi
    li.className = "collection-item";    // kui on mitu klassi, siis paneme classList; kui üks, siis li.class
    // create text element
    const text = document.createTextNode(task);
    // add text to list items (<li>
    li.appendChild(text);

    // create <a> element
    const link = document.createElement("a");
    // add css class
    link.className = "secondary-content";
    // set href attribute to <a>
    link.setAttribute("href", "#");

    // add text content to <a>
    link.appendChild(document.createTextNode("X"));
    // add <a> to <li>
    li.appendChild(link);

    // add li to ul
    const ul = document.querySelector(".collection");
    ul.appendChild(li);

    // removes task's input
    taskInput.value = "";

    event.preventDefault();
}  // koodi muutmiseks parem hiirklikk nime peal, sealt Reactor, sealt Rename

const link = document.createElement("td");

