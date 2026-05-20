class BankAccount {
    public readonly userId: number;
    public  username: string;
    private  balance: number;
    constructor(userId: number, username: string, balance: number) {
        this.userId = userId;
        this.username = username;
        this.balance = balance;
    }

    addBalance(amount: number) {
        this.balance += amount;
    }
}

const mezbaBhaiAccount = new BankAccount(1, "Mezba Bhai", 1000);


m

// mezbaBhaiAccount.userId =2; // Error: Cannot assign to 'userId' because it is a read-only property.