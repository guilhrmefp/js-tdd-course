const chai = require('chai');
const dirtyChai = require('dirty-chai');

chai.use(dirtyChai);
const { expect } = require('chai');

const calc = require('../src/main.js');

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist();
    });

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist();
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(calc.sub).to.exist();
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `multi`', () => {
      expect(calc.multi).to.exist();
      expect(calc.multi).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(calc.div).to.exist();
      expect(calc.div).to.be.a('function');
    });
  });
});
