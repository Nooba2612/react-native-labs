class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const stringRepo = new Repository<string>();
stringRepo.add("Hello");
stringRepo.add("World");
console.log(stringRepo.getAll());

const numberRepo = new Repository<number>();
numberRepo.add(10);
numberRepo.add(20);
console.log(numberRepo.getAll());
