import React from 'react'; 


const calculatorOutput = (props) => {

    return (

        props.error ? 
        <div className="Error">
            Error: {props.errorMessage}
        </div>: 

        <div className="Output">
            Answer: {props.output}
        </div>
    );
}
export default calculatorOutput;