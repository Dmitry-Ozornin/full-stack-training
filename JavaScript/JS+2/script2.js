class Users {
  #name;
  #secondName;
  constructor(firstName, secondName) {
    this.#name = firstName;
    this.#secondName = secondName;
  }
  get name() {
    return this.#name;
  }
  get secondName() {
    return this.#secondName;
  }
}

class RegularUser extends Users {
  constructor(name, secondName) {
    super(name, secondName);
  }
}

class PremiumUser extends Users {
    constructor(name, secondName) {
    super(name, secondName);
  }
//   premiumAccount = null;
  setPremium(){
    this.premiumAccount = new Date().setFullYear(new Date().getFullYear()+ 1);
  }
  
}


function getAccountInfo(user) {
    if(user instanceof PremiumUser){
        console.log(`Премиум действителен до ${new Date(user.premiumAccount).getFullYear()}` ??  `информация отсутствует `, user.name, user.secondName);
        
    } else if(user instanceof RegularUser){
        console.log(`без преиума `, user.name, user.secondName);
        
    } else {
        console.log('тип пользователе неизвестен');
        
    }
    
}

const regular = new RegularUser("Вася", "Popov");
const premium = new PremiumUser('Вася ', "Васечкин")
premium.setPremium();
const premium2 = new PremiumUser('Илья', 'Гагарин')

getAccountInfo(regular);
getAccountInfo(premium)
getAccountInfo(premium2)
