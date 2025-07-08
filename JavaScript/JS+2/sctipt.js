class BankAccunt {
  #balance = 0;
  constructor(amount) {
    if (amount < 0) {
      throw new Error("баланс не может быть меньше 0");
    }
    this.#balance = amount;
  }
  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    this.#balance = amount;
  }

  deposit(cash) {
    if (cash <= 0) {
      throw new Error("необходимо поплнять на сумму больше 0");
    }
    this.#balance += cash;
    return this.#balance;
  }

  windraw(cash) {
    if (cash <= 0) {
      throw new Error("необходимо снимать  сумму больше 0");
    }
    if (this.#balance - cash < 0) {
      throw new Error(`на счете небдостаточно средст чтобы снять ${cash}`);
    }
    this.#balance -= cash;
    return this.#balance;
  }
}

let account = new BankAccunt(500);
console.log(account.balance);
account.deposit(300);
console.log(account.balance);

account.deposit(2000);
account.windraw(1000);
console.log(account.balance);
// account.balance = 1000 странное поведение , меняет свойство при
console.log(account.balance);
account.deposit(300);
console.log(account.balance);



