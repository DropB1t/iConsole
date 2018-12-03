$(document).ready(function() {
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd'; //check if the animation is over

  $(".console").css('display', 'none');
  $(".explainJS").css('display', 'none');

  $('.main-container').animate({ //space of the first animation
    width: "100%",
    opacity: 1
  }, 1000);

  $('.startspan').addClass('animated fadeInLeft');
  $('.starth1').addClass('animated fadeInDown').one(animationEnd,function() { //first title animation
    $(this).removeClass('animated fadeInDown'); //remove the class of the first animation using the callback
    $(this).css('animation-iteration-count', '3'); //decide how many times the text will be animated
    $(this).addClass('animated pulse').one(animationEnd,function () {
      $(".start").addClass('animated bounceOutDown').one(animationEnd,console()); //second title animation
    });
  });
   //"Initializing" animation
  function console(){
      $(".console").css('display', 'inline-block');
      $(".console").addClass('animated fadeInDown').one(animationEnd, function() {
        $(".start").css('display', 'none');
        $(this).removeClass('animated fadeInDown');
      });

      var typed = new Typed('#typed',{
        strings: ["Hello, my name is [iConsole]. I'm honored to meet you!^1000","I was created with a programming language called JavaScript^1000",
                  "What?^1200 You don't know what is JavaScript?^800  ","Let me explain you very briefly...","..."],
        startDelay: 2500,
        cursorChar: "|",
        typeSpeed: 30,
        onComplete: function () {
          // $(".typed-cursor").hide(),
          $(".explainJS").css('display', 'inline-block');
          $(".explainJS").addClass('animated bounceInLeft').one(animationEnd, function() {
            $(this).removeClass('animated bounceInLeft');
          });
          $("#explain-b").click( function() {
            $(".explainJS").css('animation-delay', '0');
            $(".explainJS").addClass('animated bounceOutLeft fast').one(animationEnd,function () {
              $(this).removeClass('animated bounceOutLeft');
              $(this).css('display', 'none');
              typed.destroy();
              animations();
            });
          });
        },
        onDestroy: function(self) {}
      });
  }

  function animations(){
    var typed2 = new Typed('#typed', {
      strings: ["Now i'm going to show you some funny things that you can do using JavaScript...^800","Something like this..."],
      typeSpeed: 30,
      cursorChar: "|",
      startDelay: 2000,
      onComplete: function() {}
    });
  }

});
