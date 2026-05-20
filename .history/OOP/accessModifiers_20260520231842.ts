class BankAccount {
    readonly userId: number;
    username: string;
    balance: number;
    constructor(userId: number, username: string, balance: number) {
        this.userId = userId;
        this.username = username;
        this.balance = balance;
    }
}

const mezbaBhaiAccount = new BankAccount(1, "Mezba Bhai", 1000);

mezbaBhaiAccount.userId =