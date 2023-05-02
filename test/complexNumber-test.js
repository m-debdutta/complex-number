const {strictEqual, deepStrictEqual} = require('assert'); 
const {describe, it} = require('node:test'); 

const {complexNumber} = require('../src/complexNumber.js'); 
const complex = complexNumber(); 

it('should give the real part', function() { 
  const complex = complexNumber({real: 2, imaginary: 3}); 
  strictEqual(complex.getRealPart(), 2); 
}); 

it('should give the imaginary part', function() {
  const complex = complexNumber({real: 2, imaginary: 3}); 
  strictEqual(complex.getImaginaryPart(), 3); 
}); 

it('should give addition of complex number', function() {
  const complex = complexNumber([
    {real: 2, imaginary: 3}, 
    {real: 3, imaginary: 3}
  ]); 
  deepStrictEqual(complex.getSum(), {real: 5, imaginary: 6}); 
}); 

it('should give multiplication of complex number', function() {
  const complex = complexNumber([
    {real: 2, imaginary: 3}, 
    {real: 1, imaginary: 2}
  ]); 
  deepStrictEqual(complex.getProduct(), {real: -4, imaginary: 7}); 
}); 
