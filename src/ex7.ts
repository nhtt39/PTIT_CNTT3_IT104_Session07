enum AccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  CLOSED = "CLOSED"
}

interface Transaction {
  type: string;
  amount: number;
  timestamp: Date;
  balanceAfter: number;
}

class Account {
  public accountNumber: string;
  protected balance: number;
  protected history: Transaction[];
  protected status: AccountStatus;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.history = [];
    this.status = AccountStatus.ACTIVE;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền nạp phải lớn hơn 0");
      return;
    }
    if (this.status !== AccountStatus.ACTIVE) {
      console.log("Tài khoản không hoạt động, không thể nạp tiền");
      return;
    }
    
    this.balance += amount;
    this.history.push({
      type: "DEPOSIT",
      amount: amount,
      timestamp: new Date(),
      balanceAfter: this.balance
    });
    console.log(`Nạp thành công ${amount}. Số dư hiện tại: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền rút phải lớn hơn 0");
      return;
    }
    if (this.status !== AccountStatus.ACTIVE) {
      console.log("Tài khoản không hoạt động, không thể rút tiền");
      return;
    }
    if (amount > this.balance) {
      console.log("Số dư không đủ để rút");
      return;
    }
    
    this.balance -= amount;
    this.history.push({
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      balanceAfter: this.balance
    });
    console.log(`Rút thành công ${amount}. Số dư hiện tại: ${this.balance}`);
  }

  showHistory(): void {
    console.log(`\nLịch sử giao dịch của tài khoản ${this.accountNumber}:`);
    if (this.history.length === 0) {
      console.log("Chưa có giao dịch nào.");
      return;
    }
    
    this.history.forEach((transaction, index) => {
      console.log(
        `${index + 1}. ${transaction.type} - Số tiền: ${transaction.amount}, ` +
        `Thời gian: ${transaction.timestamp.toLocaleString()}, ` +
        `Số dư sau giao dịch: ${transaction.balanceAfter}`
      );
    });
  }
}

class SavingAccount extends Account {
  private interestRate: number;

  constructor(accountNumber: string, interestRate: number) {
    super(accountNumber);
    this.interestRate = interestRate;
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền rút phải lớn hơn 0");
      return;
    }
    if (this.status !== AccountStatus.ACTIVE) {
      console.log("Tài khoản không hoạt động, không thể rút tiền");
      return;
    }
    if (amount > this.balance) {
      console.log("Số dư không đủ để rút");
      return;
    }
    if (this.balance - amount < 0) {
      console.log("Không thể rút quá số dư hiện tại (0 là mức tối thiểu)");
      return;
    }

    this.balance -= amount;
    this.history.push({
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      balanceAfter: this.balance
    });
    console.log(`Rút thành công ${amount}. Số dư hiện tại: ${this.balance}`);
  }
}

const savings = new SavingAccount("SA12345", 0.05);

savings.deposit(1000);
savings.deposit(500);
savings.withdraw(300);
savings.withdraw(1200); 
savings.withdraw(200);

savings.showHistory();