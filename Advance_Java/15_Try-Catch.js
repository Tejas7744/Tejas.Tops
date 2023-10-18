//  Example No = 01

// function fun1(data) {
//     try {
//         let arr = [1, 2, 3, 4, 5];
//         let matchEle = arr.find((e) => e === 30);

//         console.log("matchEle:", matchEle, 1)
//         if (!matchEle) {
//             throw new Error("data not found");
//         } else {
//             return matchEle;
//         }
//     } catch (error) {
//         return error.message;
//     }
// }

// let data = JSON.stringify({ name: 20 });
// console.log("data:",typeof data, 2);

// let x = fun1({ name: 1 });
// console.log("x:", x , 3)
// -----------------------------------------------

// Example No = 02

// try {
//     let result = 10 / 0;

//     console.log(result);
// } catch (error) {
//     console.log("An error occured: " + error.message);
// }
// -----------------------------------------------------

// Example No = 03

// try {
//     let userInput = prompt("Please enter a number :"); //Try to got a user input

//     let number = parseFloat(userInput); // Try to convert into a number

//     if (isNaN(number)) {
//         throw new Error("Invalid Input: Not a number, throw an error")
//     }

//     console.log("You enetered a valid number: " + number);
// } catch (error) {
//     //Handle the error gracefully
//     console.log("An error occured: " + error.message);
// }
// ------------------------------------------------------

// Example No = 04

try {
    // Imagin we trying to open a file (Which Does not exist in this case ).
    
    // This throw an error.
    
    let fileContents = openNonExistentFile();

    // If we successfully open the file , we can work with its contents.

    console.log("File contents :" + fileContents);
} catch (error) {
    // Handle the error Gracefully 
    console.error("An occured while opening the file:" + error.message);
}

// -----------------------------------------------------------------
