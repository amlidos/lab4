import React, { Component } from "react";
import './Timer.css';

class Timer extends Component {

  render() {
    return (
      <div>
        <img src="./bacon.jpg'"></img><h1>{this.props.name}</h1>
        <h3 className={this.props.count <= 0 ? "red" : ""}>
          {Math.floor((this.props.count/(1000 * 60)))%60}:{Math.floor((this.props.count/1000))%60}
        </h3>
        <button onClick={this.props.startStop}>
            {this.props.timer ? 'Pause' : 'Start'}
        </button>
        <button onClick={this.props.reset}>
            Reset
        </button>
        <br/>
        <button onClick={this.props.increment}>
            Increment
        </button>
        <button onClick={this.props.decrement}>
            Decrement
        </button>
      </div>
    );
  }
}

export default Timer;
