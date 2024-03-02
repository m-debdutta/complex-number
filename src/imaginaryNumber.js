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
    return imaginaryNumber(-imaginary * otherImaginary.value()); 
  }; 

  return {value, toString, addImaginary, multiplyImaginary}; 
}; 
