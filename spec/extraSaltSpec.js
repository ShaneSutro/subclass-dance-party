describe('extraSalt', function() {

  var extraSalt, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    extraSalt = new ExtraSalt(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(extraSalt.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(extraSalt.$node, 'toggle');
    extraSalt.step();
    expect(extraSalt.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least three times per second', function() {
      sinon.spy(extraSalt, 'step');
      expect(extraSalt.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(extraSalt.step.callCount).to.be.equal(3);

      clock.tick(timeBetweenSteps);
      expect(extraSalt.step.callCount).to.be.equal(5);
    });

    it('should have a lineUp function that makes it line up', function() {
      expect(extraSalt.lineUp).to.be.a.function;
    });
  });
});