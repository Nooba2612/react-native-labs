class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo = (): void => {
        console.log(`brand: ${this.brand} \n`);
        console.log(`model: ${this.model} \n`);
        console.log(`year: ${this.year} \n`);
    };
}

new Car("Mercedes", "S650 Maybach", 2025).showInfo();
