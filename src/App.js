import React, { Component } from 'react'
import Counter from './Componnents/Counter'
import Profile from './Componnents/Profile'
import './App.css'
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {show : true};
  }
toggle = () => {
  this.setState({show : !this.state.show})
}
  render() {
    return (
      <div className = 'main'>
        <h5>Checkpoint State-React</h5>
        <button onClick={this.toggle}>Show/hide</button>
        {this.state.show ? <Counter/> : null}
        {this.state.show ?  <Profile/>  : null}
        
      </div>
    )
  }
}
