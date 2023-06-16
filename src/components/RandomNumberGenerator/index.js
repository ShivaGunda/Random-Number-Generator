// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onButton = () => {
    const value = Math.ceil(Math.random() * 100)
    this.setState({number: value})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="head"> Random Number </h1>
          <p> Generate a random number in the range of 0 to 100 </p>
          <button type="button" className="button" onClick={this.onButton}>
            Generate
          </button>
          <p className="head"> {number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
