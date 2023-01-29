class Telephone {
  constructor() {
    this.phoneBook = new Set();
    this.observers = new Set();
  }
  // Adding phone number to phonebook
  addPhoneNumber(phoneNumber) {
    this.phoneBook.add(phoneNumber)
  }

  // Removing phone number from phonebook
  removePhoneNumber(phoneNumber) {
    this.phoneBook.delete(phoneNumber)
  }

  // Dial phone number if present in phonebook
  dialPhoneNumber(number) {
    if (this.phoneBook.has(number)) {
      this.notifyObserver(`${number}\nNow dialing ${number}\n`)
    }else{
      this.notifyObserver(`${number} does not exist on PhoneBook.`)
    }
  }

  // Add an observer
  addObserver(observer) {
    this.observers.add(observer)
  }

  // Remove an observer
  removeObserver(observer) {
    this.observers.delete(observer)
  }

  // Notify the observer
  notifyObserver(message) {
    for (const observer of this.observers) {
      observer.notification(message);
    }
  }

}

class Observer {
  constructor(name) {
    this.name = name
  }

  // Recieve a notification
  notification(message) {
    console.log(`${this.name} : ${message}`)
  }
}

// Instantiate Telephone and Observer classes
const telephone = new Telephone();
const somto = new Observer('Somto');
const verike = new Observer('Verike');

let myNumber = 23407023232
let unknownNumber = 2340904532

telephone.addPhoneNumber(myNumber)

telephone.addObserver(somto)
telephone.addObserver(verike)

telephone.dialPhoneNumber(myNumber)
telephone.dialPhoneNumber(unknownNumber)