const myLibrary = [];

const newbookBtn = document.querySelector('.btn-1');
const detForm = document.querySelector('.detail-form');
const cardsection = document.querySelector('.display-cards')
function Books(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

function addBookToLibrary() {
    const bookAuthor = document.querySelector('#author-field').value;
    const bookTitle = document.querySelector('#title-field').value;
    const bookPages = document.querySelector('#pageNum-field').value;
    const bookStatus = document.querySelector('#isRead').checked;
    let newBook = new Books(bookTitle,bookAuthor, bookPages, bookStatus);
    myLibrary.push(newBook);
    render();
}

function render(){
    cardsection.setAttribute("class","display-card-design");
    cardsection.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
        let book = myLibrary[i];
        let bookElm = document.createElement("div");
        bookElm.setAttribute("class","book-card");
        bookElm.innerHTML =`
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">${book.author}</h5>
        </div>
        <div class="card-body">
            <p>${book.numOfPages}</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        </div>
        `;
        cardsection.appendChild(bookElm);
    }
}

const submitBtn = document.querySelector('.submit-book');

newbookBtn.addEventListener('click', () => {
    detForm.classList.add('detail-form-active');
})

detForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
})