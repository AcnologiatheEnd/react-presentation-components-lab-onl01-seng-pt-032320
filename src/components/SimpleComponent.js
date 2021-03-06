// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component {

    state = {
        mood: "happy"
      }

    handleClick = () => {

        const setNewMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({mood: setNewMood})
    
    }

    render() {
        return (
        <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
    
  }
  
  export default SimpleComponent