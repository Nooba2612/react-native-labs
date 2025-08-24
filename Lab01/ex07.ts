class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}

const user = new User("Nooba");
console.log("User name: ", user.getName());
user.setName("Dang Phuc Nguyen");w
console.log("User name: ", user.getName());
