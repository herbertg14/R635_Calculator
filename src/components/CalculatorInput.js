import React from 'react'; 

//User Input
const calculatorInput = (props) => {
    return (
        <div className="userInput">
            <textarea name="inputText" id="inputTxt" onChange={props.changed}></textarea>
            <button onClick={props.clicked}>Calculate</button>
        </div>
    );
}

export default calculatorInput;