// describes a main block of tests
describe('Main', () => {
  // you can have multiple describes ex: one for each method
  describe('Method A', () => {
    // the context of the test
    context('Case 1', () => {
      // the test itself
      it.skip('should happen blabla', () => {
        throw new Error('just and error');
      });
    });

    context('Case 2', () => {
      it.only('should happen lolol', () => {
      });

      it('should happen mimimi', () => {
      });
    });
  });

  describe('Method B', () => {
  });
});
