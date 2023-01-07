import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count : 0};
      }
increment = () => {
this.setState({count : this.state.count + 1})
      }

decrement = () => {
        this.setState({count : this.state.count > 0 ? this.state.count - 1 : 0})
      }
    
  render() {
    return (
      <div className='counter-mid'>
<button onClick={this.increment}>+</button>
<h1> {this.state.count} </h1>
<button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
