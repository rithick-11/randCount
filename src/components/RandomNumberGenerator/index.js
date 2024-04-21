import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}
  getRandomCount = () => {
    this.setState({count: Math.floor(Math.random() * 100) + 1})
  }
  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="counter-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.getRandomCount}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
