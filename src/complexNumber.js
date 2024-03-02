const realNumber = function(real) {

  const value = function() {
    return real; 
  }; 

  const toString = function() {
    return real.toString(); 
  }; 

  const addReal = function(otherReal) {
    return realNumber(real + otherReal.value()); 
  }; 

  const multiply = function(otherReal) {
    return realNumber(real * otherReal.value()); 
  }; 

  return {addReal, value, multiply, toString}; 
}; 

const imaginaryNumber = function(imaginary) {
  const value = function() {
    return imaginary;
  };

  const toString = function() {
    return `${imaginary}i`;
  };

  const addImaginary = function(otherImaginary) {
    return imaginaryNumber(imaginary + otherImaginary.value());
  };

  const multiplyImaginary = function(otherImaginary) {
    return realNumber(-imaginary * otherImaginary.value());
  };

  return {value, toString, addImaginary, multiplyImaginary};
};

const complexNumber = function(real, imaginary) {
  const realPart = function() {
    return realNumber(real.value()); 
  }; 

  const imaginaryPart = function() {
    return imaginaryNumber(imaginary.value()); 
  }; 

  const add = function(number) {
    const sumOfReal = real.add(number.real.value());  
    const sumOfImaginary = imaginary.add(number.imaginary.value()); 

    return complexNumber(realNumber(sumOfReal), imaginaryNumber(sumOfImaginary)); 
  }; 

  const multiply = function(number) {
    const a = real; 
    const b = imaginary;   
    const c = number.realPart(); 
    const d = number.imaginaryPart(); 

    const realPart = a * c - b * d; 
    const imaginaryPart = a * d + b * c; 

    return complexNumber(realPart, imaginaryPart); 
  }; 

  const toString = function() {
    return real.toString() ' + ' imaginary.toString(); 
  }

  return {realPart, imaginaryPart, multiply, add, toString};
}; 

exports.complexNumber = complexNumber;
