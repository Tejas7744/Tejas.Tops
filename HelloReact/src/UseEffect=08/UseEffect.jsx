// import React, { usecallback, useEffect, useState } from 'react'

// export default function UseEffect() {
//     let x = 0;
//     let [count, setCount] = useState(0);
//     let [amount, setAmount] = useState(0);

//     useEffect(() => {
//         console.log("=====ues-effect Everytime===001");
//     });

//     useEffect(() => {

//         console.log("=====ues-effect Only First-time===002");
//     }, []);

//     useEffect(() => {

//         console.log("=====ues-effect On Update of count===003");
//     }, [count]);

//     useEffect(() => {

//         console.log("=====ues-effect On Update of count and amount===004");
//     }, [count, amount]);

//     useEffect(() => {

//         console.log("=====ues-effect On Update of count and amount===005");
//     }, [x]);

//     const incX = () => {
//         x = x + 1
//         console.log("x", x);
//     }

//   return (
//     <div>
//           <h1>UseEffect</h1>

//           <h1>Count is {count}</h1>
//           <button onClick={() => setCount(++count)}>Increment</button>

//           <h1>Amount is {amount}</h1>
//           <button onClick={()=>setAmount(++amount)}>Increment Amount</button>

//           <button onClick={()=>incX()}>Increment-X</button>
//     </div>
//   )
// }

// ===========My code With THAPA TECHNICAL ON YOUTUBE================

// import React, { useState, useEffect } from "react";

// const UseEffect = () => {
//   const [state, setState] = useState(0);
//   const [states, setStates] = useState(0);

//   useEffect(() => {
//     alert("I am clicked===>>>222");
//     console.log('I am clicked again')
//   },[state]);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setState(state + 1);
//         }}
//       >
//         Click Me{state}
//       </button>
//       <br></br>
//       <button
//         onClick={() => {
//           setStates(states + 1);
//         }}
//       >
//         Click Me{states}
//       </button>
//     </>
//   );
// };

// export default UseEffect;

// ==============================================
// import React, { useCallback, useState, useEffect } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);
//   const [amount, setAmount] = useState(0);

//   useEffect(() => {
//     alert("i am Click for First");
//   },[count,amount]);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click Me{count}
//       </button>
//       <button
//         onClick={() => {
//           setAmount(amount+1);
//         }}
//       >
//         Click Me{amount}
//       </button>
//     </>
//   );
// };
// export default UseEffect;
