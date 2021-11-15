
//problem 1
//input: "iti" ===> output: Iti. expect
//input: 12 ===> output: "".   expect

const capitalizeText = (input) => {
    if (typeof input !== "string"){
      throw new TypeError("parameter should be string")
    };
    return input.toUpperCase();
  };



  //problem 2

// input number 3 ==> output should be [0,1,2]


  const createArray = (number) => {
    const myArray = Array.from(Array(number).keys());
    return myArray;
  };
  

  module.exports={
    capitalizeText, createArray
  };