const {strictEqual, deepStrictEqual} = require('assert'); 
const {describe, it} = require('node:test'); 

const {complexNumber, complexNumberOperator} = require('../src/complexNumber.js'); 

describe('Testing to get real and imaginary part of a complex numbers', function() {
  const complex = complexNumber({real: 2, imaginary: 3}); 

  it('should give the real part', function() { 
    strictEqual(complex.getRealPart(), 2); 
  }); 

  it('should give the imaginary part', function() {
    strictEqual(complex.getImaginaryPart(), 3); 
  }); 

}); 

describe('Testing to get the sum and product of two complex number', function() {

  const complexOperation = complexNumberOperator([
    {real: 2, imaginary: 3}, 
    {real: 1, imaginary: 2}
  ]); 

  it('should give addition of complex number', function() {
    deepStrictEqual(complexOperation.getSum(), {real: 3, imaginary: 5}); 
  }); 

  it('should give multiplication of complex number', function() {
    deepStrictEqual(complexOperation.getProduct(), {real: -4, imaginary: 7}); 
  }); 

}); 
