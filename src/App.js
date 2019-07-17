import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.copy = this.copy.bind(this);
    this.state = {value: ""}
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.copy} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
  copy(ev){
    this.setState({value: ev.target.value})
  }
}

export default App;
