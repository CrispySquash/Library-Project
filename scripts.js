let myLibrary = [];

function Book(author, title, numPages, haveRead) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function addBookToLibrary() {

}

document.getElementById('modal-inputs').onsubmit = function (e) {
    var titleValue = document.forms["register-book"]["title"].value;
    var titleColor = document.forms["register-book"]["title"].style;
    var authorValue = document.forms["register-book"]["author"].value;
    var authorColor = document.forms["register-book"]["author"].style;
    var pagesValue = document.forms["register-book"]["pages"].value;
    var pagesColor = document.forms["register-book"]["pages"].style;
    
    if (titleValue == "" || titleValue == null) {
        titleColor.backgroundColor = "rgba(255, 0, 0, 0.41)";
    } else { titleColor.backgroundColor = "" }

    if (authorValue == "" || authorValue == null) {
        authorColor.backgroundColor = "rgba(255, 0, 0, 0.41)";
    } else { authorColor.backgroundColor = "" }

    if (pagesValue == "" || pagesValue == null) {
        pagesColor.backgroundColor = "rgba(255, 0, 0, 0.41)";
    } else { pagesColor.backgroundColor = "" }

    e.preventDefault();
    return false;
}

let submit = document.getElementById("submit-btn")
let title = document.getElementById("title")
let author = document.getElementById("author")
let pages = document.getElementById("pages")
let modal = document.getElementById("modal-container");
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}