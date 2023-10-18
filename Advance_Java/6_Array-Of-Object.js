let arr = [
  {
    name: "Tejas",
    Age: 25,
  },
  {
    name: "Ganu",
    Age: 28,
  },
  {
    name: "Shubh",
    Age: 26,
  },
  {
    name: "Kunal",
    Age: 24,
  },
]

// arr.map((e) => {
//     console.log("--e-->",e.name)
//     console.log("--e-->",)
// })

let filtered = arr.filter((e) => {
    return e.Age < 25
})
// console.log("🚀 ~ file: 6_Array-Of-Object.js:28 ~ filtered ~ filtered:", filtered)
 
let matchUser = arr.find((e) => {
    return e.name === "Tejas"
})

matchUser.name
console.log("matchUser.name:", matchUser.name)

console.log("matchUser:", matchUser)

// -----------------------------------------
// ----------------------------------
// slice() method =>Example

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log("🚀 ~ file: 6_Array-Of-Object.js:26 ~ arr:", arr)

// let subarr = arr.slice(1, -5)
// console.log("🚀 ~ file: 6_Array-Of-Object.js:29 ~ subarr:", subarr)
// -------------------------------------
// join() & toString() method =>Examples

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
// let join = arr.join("<-->")
// let tostr = arr.toString()

// console.log("🚀 ~ file: 6_Array-Of-Object.js:60 ~ tostr:", tostr)

// console.log("🚀 ~ file: 6_Array-Of-Object.js:58 ~ join:",join)

// --------------------------------------
// There are three types of case
// 1)snake case
//example=> tejaschaudhari

// 2)Pascale Case
//example=> TejasChaudhari

// yeh case folder ya fir file name k liye use kiya jata hai

// 3)camel Case
//example=> tejasChaudhari

// yeh case variable ko declare karne k liye use kiya jata hai

