const {deepStrictEqual} = require('assert'); 
const {describe, it} = require('node:test'); 

const {complexNumber} = require('../src/complexNumber.js'); 
const complex = complexNumber(); 

it('should give the real part', function() { 
  deepStrictEqual(complex.getRealPart({real: 2, imaginary: 3}), 2); 
}); 

it('should give the imaginary part', function() {
  deepStrictEqual(complex.getImaginaryPart({real: 2, imaginary: 3}), 3); 
}); 

it('should give addition of complex number', function() {
  deepStrictEqual(complex.getSum([
    {real: 2, imaginary: 3}, 
    {real: 3, imaginary: 3}
  ]), {real: 5, imaginary: 6}); 
}); 
