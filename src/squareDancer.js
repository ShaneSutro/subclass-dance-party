var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="resources/cheezit.png" class="squareDancer goAway">');
  this.setPosition(top, left);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this);

  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  this.$node.animate({
    // animation: 'spin 4s linear infinite',
    transform: 'rotate(360deg)'
  },
  {
    duration: 8000
  });
};

SquareDancer.prototype.lineUp = function() {
  console.log($(window).width());
  this.$node.animate({
    left: `${$(window).width() - 306}px`
  });
};