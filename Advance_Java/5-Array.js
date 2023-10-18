// Definition Of Array?
//What Is Array?
//In English
// ==>Answer==>
// Def=>In JavaScript, an array is one of the most commonly used data types.It stores multiple values and elements in one variable.
//These values can be of any data type — meaning you can store a string, number, boolean, and other data types in one variable.

// In Hindi=>
//JavaScript मध्ये, अॅरे हा सर्वात सामान्यपणे वापरल्या जाणार्‍या डेटा प्रकारांपैकी एक आहे. तो एका व्हेरिएबलमध्ये अनेक मूल्ये आणि घटक संग्रहित करतो.
// ही मूल्ये कोणत्याही डेटा प्रकाराची असू शकतात — म्हणजे तुम्ही स्ट्रिंग, संख्या, बुलियन आणि इतर डेटा प्रकार एका व्हेरिएबलमध्ये संग्रहित करू शकता.

// Example 1:
// 1) some() functions work

// var ages = [10, 13, 18, 20];

// var b = ages.some(checkAdult);
// console.log("🚀 ~ file: 5-Array.js:18 ~ b:", b)

// function checkAdult(age) {
//     return age >= 18;

// }
// -----------------------------------
// Example 2:
// 2) every() functions work

//  var ages = [19, 23, 18, 20];

// var b = ages.every(checkAdult);
// console.log("🚀 ~ file: 5-Array.js:18 ~ b:", b)

// function checkAdult(age) {
//     return age >= 18;

// }
// -------------------------------------------
// Example 3:
// 3) push() functions work
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];
// arr.push(10);
// console.log("🚀 ~ file: 5-Array.js:56 ~ arr:", arr);
// --------------------------------------------
// Example 4:
// 3) return() functions work
// reverse() – reverses the array in-place, then returns it.

// let arr = [11, 12, 13, 14, 15, 16, 17];
// arr.reverse()
// console.log("🚀 ~ file: 5-Array.js:61 ~ arr:", arr);
// ----------------------------------------------
// Example 5:
// 5) indexOf() & lastIndexOf() functions work

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// let arr = [21, 22, 23, 24, 25, 21];
// let index = arr.indexOf(21)
// let index2 = arr.lastIndexOf(21)
// console.log("🚀 ~ file: array.js:34 ~ index2:", index2)
// console.log("🚀 ~ file: array.js:33 ~ index:", index)
// ------------------------------------------------
// Example 5:
// 5) filter()  functions work

// var ages = [10, 12, 19, 20];
// var a = ages.filter(checkAdult)

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log("🚀 ~ file: 5-Array.js:67 ~ a:", a)

// --------------------------------------------------
// Example 6:
// 5) Delete()  functions work

// var a = ["Harry", 18, "BCA"];
// a[0]= "Tejas"
// console.log("🚀 ~ file: 5-Array.js:78 ~ a:", a);
// a[1] = 20;
// console.log("🚀 ~ file: 5-Array.js:81 ~ a:", a);
// a[2] ="Bsc"
// console.log("🚀 ~ file: 5-Array.js:83 ~ a:", a);
// a[1]
// delete a[2];
// console.log("🚀 ~ file: 5-Array.js:86 ~ a:", a)
// delete a[0];
// console.log("🚀 ~ file: 5-Array.js:88 ~ a:", a)
// delete a[1];
// console.log("🚀 ~ file: 5-Array.js:90 ~ a:", a)
// --------------------------------------------------
// Example 7:
// 5) sort()  functions work
// let a = ["Zoll", "Xoll", "Static", "Aman", "Doll", "Princes"];
// a.sort()
// console.log("🚀 ~ file: 5-Array.js:96 ~ a:", a)
// ------------------------------------------------------
// Example 8:
// 5) reverce()  functions work
// var a = ["Zoll", "Xoll", "Static", "Aman", "Doll"];
// a.reverse()
// console.log("🚀 ~ file: 5-Array.js:102 ~ a:", a)
// -----------------------------------------------------
// Example 8:
// 5) concat()  functions work
// var a = ["Zoll", "Xoll", "Static", "Aman", "Doll"];
// var b = ["Rahul", "Karan"];
// var c = ["Arjun", "Yogesh"];
// var e = ["TejDarsh"];
// var d = a.concat(b,c,e);
// console.log("🚀 ~ file: 5-Array.js:109 ~ c:", d)
// ------------------------------------------------
// Example 9:
// 5) join()  functions work
// var a = ["Tejas", "Manoj", "Suraj", "Aman", "Doll"];
// var b = ["Rahul", "Karan"];
// var c = a.concat(b);
// var d = c.join("/")
// console.log("🚀 ~ file: 5-Array.js:109 ~ c:", d)
// -----------------------------------------------------
// Example 10:
// 5) find()  functions work

// var ages = [10, 2, 9, 20];
// var b = ages.find(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log("🚀 ~ file: 5-Array.js:126 ~ b:", b)
// -----------------------------------------------------
// Example 11:
// 5) findIndex()  functions work
// var ages = [10, 2, 9, 20];
// var b = ages.findIndex(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log("🚀 ~ file: 5-Array.js:126 ~ b:", b);
// ---------------------------------------------
// Example 12:
// 5) forEach()  functions work
// var a = ["Rahul", "Aman", "Karan", "Neha"];
// a.forEach(loop);

// function loop (value, index) {
//     console.log("🚀 ~ file: 5-Array.js:148 ~ a:", index + " : " + value)
// }
// --------------------------------------------
// Example 13:
// 5) toString()  functions work
// String ka kam ye hai ki existing array ko string me convert kar deta hai
// convert hone ke baad me isape array ka koi function apply nai ho sakta

// var a = ["Tejas", "Ganu", "Shubh", "Manoj"];
// a.toString();
// console.log("🚀 ~ file: 5-Array.js:149 ~ a:", a)

// --------------------------------------------
// Example 14:
// 5) fill()  functions work
// var a = ["Tejas", "Ganu", "Shubh", "Manoj"];
// a.fill("Jay Shree Mahakal");
// console.log("🚀 ~ file: 5-Array.js:149 ~ a:", a);
// ----------------------------------------------


// ====================================
// The End Method Of Array
// ====================================


// ======================================
// Example no= 01 youtude:
// var ary = [10, 20, 30, 40];
// console.log(ary[0]);

// Example no= 02 youtude:

// var ary = [
//     ["Tejas", 25, "Male", "BSc"],
//     ["Shubh", 26, "Male", "MBA"],
//     ["Manoj", 27, "Male", "BE"],
//     ["Ganu", 28, "Male", "B.Com"]
// ];

// // console.log(ary);
// // console.log("table border='1px'");

// for (var i = 0; i < 4; i++){
//     for (var a = 0; a < 4; a++){
//         console.log(ary[i][a] + " ")
//     }
// }

// console.log("table border='1px'");
// ==================My Code===================
//

// let arr = [21, 22, 23, 24, 25, 26];
// arr.push(20);
// console.log("🚀 ~ file: 5-Array.js:59 ~ arr:", arr);

// let arr = [31, 32, 33, 34, 35, 36, 37];
// arr.pop();
// console.log("🚀 ~ file: 5-Array.js:62 ~ arr:", arr);

// shift() – extracts an item from the beginning,
// let arr = [41, 42, 43, 44, 45, 46, 47];
// arr.shift();
// console.log("🚀 ~ file: 5-Array.js:66 ~ arr:", arr);

// unshift(...items) – adds items to the beginning.
// let arr = [51, 52, 53, 54, 55, 56];
// arr.unshift(50);
// console.log("🚀 ~ file: 5-Array.js:72 ~ arr:", arr);

//ABCD series vise printing
// let arr = ["Don", "Calulate", "Baroda", "Aannna"];
// arr.sort()
// console.log("🚀 ~ file: 5-Array.js:76 ~ arr:", arr)

// let ary = ["Tej", "Shubh", "manoj", "Ganu", "kunu"];
// let cry = ary.slice(4);
// console.log("🚀 ~ file: 5-Array.js:81 ~ cry:", cry);

// let a = ["Tej", "Shubh", "manoj", "Ganu", "kunu"];
// a.splice(2, 2, "Manu", "Jinu");
// console.log("🚀 ~ file: 5-Array.js:85 ~ a:", a)

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// let a1 = [1, 2, 3, 4,];
// let a2 = [5, 6, 7, 8];
// let a3 = a1.concat(a2, "test");
// console.log("🚀 ~ file: 5-Array.js:90 ~ a3:", a3)

// var a = ["Tej", "Shubh", "manoj", "Ganu", "Tej"];
// var b = a.lastIndexOf("Ganu", 3 );
// console.log("🚀 ~ file: 5-Array.js:95 ~ a:", b)

// var a = ["Tej", "Shubh", "manoj", "Ganu", "kunu"];
// var b = a.includes("manoj");
// console.log("🚀 ~ file: 5-Array.js:99 ~ b:", b)
// ======================My Method End====================

// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

// let a1 = [1, 2, 3, 4,]
// let a2 = [5, 6, 7, 8]
// let a3 = a1.concat(a1, "test");
// console.log("🚀 ~ file: 5-Array.js:83 ~ a3:", a3)

// reverse() – reverses the array in-place, then returns it.
// arr.reverse()
// console.log("🚀 ~ file: array.js:23 ~ arr:", arr)

// sort(func) – sorts the array in-place, then returns it.
// let sArr = [1, 5, 8, 23, 5, 2]
// sArr.sort()
// console.log("🚀 ~ file: array.js:28 ~ sArr:", sArr)

// // includes(value) – returns true if the array has value, otherwise false.
// let inc = arr.includes(7)
// console.log("🚀 ~ file: array.js:38 ~ inc:", inc)

// */
// ======================Sir Method End=======================

// code Object.js(1);

// let obj = {
//     name: "test",
//     age: 80
// }

// let arr = []
// for (const key in obj) {
//     console.log("----", obj[key])
//     arr.push(key)
// }

// let values = Object.values(obj)
// console.log(" values:", values)
// let keys = Object.keys(obj)
// console.log(" keys:", keys)
// let ent = Object.entries(obj)
// console.log(" ent:", ent)

// let values = Object.values(obj)

// important //imp
let o = {
    a: { a2: 30 }, b: 90, c: 70
}
let x = "a"

console.log("---===>", o[x].o.a) //o.a

// code (3) useStrict.js

// "use strict"

// let a = 230
// console.log("🚀 ~ file: useStrict.js:2 ~ a:", a)

// {
//     {
//         const test = 20
//     }
//     test = 40
//     console.log("🚀 ~ file: useStrict.js:12 ~ test:", test)
// }
// "use strict"
//         let a = 230;
//         console.log("🚀 ~ file: 5-Array.js:183 ~ a:", a);

// {
//     {

//         const test = 20;
//     }
//     test = 40;
//     console.log("🚀 ~ file: 5-Array.js:182 ~ test:", test);
// }
