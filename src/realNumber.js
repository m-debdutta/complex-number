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

