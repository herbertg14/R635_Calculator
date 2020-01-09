import React from 'react'; 

const calculatorInput = (props) => {
    return (
        <div className="userInput">
            <textarea name="inputText" id="inputTxt" onChange={props.changed}></textarea>
            <button onClick={props.clicked}>Calculate</button>
        </div>
    );
}

export default calculatorInput;