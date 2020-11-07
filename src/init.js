$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      ($('body').height() - 375) * Math.random(),
      ($('body').width() - 300) * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    $('.goAway').on('mouseover', function(e) {
      $(e.target).fadeOut();
    });
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


