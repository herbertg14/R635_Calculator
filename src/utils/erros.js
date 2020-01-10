  // Returns error message of negative numbers used
  const negativeNumberError = (negativeArr) => {

    let negativeNumString = "Do not use negative numbers such as "

    negativeArr.forEach((num) =>{

      const numString = num.toString();
      negativeNumString = negativeNumString + numString + " ";
    });

    return (negativeNumString);
  }

  export default negativeNumberError;