import React, { Component } from 'react';
import '../App.css';

function Dashboard (props) {
    return (
      <div >
        <button data-testid="strike-btn" onClick={props.strikesHandler}>Strike</button>
        <button data-testid="ball-btn" onClick={props.ballsHandler}>Ball</button>
        <button data-testid="outs-btn" onClick={props.outsHandler}>Outs</button>
        <button data-testid="hits-btn" onClick={props.hitsHandler}>Hits</button>
        <button data-testid="inning-btn" onClick={props.inningHandler}>Inning</button>
      </div>
    );
  }


export default Dashboard;