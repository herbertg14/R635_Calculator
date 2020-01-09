import React, { Component } from 'react';
import './App.css';
import CalculatorInput from './components/CalculatorInput';
import CalculatorOutput from './components/CalculatorOutput';


class App extends Component {

  state = {
    input: "",
    output: 0,
    error: false
  }


  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  createInputArray = (input) => {

    let inputArr = input.split(',');

    return inputArr;

  }
  
  calculateHandler = () => {

    const inputArr = this.createInputArray(this.state.input); 
    console.log(inputArr);
    let answer = 0; 
    let error = false;

    inputArr.forEach((i) =>{
      const value = Number(i);

      if (!isNaN(value)){
        answer += value;
      }
    });

    this.setState({
      output: answer,
      error: error
    });

    console.log(this.state);
  }


  render() {
    return (

      <div className="App">
        <h1>R365 Calculator</h1>
        <CalculatorInput changed={this.inputChangedHandler} clicked={this.calculateHandler}/>
        <CalculatorOutput output={this.state.output} error={this.state.error}/>
      </div>

    );
  }
}

export default App;
