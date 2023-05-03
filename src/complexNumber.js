const complexNumber = function(real, imaginary) {
  const realPart = function() {
    return real; 
  }; 

  const imaginaryPart = function() {
    return imaginary; 
  }; 

  const add = function(number) {
    const sumOfReal = real + number.realPart();  
    const sumOfImaginary = imaginary + number.imaginaryPart(); 

    return complexNumber(sumOfReal, sumOfImaginary); 
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

  const display = function() {
    const sign = imaginary < 0 ? ' - ' : ' + ';

    if(real === 0) {
      return imaginary + 'i'; 
    }

    return real + sign + Math.abs(imaginary) + 'i'; 
  }; 

  return {realPart, imaginaryPart, multiply, add, display};
}; 

exports.complexNumber = complexNumber;
