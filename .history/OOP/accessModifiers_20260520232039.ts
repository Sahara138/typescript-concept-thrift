class BankAccount {
    public readonly userId: number;
    username: string;
    balance: number;
    constructor(userId: number, username: string, balance: number) {
        this.userId = userId;
        this.username = username;
        this.balance = balance;
    }
}

const mezbaBhaiAccount = new BankAccount(1, "Mezba Bhai", 1000);

// mezbaBhaiAccount.userId =2; // Error: Cannot assign to 'userId' because it is a read-only property.