$(document).ready(function() {
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  $('.start').animate({
    width: "100%",
    opacity: 1
  }, 1000);

  $('.starth1').addClass('animated fadeInDown').one(animationEnd,function() {
    $(this).removeClass('animated fadeInDown');
    $(this).css('animation-iteration-count', '3');
    $(this).addClass('animated pulse');
  });
  $('.startspan').addClass('animated fadeInLeft');

});


// var typed = new Typed('#typed',{
//   strings: ["Hello, my name is [iConsole]","I was created with a JavaScript  framework called typed.js!"],
//   startDelay: 1200,
//   typeSpeed: 30
// });
