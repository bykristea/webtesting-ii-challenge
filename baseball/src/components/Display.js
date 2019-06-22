import React, { Component } from 'react';
import '../App.css';
import Dashboard from './Dashboard';


class Display extends Component {

  state = {
      balls: 0,
      strikes: 0,
      outs: 0,
      hits: 0,
      inning: 1
  }

  ballsHandler = () => {
    if(this.state.balls < 4 ){
        this.setState({
            ...this.state,
            balls: this.state.balls + 1,

        })
    }

    if(this.state.balls === 4 || this.state.strikes === 3){
      this.setState({
          balls: 0,
          strikes: 0
      })
    }
};

strikesHandler = () => {
  if(this.state.strikes < 3 ){
      this.setState({
          ...this.state,
          strikes: this.state.strikes + 1,

      })
  }

  if(this.state.balls === 4 || this.state.strikes === 3){
    this.setState({
        balls: 0,
        strikes: 0
    })
  }
};

outsHandler = () => {
    if(this.state.outs < 3 ){
        this.setState({
            ...this.state,
            outs: this.state.strikes + 1,
        })
    
    }

    if(this.state.outs === 3){
        this.setState({
            balls: 0,
            strikes: 0
        })
    }
};

inningHandler = () => {
  if(this.state.inning < 9 ){
      this.setState({
          ...this.state,
          inning: this.state.inning + 1,

      })
  }
}

hitHandler = () => {
  this.setState({
      balls: 0,
      strikes: 0
  });
}

  render() {
    return (
      <div >
        <h2>Balls: {this.state.balls}</h2>
        <h2>Strikes: {this.state.strikes}</h2>
        <h2>Outs: {this.state.outs}</h2>
        <h2>Hits: {this.state.hits}</h2>
        <h2>Inning: {this.state.inning}</h2>
        <Dashboard />
      </div>
    );
  }
}

export default Display;