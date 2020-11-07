var SomeNuts = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="resources/peanuts.png" class="someNuts goAway">');
  this.setPosition(top, left);
};

SomeNuts.prototype = Object.create(Dancer.prototype);
SomeNuts.prototype.constructor = SomeNuts;


SomeNuts.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
