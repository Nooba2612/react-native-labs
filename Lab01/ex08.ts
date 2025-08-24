class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }
}

const productArr = [new Product("Dien thoai", 20), new Product("Laptop", 10000)];
const filteredArr = productArr.filter((value, index) => {
    return value.getPrice() > 100;
});

console.log(filteredArr);
