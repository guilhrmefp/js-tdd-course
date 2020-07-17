// describes a main block of tests
describe('Main', () => {
  // runs once before the block
  before(() => {
    console.log('before');
  });

  // runs once after the block
  after(() => {
    console.log('after');
  });

  // runs before each test
  beforeEach(() => {
    console.log('beforeEach');
  });

  // runs after each test
  afterEach(() => {
    console.log('afterEach');
  });

  // you can have multiple describes ex: one for each method
  describe('Method A', () => {
    // the context of the test
    context('Case 1', () => {
      // the test itself
      it('should happen blabla', () => {
      });
    });

    context('Case 2', () => {
      it('should happen lolol', () => {
      });

      it('should happen mimimi', () => {
      });
    });
  });

  describe('Method B', () => {
    // the context of the test
    context('Case 1', () => {
      // the test itself
      it('should happen fuuu', () => {
      });
    });
  });
});
