 import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  // Increments time by 1 every second
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  // Stops the clock
  stopClock = () => {
    clearInterval(this.interval);
  };

  // Removes the timer
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
