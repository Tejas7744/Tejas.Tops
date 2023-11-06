import React, { useState } from "react";

// First Way Same OutPut

// export default function ConditionRandring() {
//   const newUser = false;
//   return (
//     <div>
//       <h1>Conditional Randering</h1>
//       {!newUser ? <h1>Wellcome Back Admin</h1> : <h1>Wellcome Admin</h1>}
//     </div>
//   );
// }

//2nd  Way Same OutPut

// export default function ConditionRandring() {
//   const newUser = true;

//   if (newUser) {
//     return (
//       <>
//         <h1>Conditional Randering</h1>
//         <h1>Wellcome Admin</h1>
//       </>
//       )

//   } else {

//       return <h1>Wellcome Back Admin</h1>

//   }
// }

// yeh dono tarike sirf 2-condition me use karte hai agar 3-condition hai toh niche diya huva tarika use karte hai

//3rd  Way Same OutPut

// export default function ConditionRandring() {
//   const [loggedIn, setLoggedIn] = useState(1);

//   return(

//         <div>
//             {loggedIn==1? <h1> Welcome User 1 </h1>: loggedIn==2?<h1>Welcome User2</h1>:<h1>Welcome User3</h1> }
//         </div>
//   )
// }

// same Result By using && logical and operator

// export default function ConditionRandring() {
//   const newUser = true;
//   return (
//     <div>
//       {newUser && <h1>Welcome User1</h1>}
//     </div>
//   );
// }
