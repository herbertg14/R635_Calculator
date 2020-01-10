import React, { Component } from 'react';
import './App.css';
import CalculatorInput from './components/CalculatorInput';
import CalculatorOutput from './components/CalculatorOutput';


class App extends Component {

  state = {
    input: "",
    output: 0,
    error: false,
    errorMessage: ""
  }


  parseSeparatorHelper = (separator) =>{

    let separatorArr = [];

    if (separator.length === 3){

      separatorArr.push(separator.charAt(2));
      return separatorArr;
    }else{

      let newSeparator = separator.substring(3, separator.length - 1);
      separatorArr.push(newSeparator);
      return separatorArr;
    }
  }

  createInputArray = (input) => {

    let separators = [',', '\n'];

    let inputArr = input.split('\n');
    // let inputArr = input.split(new RegExp('[' + separators.join('') + ']', 'g'));


    // check for delimeter //[something] format
    if ((inputArr[0].length > 2) && (inputArr[0].substring(0,2) === "//")){

      const newSeparator = this.parseSeparatorHelper(inputArr[0]);
      const mergedSeparators = [...separators, ...newSeparator];

      let newInput = inputArr.slice(1);
      newInput = newInput.toString();
      inputArr = newInput.split(new RegExp('[' + mergedSeparators.join('') + ']', 'g'));

      return inputArr;

    }
    // if there is no delimeter
    else{
      inputArr = input.split(new RegExp('[' + separators.join('') + ']', 'g'));
      return inputArr;
      
    }
  }


  negativeNumMessage = (negativeArr) => {

    let negativeNumString = "Do not use negative numbers such as "

    negativeArr.forEach((num) =>{

      const numString = num.toString();
      negativeNumString = negativeNumString + numString + " ";
    });

    return (negativeNumString);
  }


  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }


  calculateHandler = () => {

    const inputArr = this.createInputArray(this.state.input); 
    let answer = 0; 
    let error = false;
    let negativeNumArr = []

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
      errorMessage: this.negativeNumMessage(negativeNumArr)
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
