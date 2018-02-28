console.log("JS file is connected!");

// Extending jQuery to detect animation end:
$.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
  
        if (typeof callback === 'function') callback();
      });
  
      return this;
    },
  });

//Unhides #project-description:
function unhider() {
    $('#project-8').addClass('animated fadeOutDown');
    setTimeout(function() {
        $('#project-7').addClass('animated fadeOutDown');
    }, 100);
    setTimeout(function() {
        $('#project-6').addClass('animated fadeOutDown');
    }, 200);
    setTimeout(function() {
        $('#project-5').addClass('animated fadeOutDown');
    }, 300);
    setTimeout(function() {
        $('#project-4').addClass('animated fadeOutDown');
    }, 250);
    setTimeout(function() {
        $('#project-3').addClass('animated fadeOutDown');
    }, 350);
    setTimeout(function() {
        $('#project-2').addClass('animated fadeOutDown');
    }, 450);
    setTimeout(function() {
        $('#project-1').addClass('animated fadeOutDown');
    }, 550);
    setTimeout(function() {
        $('#project-1').animateCss('fadeOutDown', function() {        
            $('#project-1').hide();
            $('#project-description').removeClass('animated fadeOutUp');
            $('#project-description').show();
            $('#project-description').addClass('animated fadeInDown');
        });
    }, 800);    
};

// This re-hides project-description after you cick the X and brings back the projects.
function rehider() {
    $('#project-description').removeClass('animated fadeInDown');
        $('#project-description').animateCss('fadeOutUp', function() {
        $('#project-description').hide();
        $('#project-1').show();
        $('#project-1').removeClass('animated fadeOutDown');
        $('#project-1').addClass('animated fadeInUp');
        setTimeout(function() {
            $('#project-2').removeClass('animated fadeOutDown');
            $('#project-2').addClass('animated fadeInUp');
        }, 100);
        setTimeout(function() {
            $('#project-3').removeClass('animated fadeOutDown');
            $('#project-3').addClass('animated fadeInUp');
        }, 200);
        setTimeout(function() {
            $('#project-4').removeClass('animated fadeOutDown');
            $('#project-4').addClass('animated fadeInUp');
        }, 300);
        setTimeout(function() {
            $('#project-5').removeClass('animated fadeOutDown');
            $('#project-5').addClass('animated fadeInUp');
        }, 400);
        setTimeout(function() {
            $('#project-6').removeClass('animated fadeOutDown');
            $('#project-6').addClass('animated fadeInUp');
        }, 500);
        setTimeout(function() {
            $('#project-7').removeClass('animated fadeOutDown');
            $('#project-7').addClass('animated fadeInUp');
        }, 600);
        setTimeout(function() {
            $('#project-8').removeClass('animated fadeOutDown');
            $('#project-8').addClass('animated fadeInUp');
        }, 700); 
    });  
};

// These add project-specific content to #project-description:
function contentAdderOne() {
    $('#project-image').empty();
    $('#project-image').append('<img src="./img/assassins/300x300.png" />');
    $('#project-copy').empty();
    $('#project-copy').append('<h3>Crime Watcher</h3><p>This is a lorem ipsum blah blah blah whatever.</p>');
}

function contentAdderTwo() {
    $('#project-image').empty();
    $('#project-image').append('<img src="../img/assassins/300x300.png" />');
    $('#project-copy').empty();
    $('#project-copy').append('<h3>Cornered!</h3><p>This is a lorem ipsum blah blah blah whatever.</p>');
}

function contentAdderThree() {
    $('#project-image').empty();
    $('#project-image').append('<img src="../img/assassins/300x300.png" />');
    $('#project-copy').empty();
    $('#project-copy').append('<h3>Bridge of Death</h3><p>This is a lorem ipsum blah blah blah whatever.</p>');
}

function contentAdderFour() {
    $('#project-image').empty();
    $('#project-image').append('<img src="../img/assassins/300x300.png" />');
    $('#project-copy').empty();
    $('#project-copy').append('<h3>Time Sheet</h3><p>This is a lorem ipsum blah blah blah whatever.</p>');
}

function contentAdderFive() {
    $('#project-image').empty();
    $('#project-image').append('<img src="../img/assassins/300x300.png" />');
    $('#project-copy').empty();
    $('#project-copy').append('<h3>Cornered!</h3><p>This is a lorem ipsum blah blah blah whatever.</p>');
}

function contentAdderSix() {
    $('#project-image').empty();
    $('#project-image').append('<img src="../img/assassins/300x300.png" />');
    $('#project-copy').empty();
    $('#project-copy').append('<h3>Cornered!</h3><p>This is a lorem ipsum blah blah blah whatever.</p>');
}

function contentAdderSeven() {
    $('#project-image').empty();
    $('#project-image').append('<img src="../img/assassins/300x300.png" />');
    $('#project-copy').empty();
    $('#project-copy').append('<h3>Cornered!</h3><p>This is a lorem ipsum blah blah blah whatever.</p>');
}

function contentAdderEight() {
    $('#project-image').empty();
    $('#project-image').append('<img src="../img/assassins/300x300.png" />');
    $('#project-copy').empty();
    $('#project-copy').append('<h3>Cornered!</h3><p>This is a lorem ipsum blah blah blah whatever.</p>');
};