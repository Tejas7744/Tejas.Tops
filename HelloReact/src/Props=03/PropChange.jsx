import React from 'react'
import { Button } from 'reactstrap'

export default function PropChange(props) {
   function ChangeName() {
     console.log("======>>")
     props.name = "Darsh";
     //props.name = "Darsh"; //Cannot change props value it's just read only
 }
  return (
    <div>
          <h1>Hello World...{props.name}</h1>
          <Button color="danger" onClick={()=>ChangeName()}>Change Name</Button>
    </div>
  )
}
   