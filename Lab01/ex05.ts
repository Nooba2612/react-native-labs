class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount < 0) {
            console.log("Số tiền nạp phải > 0");
            return;
        }

        this.balance += amount;
        console.log("Số dư hiện tại: " + this.balance);
    }

    withdraw(amount: number): void {
        if (amount < 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }

        if (this.balance <= 0 || this.balance < amount) {
            console.log("Số dư tài khoản không đủ");
            return;
        }

        this.balance -= amount;
        console.log("Số dư hiện tại: " + this.balance);
    }
}

const bankAccount = new BankAccount(0);
bankAccount.deposit(100000)
bankAccount.withdraw(50000)
bankAccount.withdraw(500000)