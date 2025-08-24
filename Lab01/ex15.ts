class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class User {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    }

    addUser(user: User): void {
        this.users.push(user);
        console.log(`Added user: ${user.name}`);
    }

    listBooks(): void {
        console.log("Books in library:");
        this.books.forEach((b) => console.log(`- ${b.title} by ${b.author} (${b.year})`));
    }
}

const lib = new Library();

const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
const book2 = new Book("The Pragmatic Programmer", "Andrew Hunt", 1999);

const user1 = new User("Alice", 1);

lib.addBook(book1);
lib.addBook(book2);
lib.addUser(user1);

lib.listBooks();
