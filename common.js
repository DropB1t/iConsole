$(document).ready(function() {
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd'; //controlla se l'animazione è finita

  $(".console").css('display', 'none');
  $(".explainJS").css('display', 'none');

  $('.main-container').animate({ //animazione della schermata iniziale
    width: "100%",
    opacity: 1
  }, 1000);

  $('.startspan').addClass('animated fadeInLeft');
  $('.starth1').addClass('animated fadeInDown').one(animationEnd,function() { //prima animazione del titolo
    $(this).removeClass('animated fadeInDown'); //rimuove la classe contenente la prima animazione tramite il callback
    $(this).css('animation-iteration-count', '3'); //decide quante volte fare la seconda animazione
    $(this).addClass('animated pulse').one(animationEnd,function () {
      $(".start").addClass('animated bounceOutDown').one(animationEnd,console())
    }); //seconda animazione del titolo
  });
   //animazione della scritta "Initializing"
  function console(){
      $(".console").css('display', 'inline-block');
      $(".console").addClass('animated fadeInDown').one(animationEnd, function() {
        $(this).removeClass('animated fadeInDown');
      });

      var typed = new Typed('#typed',{
        strings: ["Hello, my name is [iConsole]. I'm honored to meet you!^1000","I was created with a programming language called JavaScript",
                  "What?^1200 You don't know what is JavaScript?^800  ","Let me explain you very briefly..."],
        startDelay: 2500,
        cursorChar: "|",
        typeSpeed: 30,
        onComplete: function () {
          $(".typed-cursor").hide(),
          explain()
        }
      });
  }

  function explain() {
    $(".explainJS").css('display', 'inline-block');
    $(".explainJS").addClass('animated bounceInLeft').one(animationEnd, function() {
      $(this).removeClass('animated bounceInLeft');
    });
  }

});
