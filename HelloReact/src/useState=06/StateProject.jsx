import { useState } from "react";
import { Button } from "reactstrap";

export default function StateProject() {
  let [index, setIndex] = useState(0);
  const colorArr = [
    "red",
    "green",
    "yellow",
    "blue",
    "lightcoral",
    "pink",
    "skyblue",
    "hotpink",
    "orange",
    "purple",
    "cadetblue",
    "cyan",
    "orange",
  ];
  function indexChange() {
    console.log("=======>>>");
    setIndex(index + 1);

    //   if (index + 1 === 12) {
    //     setIndex(0);
    //     confirm("Index Is Now 12, Resetting to 0");
    //   }
    // }

    if (index + 1 === colorArr.length) {
      const resetIndex = window.confirm(
        "Index Is Now 12. Do you want to reset it to 0 Index ?"
      );

      if (resetIndex) {
        setIndex(0);
      }
    }
  }

  return (
    <>
      <h1>StatePro1</h1>
      <h1>index is {index}</h1>
      <span
        style={{
          minWidth: "100px",
          padding: "38px 0px",
          display: "inline-block",
          textAlign: "center",
          marginBottom: "20px",
          backgroundColor: colorArr[index],
        }}
      >
        BOX
      </span>
      <div>
        <Button onClick={() => indexChange()}>Change Color</Button>
      </div>
    </>
  );
}
// =============================================================

// class StateProject extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//       colorArr: ["red", "green", "yellow", "blue", "lightcoral", 'pink', 'skyblue', 'hotpink', 'orange', 'purple', 'cadetblue', 'cyan'],
//     };
//   }
// }

// indexChange = () => {
//   const { index } = this.state;
//   //Increment the index 1
//   this.setState({ index: index + 1 });

//   //Checkif the index is now 12, and show a confirmation dialog

//   if (index + 1 === 12) {
//     const resetIndex = window.confirm(
//       'Index Is Now 12. Do You Want To Reset It To 0?'
//     );
//     if (resetIndex) {
//       this.setState({ index: + 0 });
//     }
//   }
// }

// render() {
//   const { index, colorArr } = this.state;
//   return (
//     <>
//     <h1>StateProp1</h1>
//     <h1>index is {index}</h1>

//       <span style={{
//         minWidth: '100px',
//         minHeight: '100px',
//         padding: '38px 0px',
//         display: 'inline-block',
//         textAlign: 'center',
//         marginBottom: '20px',
//         backgroundColor: colorArr[index],
//       }}>
//         BOX
//       </span>
//       <div>
//         <Button onClick={this.indexChange}>Change Color</Button>
//       </div>
//     </>
//   )
// }

// export default StateProject;

// ================================================================

// class StateProject extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//       colorArr: ["red", "green", "yellow", "blue", "lightcoral",'pink','skyblue','hotpink','orange','purple','cadetblue','cyan'],
//     };
//   }

//   indexChange = () => {
//     const { index } = this.state;
//     // Increment the index by 1
//     this.setState({ index: index + 1 });

//     // Check if the index is now 12, and show a confirmation dialog
//     if (index + 1 === 12) {
//       const resetIndex = window.confirm(
//         "Index Is Now 12. Do you want to reset it to 0?"
//       );

//       if (resetIndex) {
//         this.setState({ index: 0 });
//       }
//     }
//   };

//   render() {
//     const { index, colorArr } = this.state;

//     return (
//       <div className="container2">
//         <h1>StatePro1</h1>
//         <h1>index is {index}</h1>
//         <span
//           style={{
//             minWidth: "100px",
//             minHeight: "30px",
//             padding: "38px 0px",
//             display: "inline-block",
//             textAlign: "center",
//             marginBottom: "20px",
//             backgroundColor: colorArr[index],
//           }}
//         >
//           BOX
//         </span>
//         <div>
//           <Button onClick={this.indexChange}>Change Color</Button>
//         </div>
//       </div>
//     );
//   }
// }

// export default StateProject;
