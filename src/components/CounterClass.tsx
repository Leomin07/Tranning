import React, { Component } from 'react';

interface IProps {}

interface IState {
  count: number;
}

export class CounterClass extends Component<IProps, IState> {
  state: IState = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span>Count: {this.state.count} </span>
        <button
          className="bg-gray-400 px-2 py-2 rounded-lg"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increase
        </button>
        <button
          className="bg-gray-400 px-2 py-2 rounded-lg"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrease
        </button>
      </div>
    );
  }
}

export default CounterClass;
