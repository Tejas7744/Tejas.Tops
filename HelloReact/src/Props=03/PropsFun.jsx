// import React from 'react'

// export default function PropsFun(props) {
//   console.log("props", props)
//   return (
//     <div>
//       <h1>My Name Is {props.name }</h1>
//       <h2>My Age Is {props.age }</h2>
//     </div>
//   )
// }


import React from 'react'

export default function PropsFun({name,age}) {   //<=Via Destructuring
  return (
    <div>
      <h1>My Name Is {name }</h1>
      <h2>My Age Is {age }</h2>
    </div>
  )
}

