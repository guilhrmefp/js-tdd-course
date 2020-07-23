import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import {
  sum, sub, multi, div,
} from '../src/main';

chai.use(dirtyChai);

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist();
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist();
      expect(sub).to.be.a('function');
    });

    it('should exist the method `multi`', () => {
      expect(multi).to.exist();
      expect(multi).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist();
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6, 10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Multi', () => {
    it('should return 4 when `multi(2, 2)`', () => {
      expect(multi(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4, 2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `Can not divide by zero` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('Can not divide by zero');
    });
  });
});
