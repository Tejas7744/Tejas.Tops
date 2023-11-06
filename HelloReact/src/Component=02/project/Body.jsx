import React, { Component } from 'react'
import "./index.css";
export default class Body extends Component {
  render() {
    return (
        <div className='container'>
        {/* <h1>Body</h1> */}
        <div className='subcontainer'>
          <h1>Head 1</h1>
        </div>
        <div className='subcontainer1'>
          <h1>Head 2</h1>
        </div>
        <div className='subcontainer2'>
          <h1>Head 3</h1>
        </div>
      </div>
    )
  }
}
