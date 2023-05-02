const complexNumber = function() {

  const getRealPart = function(number) {
    return number.real; 
  }

  const getImaginaryPart = function(number) {
    return number.imaginary; 
  }

  const getSum = function(numbers) {
    const real = numbers[0].real + numbers[1].real; 
    const imaginary = numbers[0].imaginary + numbers[1].imaginary; 
    return {real, imaginary}
  }
  return {getRealPart, getImaginaryPart, getSum}
}

exports.complexNumber = complexNumber;
