const complexNumber = function(numbers) {
  const getRealPart = function() {
    return numbers.real; 
  }

  const getImaginaryPart = function() {
    return numbers.imaginary; 
  }

  const getSum = function() {
    const real = numbers[0].real + numbers[1].real; 
    const imaginary = numbers[0].imaginary + numbers[1].imaginary; 
    return {real, imaginary}
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
  return {getRealPart, getImaginaryPart, getProduct, getSum}
}

exports.complexNumber = complexNumber;
