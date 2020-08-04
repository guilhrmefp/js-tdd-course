import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

chai.use(dirtyChai);

describe('Main', () => {
  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(chai).to.exist();
    });
  });
});
