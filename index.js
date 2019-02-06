
//account class
class Account {
  constructor(username, balance) {
    this.username = username;
    this.balance = balance;
  }
}

// Transaction super class that takes care of the common theme bt withdrawal and deposit class
class Transaction {
  constructor(account, amount) {
    this.account = account;
    this.amount = amount;
  }
}

// withdrawal class
class Withdrawal extends Transaction {
  
  get value(value) {
    return this.amount;
  }

  commit() {
    this.account.balance -= this.amount;
  }
}

//deposit class
class Deposit extends Transaction {

  get value(value) {
    return this.amount;
  }

  commit() {
    this.account.balance += this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('snow-patrol', 500);

t1 = new Withdrawal(myAccount, 50.25)
t1.commit();
console.log('Transaction1: ', t1);

// t2 = new Deposit(myAccount, 34)
// t2.commit();
// console.log('Transaction2:', t2);
// t1 = new Withdrawal(50.25);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Deposit(20.00);
// t3.commit();
// console.log('Transaction 3: ', t3);

// console.log('Balance:', balance);




