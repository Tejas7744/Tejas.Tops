import React, { useState } from "react";
// import React from 'react';
import { Button } from 'reactstrap';

const UseState = () => {
  let [count, setCount] = useState(100);
  let x = 10;

    function increment() {
        console.log("=========>>", increment)
        setCount(count+1)
    }
  return (
    <div>
      <h1>useStateFun</h1>
      <h1>x is {x}</h1>
      <h1>count is {count}</h1>
      <Button color="success" onClick={() => increment()}>Increse</Button>
      <br></br>
      <br></br>
      <Button color = "danger" onClick={()=>setCount(count-1)}>Decrese</Button>
    </div>
  );
};
export default UseState;
