import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor(props){
      super(props);
      this.state = {
          value: 0,
      }
  }

  increment() {
      this.setState({value: this.state.value + 1});
  }

  decrement() {
      this.setState({value: this.state.value -1});
  }

  render() {
    return (
          <div className="counter">
            <h1 className="value">{this.state.value}</h1>
            <button className="blue" onClick = {()=>{this.increment()}}>Increment</button>
            <button className="blue" onClick = {()=>{this.decrement()}}>Decrement</button>
          </div>
    );
  }
}


let counterId = 1;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            counters: [0]
        }
    }

    addCounter = () => {
        let counters = [...this.state.counters];
        counters.push(counterId);
        counterId++;
        this.setState({ counters: counters });
    }

    render () {
        const { counters } = this.state;
        return (
            <div className="main">
                <div className="header">
                    <h1>Counter</h1>
                </div>
                <button className="topbar add" onClick={this.addCounter}>Add a Counter</button>
                <div className="counter-list">
                    { counters.map((id) => <Counter key={id}/>) }
                </div>
            </div>
        )
    }
}

export default App;
