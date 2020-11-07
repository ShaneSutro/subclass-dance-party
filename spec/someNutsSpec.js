describe('someNuts Dancer', function() {

  var someNuts, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    someNuts = new SomeNuts(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(someNuts.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(someNuts.$node, 'toggle');
    someNuts.step();
    expect(someNuts.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(someNuts, 'step');
      expect(someNuts.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(someNuts.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(someNuts.step.callCount).to.be.equal(2);
    });

    it('should have a lineUp function that makes it line up', function() {
      expect(someNuts.lineUp).to.be.a.function;
    });
  });
});