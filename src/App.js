import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, count: 0, liked: false },
      { id: 2, count: 0, liked: false },
      { id: 3, count: 0, liked: false },
      { id: 4, count: 0, liked: false },
    ],
  };

  handleLike = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    this.setState({ liked: !counter.liked });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);

    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counter = this.state.counters.map((c) => {
      c.count = 0;
      return c;
    });

    this.setState({ counter: counter });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count++;

    this.setState({ counters: counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count--;

    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="app">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onLike={this.handleLike}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
