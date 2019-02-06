
//account class
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
    var balance = 500;
    for (let t of this.transactions) {
      balance += t;
    }
    console.log(typeof balance);
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
    // console.log(this.transactions);
  }
  
}

// Transaction super class that takes care of the common theme bt withdrawal and deposit class
class Transaction {
  constructor(account, amount) {
    this.account = account;
    this.amount = amount;
  }
  commit() {
    if(!this.isAllowed()) {return false;}
    this.time = new Date();
    this.account.addTransaction(this.amount);
    return true;
  }
}

//withdrawal class
class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }
}

//deposit class
class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('snow-patrol');

t1 = new Withdrawal(myAccount, 50.25);
t1.commit();
console.log('Transaction1: ', t1);
console.log('my account balance is: ', myAccount.balance);

t2 = new Deposit(myAccount, 30);
t2.commit();
console.log('Transaction2: ', t2);
console.log('my account balance is: ', myAccount.balance);

// console.log('my remaining balance is : $',myAccount.balance);
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




