import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import ClassCom from "./Component=02/ClassCom.jsx";
import FunCom from "./Component=02/FunCom.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// const nameEle = <h1>Tejas</h1>;
// const arr = ["Neel", "Raj", "Suraj"]
// const data = arr.map((e) => {
//   return <h1>----{ e}</h1>
// })

// const obj = {
//   Name: "Tejas",
//   Age: 25
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<div>
//   <h1>Hello World</h1>
//   <h1>Hello World1</h1>
//   {nameEle}
//   <h1>{90 + 100}</h1>

//   {
//     arr.map((e) => {
//       console.log("======>", e);
//       return <h1>My Name is {e}</h1>
//     })
//   }
//   {data}
//   {/* can't use object direcly */}
//   <h1>{obj.Age}</h1>
// </div>)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <ClassCom /> */}
    {/* <FunCom/> */}
  </React.StrictMode>
);
