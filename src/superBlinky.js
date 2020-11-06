var SuperBlinky = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps / 2);
  this.$node = $('<img src="resources/extrasalt.png" class="superBlinky goAway">');
  this.setPosition(top, left);
};

SuperBlinky.prototype = Object.create(Dancer.prototype);
SuperBlinky.prototype.constructor = SuperBlinky;

SuperBlinky.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

SuperBlinky.prototype.lineUp = function() {
  this.$node.animate({
    left: '30px'
  });
};