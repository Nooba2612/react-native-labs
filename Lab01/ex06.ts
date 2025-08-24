class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(): string {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}

const book = new Book("Clean Code", "Nooba", 2025);
console.log(book.getSummary());
