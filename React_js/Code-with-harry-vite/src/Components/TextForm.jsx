// import React, { useState } from "react";

// export default function TextForm(props) {
  
//   const [text, setText] = useState();

//   const Uppercase = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//   };

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   const LowerCase = () => {
//     let newText = text.toLowerCase();
//     setText(newText);
//   }
  
 
//   return (
//     <>
//       <div className="container">
//         <h1>{props.heading} </h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             placeholder="Type or paste your content here..."
//             value={text}
//             onChange={handleOnChange}
//             id="myBox"
//             rows="8"
//           ></textarea>
//         </div>
//         <button className="btn btn-info mx-2" onClick={Uppercase}>
//           Convert To Upper Case
//         </button>
//         <button className="btn btn-warning mx-2" onClick={LowerCase}>
//            Lower Case
//         </button>
//       </div>
//       <div className="container my-3">
//         <h2>Your Text Summerry</h2>
//         <p>
//           {text.split(' ').length} Words, And {text.length} characters
//         </p>
//         <p>{0.008 * text.split(" ").length} Minutes To Read</p>
//         <h1>Preview</h1>
//         <p>{text}</p>
//       </div>
//     </>
//   );
    
// }

// ==============================================


import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked :' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log('Uppercase was clicked :' + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    // console.log('Uppercase was clicked :' + text);
    let newText = "";
    setText(newText);
  };
  const handleCopied = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log('onChange')
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //text = "new text"; //wrong way to change the state
  //setText =("new text"); // Correct way to change the state
  return (
    <>
      <div className="container my-3 mt-5 ">
        <h1 className="mb-3">{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Type or paste your content here..."
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-info mx-2" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-warning mx-2" onClick={handleLoClick}>
          Convert To Lower Case
        </button>
        <button className="btn btn-danger mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleCopied}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>
          RemoveExtraSpace
        </button>
      </div>
      <div
        className="container my-3" 
      >
        <h2>Your Text Summerry</h2>
        <p>
          {text.split(" ").length} Words, And {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
