import React, { Component } from 'react'
import './Counter.css'
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.profile = {
            fullName : 'Mohamed',
            profession : "web devolopper",
            img : "https://raygun.com/blog/wp-content/uploads/2014/06/Ace-r.jpg",
        };
        this.state = {count : 0}
      }

      componentDidMount (){ 
        setInterval (()=> {
            this.setState(prevState => ({
                count : prevState.count + 0.5
        }))
    },1000)
      }
  render() {
    return (
      <div className = 'profile' >
        <h1>{this.profile.fullName}</h1>
        <h1>{this.profile.profession}</h1>
        <img src={this.profile.img} alt="img" style={{width : "30%"}}/>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
