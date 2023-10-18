// In javascript,classes are a way to create objects with shared properties and methods properties and methods. Here is a basic example of how to define and use a class:

/*
// Basic Example No = 01

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log("Some Generic Animal Sound");
    }
}

// Creating An Instance Of The Animal Class

const Dog = new Animal("Buddy", "Dog");


console.log(Dog.name); // Output => Buddy
console.log(Dog.species); // Output => Dog
Dog.makeSound(); // Output => Some Generic Animal Sound

*/

// Basic Example No = 02
/*

class person {
    constructor(firstName, LastName, Age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.Age = Age;
    }
    Tejas() {
        console.log(`Hello, My Name Is ${this.firstName} ${this.LastName}.`);
    }

    celebrateBirthday() {
        this.Age++;
        console.log(`Happy ${this.Age}th Birthday, ${this.firstName}!`);
    }
}

//Creating Instances Of The Person class

const Ram = new person("Ram", "Raghuvanshi", 50);//Hello, My Name Is Ram Raghuvanshi.
const Karan = new person("Karan", "Sharma", 25);//Hello, My Name Is Karan Sharma.

//Calling Methods On The Instances

Ram.Tejas();
Karan.Tejas();

Ram.celebrateBirthday();   //Happy 51th Birthday, Ram!
Karan.celebrateBirthday(); //Happy 26th Birthday, Karan!

*/

// Basic Example No = 03

/*

class Car {
    constructor(Name, Model, Year) {
        this.Name = Name;
        this.Model = Model;
        this.Year = Year;
        this.speed = 0;
    }
    Accelerate(Increase) {
        this.speed += Increase;    
        console.log(`Accelerating To ${this.speed} mph.`);
    }

    Brake(Decrease) {
        this.speed -= Decrease;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Applying Brakes When Cars Speed Is: ${this.speed} mph.`);
    }
    Honk() {
        console.log("Honk! Honk!");
    }
 }

//Creating Instances Of Cars Class
 
const myCar = new Car("Swift", "Vdi", "2020");
const friendCar = new Car("Punch", "Tdi", "2023");

//Interacting With The Cars

myCar.Accelerate(100); // Accelerating To 100 mph.
myCar.Brake(10); //Applying Brakes When Cars Speed Is: 90 mph.
myCar.Honk(); //Honk! Honk!


friendCar.Accelerate(130); //Accelerating To 130 mph.
friendCar.Brake(50); //Applying Brakes When Cars Speed Is: 80 mph.
friendCar.Honk(); //Honk! Honk!

*/

// class person {
//     constructor(Name, Age) {
//         this.Name = Name;
//         this.Age = Age;
//     }
//     Greet() {
//         console.log(`My Name Is ${this.Name} And My ${this.Age}`);
//     }
// }

// const P1 = new person("Aniket", 15);
// const P2 = new person("Ankit", 20);
// const P3 = new person("Bapu", 50);

// console.log(P1.Name, P1.Age);
// console.log(P2.Name, P2.Age);
// console.log(P3.Name, P3.Age);

// ------------------------------------
/*

class person{
    constructor(Name, Age) {
        this.Name = Name
        this.Age = Age
    }

    greet() {
        console.log(`MY Name Is,${this.Name} And my Age Is ${this.Age}`);
    }
}

const p1 = new person("Tejas", "25");
const P2 = new person("Darsh", "23");

console.log(p1.Name, p1.Age);
console.log(P2.Name, P2.Age);

*/

/*

class person {
  constructor(Name, Age) {
    this.Name = Name;
    this.Age = Age;
  }
  greet() {
    console.log(`My Name Is ${this.Name} And My Age Is ${this.Age}`);
  }
}

const Person1 = new person("Tejas", "26");
const person2 = new person("Raj", "20");
const person3 = new person("Rahul", "30");

// console.log(person2.Name, person2.Age);
// console.log(Person1.Name, Person1.Age);
// console.log(person3.Name, person3.Age);
// Person1.greet();

*/


// SIR CODE & EXAMPLE

/*

class User {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum(c) {
    return this.a + this.b + c;
  }
  sub() {
    return this.b - this.a;
  }
}

let U = new User(50, 70);
let V = new User(100, 220);
// let m = new User();
let x = U.sum();
let y = V.sum(1500);
console.log("y", y);
let ySub = V.sub();
let xSub = U.sub();
*/

/*
class GmailData {
  constructor(email) {
    this.email = email;
  }
  giveName(c) {
    return this.email.split("@")[0];
  }
}

let G = new GmailData("urvis---h@gmail.com");
let name = G.giveName();
console.log("name---------->", name);
*/

/*
class Email {
    constructor(email) {
        this.email = email;
    }
    greet(A) {
        return this.email.split("@")[0];
    }
}
let G = new Email("Teja----s@gmail.com");
let name = G.greet();
console.log("name--------->", name);

*/

class user {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    sum(c){
        return this.a + this.b + c; 
    }
    sub() {
        return this.b - this.a
    }
}


let A = new user(50, 70);   
let B = new user(100, 120);
let D = new user();

let x = A.sum();
let y = B.sum(1500);
console.log("Y",y)