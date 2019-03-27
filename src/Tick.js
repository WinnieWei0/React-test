
import React, { Component } from 'react';
class Tick extends Component{
  render(){
    return (
      <div>
        <h1>现在是{new Date().toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Tick