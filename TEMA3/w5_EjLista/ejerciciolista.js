class Book {
    constructor(title, genre, author, read = false, readDate = null) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }

    markAsRead() {
        this.read = true;
        this.readDate = new Date(Date.now());
    }
}

class BookList {
    constructor() {
        this.books = [];
        this.lastBookRead = null;
        this.currentBook = null;
        this.nextBook = null;
    }

    add(book) {
        this.books.push(book);
        if (!book.read && !this.currentBook) {
            this.currentBook = book;
            this.updateNextBook();
        }
    }

    finishCurrentBook() {
        if (this.currentBook) {
            this.currentBook.markAsRead();
            this.lastBookRead = this.currentBook;
            this.currentBook = this.nextBook;
            this.updateNextBook();
        }
    }

    updateNextBook() {
        this.nextBook = this.books.find(book => !book.read && book !== this.currentBook) || null;
    }

    getNumberOfReadBooks() {
        return this.books.filter(book => book.read).length;
    }

    getNumberOfUnreadBooks() {
        return this.books.filter(book => !book.read).length;
    }

    listAllBooks() {
        return this.books;
    }

    listUnreadBooks() {
        return this.books.filter(book => !book.read);
    }
}


const futbolisimos1 = new Book("El misterio de los árbitros dormidos", "Aventura", "Roberto Santiago");
const futbolisimos2 = new Book("El misterio del jugador número 13", "Aventura", "Roberto Santiago");
const geronimoStilton = new Book("El reino de la fantasía", "Aventura", "Geronimo Stilton");
const djMarioBook = new Book("Rey del FIFA", "Videojuegos", "DJ Mario");

const bookList = new BookList();

bookList.add(futbolisimos1);
bookList.add(geronimoStilton);
bookList.add(djMarioBook);

console.log("Número de libros no leídos: ", bookList.getNumberOfUnreadBooks());
console.log("Libro actual: ", bookList.currentBook.title);

bookList.finishCurrentBook();
console.log("Último libro leído: ", bookList.lastBookRead.title);
console.log("Libro actual: ", bookList.currentBook.title);

bookList.finishCurrentBook();
console.log("Último libro leído: ", bookList.lastBookRead.title);
console.log("Libro actual: ", bookList.currentBook.title);

bookList.finishCurrentBook();
console.log("Último libro leído: ", bookList.lastBookRead.title);
console.log("Libro actual: ", bookList.currentBook.title);

console.log("Libros no leídos: ", bookList.listUnreadBooks().map(book => book.title));
