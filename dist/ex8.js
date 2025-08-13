"use strict";
class BankAccount8 {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount > 0 && this.status === "active") {
            this.balance += amount;
            this.history.push(`Nạp tiền: +${amount} VND vào lúc 09:55 AM +07, 13/08/2025`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && this.balance >= amount && this.status === "active") {
            this.balance -= amount;
            this.history.push(`Rút tiền: -${amount} VND vào lúc 09:55 AM +07, 13/08/2025`);
        }
    }
    showHistory() {
        console.log(`Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
        if (this.history.length === 0) {
            console.log("Không có giao dịch nào.");
        }
        else {
            this.history.forEach((entry, index) => {
                console.log(`${index + 1}. ${entry}`);
            });
        }
    }
}
class CheckingAccount8 extends BankAccount8 {
    constructor(accountNumber, overdraftLimit) {
        super(accountNumber);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > 0 && this.balance + this.overdraftLimit >= amount && this.status === "active") {
            this.balance -= amount;
            this.history.push(`Rút tiền: -${amount} VND vào lúc 09:55 AM +07, 13/08/2025`);
        }
    }
}
const checkingAccount = new CheckingAccount8("CHK001", 500000);
checkingAccount.deposit(1000000);
checkingAccount.withdraw(800000);
checkingAccount.withdraw(600000);
checkingAccount.showHistory();
