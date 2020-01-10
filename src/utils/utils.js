  // Returns an array of customized separators
const parseSeparatorHelper = (separator) => {

    let separatorArr = [];

    //simple custom separator
    if (separator.length === 3){

      separatorArr.push(separator.charAt(2));
      return separatorArr;

    //custom separtors using [][] format
    }else{

      let newSeparator = separator.substring(3, separator.length - 1);
      separatorArr = newSeparator.split('][');
      return separatorArr;
    }
  }


  // Returns an array of the input string based on the separtors
const createInputArray = (input) => {

    let separators = [',', '\n'];

    let inputArr = input.split('\n');

    //Checks for custom separtors
    if ((inputArr[0].length > 2) && (inputArr[0].substring(0,2) === "//")){

      const newSeparator = parseSeparatorHelper(inputArr[0]);
      const mergedSeparators = [...separators, ...newSeparator];

      let newInput = inputArr.slice(1);
      newInput = newInput.toString();

      inputArr = newInput.split(new RegExp('[' + mergedSeparators.join('') + ']', 'g'));

      return inputArr;

    }
    //No custom separtors 
    else{
      inputArr = input.split(new RegExp('[' + separators.join('') + ']', 'g'));
      return inputArr;

    }
  }

  export default createInputArray;