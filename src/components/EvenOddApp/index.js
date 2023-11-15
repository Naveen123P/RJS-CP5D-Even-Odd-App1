// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  increaseCount = () => {
    this.setState(prevState => ({
      num: prevState.num + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {num} = this.state
    const text = num % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <h1 className="heading">Count {num}</h1>
          <p className="para para1">Count is {text} </p>
          <button onClick={this.increaseCount} className="button" type="button">
            Increment
          </button>
          <p className="para para2">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
