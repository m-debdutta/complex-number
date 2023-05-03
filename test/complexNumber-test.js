const {strictEqual, deepStrictEqual} = require('assert'); 
const {describe, it} = require('node:test'); 

const {complexNumber} = require('../src/complexNumber.js'); 

describe('Testing to get real and imaginary part of a complex numbers', function() {
  const complex = complexNumber(2,3); 
  it('should give the real part', function() { 
    strictEqual(complex.getRealPart(), 2); 
  }); 

  it('should give the imaginary part', function() {
    strictEqual(complex.getImaginaryPart(), 3); 
  }); 
}); 

describe('Testing to get the sum and product of two complex number', function() {
  const a = complexNumber(2, 3); 
  const b = complexNumber(1, 2); 

  const sum = a.add(b); 
  it('should give addition of complex number', function() {
    strictEqual(sum.display(), '3 + 5i'); 
  }); 

  const product = a.multiply(b); 
  it('should give multiplication of complex number', function() {
    strictEqual(product.display(), '-4 + 7i'); 
  }); 
}); 

describe('Testing display', function() {
  const a = complexNumber(2, 3); 
  it('should display the complex number', function() {
    strictEqual(a.display(), '2 + 3i'); 
  }); 

  const b = complexNumber(2, -3); 
  it('should display a complex number with negitive imaginary part', function() {
    strictEqual(b.display(), '2 - 3i'); 
  }); 

  const c = complexNumber(-2, 3); 
  it('should display a complex number with negitive real part', function() {
    strictEqual(c.display(), '-2 + 3i'); 
  }); 

  const d = complexNumber(0, 3); 
  it('should display a complex number with zero as real part', function() {
    strictEqual(d.display(), '3i'); 
  }); 
}); 
