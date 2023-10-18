// Difference between Native objects and Host objects:

// NATIVE OBJECT
// 1)These are standard global javascript objects which are the same and provided by javascript itself.
// 2)These are available to all users globally.
// 3Example: String(), Array(), Number(), false, “Hello World”

// HOST OBJECT
// 1)These are the host (environment) specific javascript objects and differ from one environment to another.
// 2)The objects offered by one environment may not be present in the other environment
// 3)Example: window, console, navigator, NodeList

// Example: 01=>

// let obj = {
//   id: "0001",
//   type: "donut",
//   name: "cake",
//   ppu: 0.55,
//   batters: {
//     batter: [
//       { id: "1001", type: "Regular" },
//       { id: "1002", type: "Chocolate" },
//       { id: "1003", type: "Blueberry" },
//       { id: "1004", type: "Devil's Food" },
//     ],
//   },
//   topping: [
//     { id: "1005", type: "Glazed" },
//     { id: "1006", type: "None" },
//     { id: "1007", type: "Shugar" },
//     { id: "1008", type: "Powedered-Shugar" },
//     { id: "1009", type: "Chocolate With Sprinkles" },
//     { id: "2000", type: "Chocolate" },
//     { id: "2001", type: "Maple" }
//   ],
// };
// // console.log(obj.batters.batter[0])
// console.log(obj.batters.batter[3].id,":",obj.batters.batter[3].type);
// -------------------------------
// Example = 02:

// let obj = {
//   name: "test",
//   age: 80,
// }

// let values = Object.values(obj)
// console.log("🚀 ~ file: 3-object.js:36 ~ values:", values)
// console.log('----====>', obj.gender);

// Example = 02:
// key Ko Dynamic Kaise Banate Hai

// let o={
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
//   f: 50,
//   g: 60,
//   h: 70,
//   i: 80,
//   j: 90,
//   k: 100

// }

// let z = "k"
// console.log("🚀 ~ file: 3-object.js:47 ~ o:", o[z]);

// Objects example [1] (Programs)
// ----------------------------------------
// 1. Using dot Notation
// Here's the syntax of the dot notation.

// const person = {
//   name: "tejas",
//   age: 25,
//   gen: "male",
// };

// Accessing property
// console.log(person["age"]) //25
// console.log(person.age) //25
// -----------------------------------------
// 2. Using bracket Notation
// Here is the syntax of the bracket notation.

// var person = {
//   fname: "Tejas",
//   lname: "Chaudhari",
//   age: 25,
//   gender: ["male","Female","Others"]
// };

// let a = "gender"
// console.log(person[a][1]);//Female
// -----------------------------------------------
// 3. JavaScript Nested Objects
// An object can also contain another object.
// For example,

//nested object
// const student = {
//   student: "tejas",
//   age: 27,

//   marks: {
//     science: 70,
//     math: 75
//   }
// }

// accessing property of student object
//console.log(student.marks)//{ science: 70, math: 75 }

//accessing property of marks objects
//console.log(student.marks.science)
// -----------------------------------------------------
// 4) JavaScript Object Methods
// In JavaScript, an object can also contain a function. For example,

// const person = {
//     name: 'raj',
//     age: 20,
//     //Using function as a value
//     tejdarsh: function() { console.log('Hello') }
// }

// person.tejdarsh();

// let person = {
//     name: 'raj',
//     age: 20,
//     tejdarsh: function(){console.log("Hello User")}
// }

// person.tejdarsh();

// const person = {
//     name: "Darsh",
//     age: 22,
//     gender: 'female',

//     tej: function() { console.log("hello Darsh") }
// }
// person.tej();

// const person = {
//     name: "tejas",
//     age: 25,
//     gender: 'male',

//     darsh:function(){console.log('Hello Tej')}
// }
// person.darsh();
// ==============================================
// JavaScript Methods and this Keyword

// In JavaScript, objects can also contain functions. For example,
//object containing Method

// const person = {
//     name: 'john',
//     greet: function () { console.log('hello'); }
// };
// ------------------------------------------
// Accessing Object Methods

// You can access an object method using a dot notation. The syntax is:

// accessing method and property

// const person = {
//     name: "tejas",
//     age: 25,
//     gender: 'male',

//     tejdarsh: function () { console.log("Hello Tejdarsh"); }
// };
// person.tejdarsh()
// --------------------------------------

// let number = '23.32';
// let result = parseInt(number);

// console.log(result);//23
// --------------------------------------
// let number = '23.32';
// let result = parseFloat(number);

// console.log(result);//23.32
// ------------------------------------
//creating an object
// let student = {
//     name: "raj",
//     age: 20,
//     greet: function () {
//         console.log('hello');
//     }
// };
//  student.greet() //hello
// ---------------------------------------
// JavaScript this Keyword

// To access a property of an object from within a method of the same object, you need to use the this keyword. Let's consider an example. No =(01)
// const person = {
//     name: "TEJAS",
//     age: 25,
//     gender: "Male",

//     greet:function(){console.log("The Name Is" + " : " + this.name)}
// }

// person.greet();
// ---------------------------------------------
// let men = {
//     name: "Raj",
//     Age: 20,
//     Gemder: "Male",

//     raj:function(){
//         console.log("The Name Is" + " : " + this.name);
//     }
// }

// men.raj();
// ---------------------------------------------
// const person = {
//     name: "Tejas",
//     age: 25,
//     Gender: "male",

//     greet: function(){console.log('the gender is'+ " : " + this.age)}
// }
// person.greet();
// -------------------------------------------

// example.No = 02;

// var person = {
//     Name: "Raj",
//     Age: 25,

//     greet: function () {
//         let surname = 'Chaudhari';
//         console.log("The Name Is" + " " + this.Name + " " + surname);
//     }
// };

// person.greet();

// ex = 02)

// const person = {
//     Name: "Tejas",
//     Age: 25,
//     Gender: "Male",
//     Education: "Bsc",

//     greet: function () {
//         let Surname = "Chaudhari";
//         console.log("The Name Is" + " : " + this.Name + " "+ Surname)
//     }
// }
// person.greet()
// ===============================================
// JavaScript Constructor Function

// In JavaScript, a constructor function is used to create objects. For example,

//constructor function

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object
// const person = new Person();
// --------------------------------------
// const o = new Object();
// o.foo = 42;

// console.log(o);
//------------------------------------
// let school = {
//     name: 'Vivekananda School',
//     location: 'Delhi',
//     established: 1971,
//     displayInfo: function () {
//         console.log(`${school.name} was established in
//         ${school.established} at ${school.location}`);
//     }
// }

// school.displayInfo()
// --------------------------------------------------   

// var School = {
//   Name: "Sheth Kedi High School",
//   Location: "Taloda",
//   Discover: 1998,
//   greet: function () {
//     console.log(
//       `${School.Name} Was Established In ${School.Discover} At ${School.Location}`
//     );
//   },
// };

// School.greet();
// ---------------------------------------------
// var school = {
//   name: "Vivekananda",
//   location: "Nandurbar",
//   established: 1997,
//   greet: function () { console.log(`${school.name} School Established in ${school.established} at ${school.location}`) },
// };

// school.greet();
// ---------------------------------------------