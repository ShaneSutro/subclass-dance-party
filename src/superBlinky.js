var SuperBlinky = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps / 2);
  this.$node = $('<img src="resources/extrasalt.png" class="superBlinky goAway">');
  this.setPosition(top, left);
  // this.oldStep = this.step;

};

SuperBlinky.prototype = Object.create(Dancer.prototype);
SuperBlinky.prototype.constructor = SuperBlinky;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

// this.oldStep = makeDancer.step;

SuperBlinky.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this);

  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

SuperBlinky.prototype.lineUp = function() {
  this.$node.animate({
    left: '30px'
  });
};