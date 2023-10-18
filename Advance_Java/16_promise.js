/*
let PROMISE = new Promise((resolve, reject) => {
  let array = [1, 2, 3, 4, 5];
  let x = array.find((e) => e.length > 4);
// throw new Error("-----Data Get Some Error-----")
  if (x) {
    if (x===5) {
      resolve({ message: "x is five", x });
    } else {
      resolve({ message: "x is ", x });
    }
  } else {
    reject("x is false======>>");
  }
});

PROMISE.then((Response) => {
  console.log("response", Response);
}).catch((error) => {
  console.log("error", error);
});



// Jab promise fullfill(complete) hoga tab then block call hoga

//Jab promise reject hoga ya usame kuch error aai tab catch block call hoga

*/

// Another Example No = 02

// Creating A Promise
/*
const fetchData = () => {
  return new Promise((resolve, reject) => {
    //Simulating an API call With a setTimeout
    setTimeout(() => {
      const data = { message: "Hello, Promise!" };
      //If Succesfull, resolve the Promise 
      resolve(data);
      // if There Is An error, reject The Promise 
      // reject("Error fetching data");
    }, 2000);
  });
};

// Using the promise 
fetchData()
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.log(error.message);
})
*/

/*
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Hello, Dostaa" }
      resolve(data)
    }, 2000)
  });
};

fetchData()

  .then((Response) => {
  console.log(Response.message)
  })
  .catch((Error) => {
    console.log(Error.message)
  })
  
  */