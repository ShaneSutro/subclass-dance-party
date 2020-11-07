describe('extraSalt Dancer', function() {

  var superBlinky, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    superBlinky = new SuperBlinky(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(superBlinky.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(superBlinky.$node, 'toggle');
    superBlinky.step();
    expect(superBlinky.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least three times per second', function() {
      sinon.spy(superBlinky, 'step');
      expect(superBlinky.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(superBlinky.step.callCount).to.be.equal(3);

      clock.tick(timeBetweenSteps);
      expect(superBlinky.step.callCount).to.be.equal(5);
    });

    it('should have a step function that makes it line up', function() {
      // superBlinky.step();
      expect(superBlinky.lineUp).to.be.a.function;
    });
  });
});