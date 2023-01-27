class Telephone {
    constructor() {
      this.phoneBook = new Set();
      this.observers = new Set();
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneBook.add(phoneNumber)
    }
  
    removePhoneNumber(phoneNumber) {
      this.phoneBook.delete(phoneNumber)
    }
  
    dialPhoneNumber(number) {
      if (this.phoneBook.has(number)) {
        // console.log(`${number}`);
        this.notifyObserver(`${number}\nNow dialing ${number}\n`)
      }else{
        this.notifyObserver(`${number} does not exist on PhoneBook.`)
      }
    }
  
    addObserver(observer) {
      this.observers.add(observer)
    }
  
    removeObserver(observer) {
      this.observers.delete(observer)
    }
  
    notifyObserver(message) {
      for (const observer of this.observers) {
        observer.update(message);
      }
    }
  
  }
  
  class Observer {
    constructor(name) {
      this.name = name
    }
  
    update(message) {
      console.log(`${this.name} : ${message}`)
    }
  }
  
  const telephone = new Telephone();
  const somto = new Observer('Somto');
  const verike = new Observer('Verike');
  
  let myNumber = 23407023232
  let unknown = 2340904532
  
  telephone.addPhoneNumber(myNumber)
  
  telephone.addObserver(somto)
  telephone.addObserver(verike)
  
  telephone.dialPhoneNumber(myNumber)
  telephone.dialPhoneNumber(unknown)