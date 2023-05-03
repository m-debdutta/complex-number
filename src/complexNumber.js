const complexNumber = function(number) {
  const getRealPart = function() {
    return number.real; 
  }

  const getImaginaryPart = function() {
    return number.imaginary; 
  }

  return {getRealPart, getImaginaryPart}; 
}

const complexNumberOperator = function(numbers) {
  const getSum = function() {
    return numbers.reduce(function(sum, number) {
      sum.real += number.real; 
      sum.imaginary += number.imaginary; 
      return sum;
    }, {real: 0, imaginary: 0}); 
  }

  const getProduct = function() {
    const [number1, number2] = numbers; 
    const {real: real1, imaginary: imaginary1} = number1; 
    const {real: real2, imaginary: imaginary2} = number2; 
    const product = {
      real: (real1 * real2) - (imaginary1 * imaginary2), 
      imaginary: (real1 * imaginary2) + (real2 * imaginary1) 
    }

    return product;  
  }

  return {getProduct, getSum};
}
exports.complexNumberOperator = complexNumberOperator
exports.complexNumber = complexNumber;
