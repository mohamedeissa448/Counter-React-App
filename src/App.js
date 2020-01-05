import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = id => {
    console.log("handle delete");
    const newCounters = this.state.counters.filter(
      counter => counter.id !== id
    );
    this.setState({ counters: newCounters });
  };
  handleReset = () => {
    console.log("handle Reset");
    const newCounters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: newCounters });
  };
  handleIncrement = counterId => {
    console.log("handle Increment");
    const newCounters = this.state.counters.map(counter => {
      if (counter.id === counterId) {
        counter.value += 1;
      }

      return counter;
    });
    this.setState({ counters: newCounters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
