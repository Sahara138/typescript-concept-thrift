// 4th piller of OOP - Encapsuletion


class BankAccountForEMployee {
    public readonly userId: number;
    public  username: string;
    protected  balance: number;
    constructor(userId: number, username: string, balance: number) {
        this.userId = userId;
        this.username = username;
        this.balance = balance;
    }

     addBalance(amount: number) {
        this.balance += amount;
    } 
    // private addBalance(amount: number) {
    //     this.balance += amount;
    // }
}

const employeeAccount = new BankAccountForEMployee(1, "Mezba Bhai", 1000);


mezbaBhaiAccount.addBalance(500);
// mezbaBhaiAccount.balance = 2000; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// mezbaBhaiAccount.userId =2; // Error: Cannot assign to 'userId' because it is a read-only property.


class StudentBankAccount extends BankAccount {
    constructor(userId: number, username: string, balance: number) {
        super(userId, username, balance);
    }

    useBalance(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log(`Used ${amount}. Remaining balance: ${this.balance}`);
        }
    }
}

const studentAccount = new StudentBankAccount(2, "Student Bhai", 500);
studentAccount.useBalance(200); // Used 200. Remaining balance: 300

