import React, { Component } from 'react';
import './App.css';
import CalculatorInput from './components/CalculatorInput';
import CalculatorOutput from './components/CalculatorOutput';
import createInputArray from './utils/utils';
import negativeNumberError from './utils/erros';


class App extends Component {

  state = {
    input: "",
    output: 0,
    error: false,
    errorMessage: ""
  }

  //Changes state upon input change
  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  example = (() =>{
    this.setState({
      error: true
    });
  });

  //Does calculation based on user input
  calculateHandler = () => {

    // creates array of values to add
    const inputArr = createInputArray(this.state.input); 
    let answer = 0; 
    let error = false;
    let negativeNumArr = []

    //add values
    inputArr.forEach((i) =>{
      const value = Number(i);

      if (!isNaN(value)){
        if (value >= 0){
          if (value <= 1000){
            answer += value;
          }
        }
        else{
          error = true;
          negativeNumArr.push(value);
        }
      }
    });

    this.setState({
      output: answer,
      error: error,
      errorMessage: negativeNumberError(negativeNumArr)
    });
  }

  render() {
    return (

      <div className="App">
        <h1>R365 Calculator</h1>
        <CalculatorInput changed={this.inputChangedHandler} clicked={this.calculateHandler}/>
        <CalculatorOutput output={this.state.output} error={this.state.error} errorMessage={this.state.errorMessage}/>
      </div>

    );
  }
}

export default App;
