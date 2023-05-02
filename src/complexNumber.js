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
    const real1 = numbers[0].real; 
    const real2 = numbers[1].real; 
    const imaginary1 = numbers[0].imaginary; 
    const imaginary2 = numbers[1].imaginary; 
    const real = (real1 * real2) - (imaginary1 * imaginary2); 
    const imaginary = real1 * imaginary2 + real2 * imaginary1; 
    return {real, imaginary}; 
  }

  return {getProduct, getSum};
}
exports.complexNumberOperator = complexNumberOperator
exports.complexNumber = complexNumber;
