var CheezIt = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="resources/cheezit.png" class="cheezIt goAway">');
  this.setPosition(top, left);
};

CheezIt.prototype = Object.create(Dancer.prototype);
CheezIt.prototype.constructor = CheezIt;


CheezIt.prototype.lineUp = function() {
  console.log($(window).width());
  this.$node.animate({
    left: `${$(window).width() - 306}px`
  });
};