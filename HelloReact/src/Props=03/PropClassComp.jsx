import React, { Component } from 'react'

export default class PropClassComp extends Component {
    render() {
    //   console.log("this.props=======>>",this.props.data);
    return (
      <div>
        <h1>Hello World</h1>
        <h1>My Name Is {this?.props?.data?.name }</h1>
      <h2>My Age Is {this?.props?.data?.age }</h2>
      </div>
    )
  }
}
