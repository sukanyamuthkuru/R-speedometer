import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onAcclerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(pre => ({count: pre.count + 10}))
    } else {
      this.setState(() => ({count: 200}))
    }
  }

  onApplyBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(pre => ({count: pre.count - 10}))
    } else {
      this.setState(() => ({count: 0}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="meter">Speed is {count}mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons_container">
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onAcclerate}
          >
            Accelerate
          </button>
          <button
            className="apply-brake-btn"
            type="button"
            onClick={this.onApplyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
