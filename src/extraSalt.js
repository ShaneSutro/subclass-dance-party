var ExtraSalt = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps / 2);
  this.$node = $('<img src="resources/extrasalt.png" class="extraSalt goAway">');
  this.setPosition(top, left);
};

ExtraSalt.prototype = Object.create(Dancer.prototype);
ExtraSalt.prototype.constructor = ExtraSalt;

ExtraSalt.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

ExtraSalt.prototype.lineUp = function() {
  this.$node.animate({
    left: '30px'
  });
};