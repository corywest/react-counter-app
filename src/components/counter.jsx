import React, { Component } from "react";

export default class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // You need to use an arrow function to pass argument into eventHandlers
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // You need to use an arrow function to pass argument into eventHandlers
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
          disabled={this.props.counter.count === 0 ? "disabled" : ""}
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>

        <button
          onClick={() => this.props.onLike(this.props.counter)}
          className="btn btn-primary m-2"
        >
          Like
        </button>
      </div>
    );
  }
}
