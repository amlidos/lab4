import React, { Component } from "react";
import Timer from "./Timer";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 90000,
      timerName: "Bacon Timer"
    };
  }

  startStop = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        timer: null
      });
    } else {
      var timer = setInterval(() => {
        const newCount = this.state.count - 1;
        this.setState({
          count: newCount,
          timer: timer
        });
        if (this.state.count <= 0) {
          clearInterval(this.state.timer);
        }
      }, 1);
    }
  }

  updateCount = () =>
    this.setState({
      count: this.state.count + 1
    });

  reset = () => {
    clearInterval(this.state.timer);
    this.setState({
      count: 90000,
      timer: null
    });
  }

  increment = () => {
    this.setState({
      count: this.state.count + 30000,
      timer: null
    });
  }

  decrement = () => {
    if (this.state.count - 30000 >= 0) {
      this.setState({
        count: this.state.count - 30000,
        timer: null
      });
    } else {
      return;
    }
  }

  updateTimerName = (event) => {
    this.setState({
      changingTimerName: event.target.value
    });
  }

  setTimerName = () => {
    this.setState({
      timerName: this.state.changingTimerName
    })
  }

  updateTime = (event) => {
    this.setState({
      changingCount: Number(event.target.value)
    });
  }

  setTime = () => {
    if (this.state.changingCount >= 0) {
      this.setState({
        count: this.state.changingCount
      }); 
    }
  }

  render() {
    return (
      <div className="App">
        <Timer
          startStop={this.startStop}
          updateCount={this.updateCount}
          reset={this.reset}
          increment={this.increment}
          decrement={this.decrement}
          name={this.state.timerName}
          {...this.state}/>
          <form className="form-wrapper" onSubmit={event => event.preventDefault()}>
            <div>
              Timer Name: <input type="text" onChange={this.updateTimerName}></input>
              <button onClick={this.setTimerName}>Update</button>
            </div>
            <div>
              Remaining Time (milliseconds): <input type="number" onChange={this.updateTime}></input>
              <button onClick={this.setTime}>Update</button>
            </div>
          </form>
      </div>
    )
  }
}

export default App;
