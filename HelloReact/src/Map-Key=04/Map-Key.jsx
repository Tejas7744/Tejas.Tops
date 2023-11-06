import React from 'react'
import CardName from './CardName';

const data = ["Tejas", "Raj", "Darsh"];

export default function MapKey() {
  return (
    <>
          {/* <h1>Map Key</h1>

          {data.map((e,i) => {
              
              return (
                  
                    <div key={i}>
                        <h1>my name is {e} </h1>
                    </div>
              )
              
          })} */}
          {data.map((e,i) => {
              console.log("--------->")
              return (
                        <CardName key={i}/>
              )
              
          })}

        {/* <h1>My Name Is {data[0] }</h1>   //Long Code
        <h1>My Name Is {data[1]} </h1>   
        <h1>My Name Is {data[2]} </h1> */}
           
    </>
  )
}
