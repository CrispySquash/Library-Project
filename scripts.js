//event listener that runs function to add a new book once submit button is pressed
let submit = document.getElementById("submit-btn")
submit.addEventListener('click', addBookToLibrary);

let title = document.getElementById("title")
let author = document.getElementById("author")
let pages = document.getElementById("pages")
let modal = document.getElementById("modal-container");
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];

let titleValue = document.forms["register-book"]["title"].value;
let titleColor = document.forms["register-book"]["title"].style;
let authorValue = document.forms["register-book"]["author"].value;
let authorColor = document.forms["register-book"]["author"].style;
let pagesValue = document.forms["register-book"]["pages"].value;
let pagesColor = document.forms["register-book"]["pages"].style;
let readValue = document.getElementById('read').checked;

let myLibrary = [];

let newBook;

//book constructor
function Book(title, id, author, pages, read) {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    this.title = titleValue;
    this.author = authorValue
    this.pages = pagesValue + ' pg/s';
    this.read = readValue;
}

// function that pushes book to array
function addBookToLibrary(e) {
    e.preventDefault();
    validateInputs(e);

    if (validateInputs()) {
        readValue = document.getElementById('read').checked;
        modal.style.display = "none";
        newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        populateLibrary(newBook);
    }
    populateStorage();
}

//preventing form with empty fields from being submitted
function validateInputs(e) {
    titleValue = document.forms["register-book"]["title"].value;
    titleColor = document.forms["register-book"]["title"].style;
    authorValue = document.forms["register-book"]["author"].value;
    authorColor = document.forms["register-book"]["author"].style;
    pagesValue = document.forms["register-book"]["pages"].value;
    pagesColor = document.forms["register-book"]["pages"].style;

    if (titleValue == "" || titleValue == null) {
        titleColor.backgroundColor = "rgba(255, 0, 0, 0.41)";
    } else { titleColor.backgroundColor = ""; }

    if (authorValue == "" || authorValue == null) {
        authorColor.backgroundColor = "rgba(255, 0, 0, 0.41)";
    } else { authorColor.backgroundColor = ""; }

    if (pagesValue == "" || pagesValue == null) {
        pagesColor.backgroundColor = "rgba(255, 0, 0, 0.41)";
    } else { pagesColor.backgroundColor = ""; }

    if (titleValue == "" || titleValue == null || authorValue == "" ||
        authorValue == null || pagesValue == "" || pagesValue == null) {
        return false;
    } else return true;
}

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
span.onclick = function (e) {
    modal.style.display = "none";
    e.preventDefault();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

//iterates through array and performs the populate library function for each object
myLibrary.forEach(populateLibrary)

// function that creates/styles books from array
function populateLibrary(e) {
    let library = document.getElementById('library');
    let bookDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let pagesDiv = document.createElement('div');
    let readBtn = document.createElement('button');
    let closeBtn = document.createElement('button');
    let title = e.title;
    let author = e.author;
    let pages = e.pages;
    let read = e.read;
    let bookId = e.id;

    bookDiv.classList = 'book';
    bookDiv.style.height = '200px'
    bookDiv.style.width = '160px'
    bookDiv.style.outline = 'solid';
    library.appendChild(bookDiv);
    bookDiv.appendChild(titleDiv);
    titleDiv.innerHTML = `Title: ${title}`;
    bookDiv.appendChild(authorDiv);
    authorDiv.innerHTML = `Author: ${author}`;
    bookDiv.appendChild(pagesDiv);
    pagesDiv.innerHTML = `Pages: ${pages}`;
    bookDiv.appendChild(readBtn);
    bookDiv.appendChild(closeBtn);
    closeBtn.innerHTML = 'Close';

    closeBtn.addEventListener('click', () => {
        // bookDiv.remove();
        const index = myLibrary.findIndex(function (e) {
            return e.id === "_9b46vz47k";

        })
        console.log(index);
        // myLibrary.splice(index, index >= 0 ? 1 : 0);
        // if (index !== -1) myLibrary.splice(index, 1);
        // getStorage();
        populateStorage();
    })

    if (e.read === true) { readBtn.innerHTML = 'Read'; }
    else { readBtn.innerHTML = 'Not Read'; }

    readBtn.addEventListener("click", function () {
        e.read = !e.read;

        if (e.read === true) { readBtn.innerHTML = 'Read'; }
        else { readBtn.innerHTML = 'Not Read'; }
    });

    console.log(read)
}

const populateStorage = () => {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

const getStorage = () => {
    currentLibrary = JSON.parse(localStorage.getItem('library'));
    myLibrary = currentLibrary;
    myLibrary.forEach(populateLibrary);
}

if (!localStorage.getItem('library')) {
    populateStorage();
} else {
    getStorage();
}