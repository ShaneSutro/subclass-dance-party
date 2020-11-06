$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.handful').on('click', function(event) {
    if (window.dancers.length < 3) {
      alert('Gotta add more dancers first!');
    } else {
      window.dancers[1].setPosition(window.dancers[0].top + 30, window.dancers[0].left);
      window.dancers[2].setPosition(window.dancers[0].top, window.dancers[0].left + 30);
      setTimeout(function() {
        window.dancers[0].setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
        window.dancers[1].setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
        window.dancers[2].setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
      }, 3000);
    }

  });

});


