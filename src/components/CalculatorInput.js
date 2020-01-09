import React from 'react'; 

const calculatorInput = (props) => {
    return (
        <div className="userInput">
            <input type="text" onChange={props.changed} /> 
            <button onClick={props.clicked}>Calculate</button>
        </div>
    );
}

export default calculatorInput;