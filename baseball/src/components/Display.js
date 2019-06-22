import React, { Component } from 'react';
import './App.css';

class Display extends Component {

  state = {
      balls: 0,
      strikes: 0,
      outs: 0,
      inning: 1
  }

  render() {
    return (
      <div >
        <h2>Balls: {this.state.balls}</h2>
        <h2>Strikes: {this.state.strikes}</h2>
        <h2>Outs: {this.state.outs}</h2>
        <h2>Inning: {this.state.inning}</h2>
      </div>
    );
  }
}

export default Display;