const complexNumber = function(real, imaginary) {
  const getRealPart = function() {
    return real; 
  }; 

  const getImaginaryPart = function() {
    return imaginary; 
  }; 

  const add = function(number) {
    const sumOfReal = real + number.getRealPart();  
    const sumOfImaginary = imaginary + number.getImaginaryPart(); 

    return complexNumber(sumOfReal, sumOfImaginary); 
  }; 

  const multiply = function(number) {
    const a = real; 
    const b = imaginary;   
    const c = number.getRealPart(); 
    const d = number.getImaginaryPart(); 

    const realPart = a * c - b * d; 
    const imaginaryPart = a * d + b * c; 

    return complexNumber(realPart, imaginaryPart); 
  }; 

  const display = function() {
    const sign = imaginary < 0 ? ' - ' : ' + ';

    if(real === 0) {
      return imaginary + 'i'; 
    }

    return real + sign + Math.abs(imaginary) + 'i'; 
  }; 

  return {getRealPart, getImaginaryPart, multiply, add, display};
}; 

exports.complexNumber = complexNumber;
