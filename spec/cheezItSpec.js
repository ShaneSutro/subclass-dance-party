describe('cheezIt Dancer', function() {

  var cheezIt, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cheezIt = new CheezIt(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cheezIt.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should have a lineUp function that makes it line up', function() {
      expect(cheezIt.lineUp).to.be.a.function;
    });
  });
});