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
    $('#project-image').append('<a href="https://crimewatcher.herokuapp.com/" target="_blank"><img src="./img/projects/crimewatcher520x500.jpg"/></a>');
    $('#project-copy').empty();
    $('#project-copy').append("<h3>Crime Watcher</h3><p><strong>Technologies used:</strong> HTML | CSS | jQuery | Node.JS | React.JS | MongoDB | API | Bootstrap</p><p><strong>Description:</strong> This app is geared for crime reporters. It allows them to search for crimes committed in specific time frames and automatically presents the data in readable story form. Peter and three other developers created it as part of UCI's Web Development certificate program.</p><h4><a href='https://crimewatcher.herokuapp.com/' target='_blank'>TRY IT OUT!</a></h4> ");
}

function contentAdderTwo() {
    $('#project-image').empty();
    $('#project-image').append("<a href='https://petersurowski.github.io/RPG/' target='_blank'><img src='./img/projects/cornered520x500.jpg'/></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>Cornered!</h3><p><strong>Technologies used:</strong> HTML | CSS | plain vanilla JavaScript</p><p><strong>Description:</strong> Cornered! is a simple dice-throwing game where you try to defeat three zombies by rolling high enough numbers to take away their hit points before they depleat yours. It uses only HTML, CSS and plain JavaScript (though Peter also created <a href='https://petersurowski.github.io/RPG-jQuery/' target='_blank'>a version that uses jQuery</a>.)</p><h4><a href='https://petersurowski.github.io/RPG/' target='_blank'>TRY IT OUT!</a></h4> ");
}

function contentAdderThree() {
    $('#project-image').empty();
    $('#project-image').append("<a href='https://petersurowski.github.io/TriviaGame/' target='_blank'><img src='./img/projects/holygrail520x500.jpg'/></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>The Bridge of Death</h3><p><strong>Technologies used:</strong> HTML | CSS | jQuery</p><p><strong>Description:</strong> There should have been a Monty Python's Quest for the Holy Grail-themed video game on Nintendo, but there wasn't. So Peter created one! It recreates one of the most famous scenes of the movie in glorious 8-bit fashion.</p><h4><a href='https://petersurowski.github.io/TriviaGame/' target='_blank'>TRY IT OUT!</a></h4> ");
}

function contentAdderFour() {
    $('#project-image').empty();
    $('#project-image').append("<a href='https://petersurowski.github.io/timesheet/' target='_blank'><img src='./img/projects/TimeCard520x500.jpg' /></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>Time Sheet</h3><p><strong>Technologies used:</strong> HTML | CSS | Bootstrap | jQuery | Firebase</p><p><strong>Description:</strong> We all gotta punch the clock in one way or another. May as well do it in style! Peter created this basic Bootstrapped time sheet app while toying with Google's new Firebase database service. It's pre-populated with some dummy data, but feel free to add to it!<p><h4><a href='https://petersurowski.github.io/timesheet/' target='_blank'>TRY IT OUT!</a></h4> ");
}

function contentAdderFive() {
    $('#project-image').empty();
    $('#project-image').append("<a href='http://http://www.capoeirariverside.com/' target='_blank'><img src='./img/projects/capoeira520x500.jpg' /></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>Capoeira Riverside</h3><p><strong>Technologies used:</strong> HTML | CSS | Bootstrap | PHP | MySQL | WordPress</p><p><strong>Description:</strong> Peter created this website for a client who runs a martial arts school. He needed something that presented the business' basic information while stirring excitement in the visitor. He also needed a CMS that the client would be able to use after the development phase was done. WordPress was an effective solution. The theme is a customized child of OneTone.<p><h4><a href='https://petersurowski.github.io/timesheet/' target='_blank'>TRY IT OUT!</a></h4> ");
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