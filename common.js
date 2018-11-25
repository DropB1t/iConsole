$(document).ready(function() {
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd'; //controlla se l'animazione è finita
  $('.start').animate({ //animazione della schermata iniziale
    width: "100%",
    opacity: 1
  }, 1000);

  $('.starth1').addClass('animated fadeInDown').one(animationEnd,function() { //prima animazione del titolo
    $(this).removeClass('animated fadeInDown'); //rimuove la classe contenente la prima animazione tramite il callback
    $(this).css('animation-iteration-count', '3'); //decide quante volte fare la seconda animazione
    $(this).addClass('animated pulse'); //seconda animazione del titolo
  });
  $('.startspan').addClass('animated fadeInLeft'); //animazione della scritta "Initializing"

});


// var typed = new Typed('#typed',{
//   strings: ["Hello, my name is [iConsole]","I was created with a JavaScript  framework called typed.js!"],
//   startDelay: 1200,
//   typeSpeed: 30
// });
