const chai = require('chai');
const dirtyChai = require('dirty-chai');

chai.use(dirtyChai);
const { expect } = require('chai');

// describes a main block of tests
describe('Main', () => {
  let arr;

  // runs once before the block
  before(() => {
    // ex: connect to databse
  });

  // runs once after the block
  after(() => {
    // ex: disconnect to databse
  });

  // runs before each test
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // runs after each test
  afterEach(() => {
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true();
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.lengthOf(2);
  });
});
