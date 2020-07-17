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
    console.log(arr.length); // 4
  });

  it('should remove the value 3 when use pop in the array', () => {
    console.log(arr.pop() === 3);
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    console.log(arr.length); // 2
  });
});
