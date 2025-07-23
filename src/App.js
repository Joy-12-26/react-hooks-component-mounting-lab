 import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {

  // No props being used here, so we can use the shorthand declaration of state
  state = {
    timerIDs: []
  };

  componentDidMount() {
    this.handleAddTimer();
  }

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    );
  }

  // Returns array of Timer components, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />;
  });

  // Adds a random number as timer ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random() * 1000)]
    }));
  };


  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }));
  };
}

export default App;
