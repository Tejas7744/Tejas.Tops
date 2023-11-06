import React, { useRef } from 'react'
import { Button } from 'reactstrap';

export default function UseRef() {
    const inputRef = useRef(null);
    console.log("inputRef", inputRef);

    const Focus = () => {
        inputRef.current.Focus();
        inputRef.current.value = 'Hello World';
    }
    
  return (
        <div className='text-center'>
            <h1>UseRef</h1>
            <input type='text' ref={inputRef}/><br/><br/>
            <Button onClick={() => Focus()} >Focus On Input</Button>
        </div>
  );
}
