import React from 'react'; 

//Outputs answer
const calculatorOutput = (props) => {

    return (

        props.error ? 
        <div className="Error">
            {props.errorMessage}
        </div>: 

        <div className="Output">
            Answer: {props.output}
        </div>
    );
}
export default calculatorOutput;