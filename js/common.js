$(document).ready(function() {
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
  })(document.createElement('div')); //check if the animation is over

  var TransformsCircle = anime({
    targets: '.circle',
    translateX: 250,
    translateY: function(el, i, l) {return i * 250;},
    delay: function(el, i, l) {return i * 1500;},
    rotate: 540,
    direction: 'alternate',
    autoplay: false,
    complete: function(anim) {
      $(".circle-r").css('display','none');
    }
  });

  var TransformsCircleR = anime({
    targets: '.circle-r',
    translateX: -250,
    translateY: function(el, i, l) {return i * 250;},
    delay: function(el, i, l) {return i * 1500;},
    rotate: 540,
    direction: 'alternate',
    autoplay: false,
    complete: function(anim) {
      $(".circle-r").css('display','none');
    }
  });

  $(".start, .console, .explainJS, .btn button, .end, .fireworks, .circle, .circle-r").css('display', 'none');

  $('.main-container').animate({ //space of the first animation
    width: "100%",
    opacity: 1
  }, 1000);

  $("#btn-start").one("click", function() {
    $("#btn-start").animate({ //space of the first animation
      opacity: 0
    },1200,function(){$("#btn-start").css('display', 'none');});

    $(".start").css('display', 'block');
    $('.startspan').addClass('animated fadeInLeft');
    $('.starth1').addClass('animated fadeInDown').one(animationEnd,function() { //first title animation
      $(this).removeClass('animated fadeInDown'); //remove the class of the first animation using the callback
      $(this).css('animation-iteration-count', '3'); //decide how many times the text will be animated
      $(this).addClass('animated pulse').one(animationEnd,function () {
        $(".start").addClass('animated fadeOutDown').one(animationEnd,console()); //second title animation
      });
    });
  });

  function console(){
      $(".console").css('display', 'flex');
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
          $(".explainJS").css('display', 'block');
          $(".explainJS").addClass('animated bounceInLeft').one(animationEnd, function() {
            $(this).removeClass('animated bounceInLeft');
          });
          $("#explain-b").one("click", function() {
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

  //"Initializing" animation
  function animations(){
    var typed2 = new Typed('#typed', {
      strings: ["Now I'm going to show you some funny things that you can do using JavaScript...^800","Press the buttons below to see some magic..."],
      typeSpeed: 30,
      cursorChar: "|",
      startDelay: 1000,
      onComplete: function() {
        var done = -1;
        $("#btn-animL, #btn-animR").css('display', 'block');
        $('.btn button').addClass('animated fadeIn').one(animationEnd, function() {
          $(this).removeClass('animated fadeIn');
        });;
        $("#btn-animL").one("click", function(){
          $(".circle, .circle-r").css('display','block');
          TransformsCircle.play();
          TransformsCircleR.play();
          $(this).addClass('animated fadeOutUp').one(animationEnd, function() {
            $(this).css('display', 'none');
            done++;
            if(done == 1){
              typed2.destroy();
              endAnim();
            }
          });
        });
        $("#btn-animR").one("click", function(){
          bluePattern();
          $('.main-container').animate({
             backgroundColor: "#3F69F4",
             boxShadow: "inset 0 0 20px #1B368E"
           }, 7000,function(){
             $(".el").each(function(index, el) {
               el.remove();
             });
           });
          $('.console').animate({
            boxShadow: "5px 5px 2px #1B368E"
          }, 7000);
          $(this).addClass('animated fadeOutUp').one(animationEnd, function() {
            $(this).css('display', 'none');
            done++;
            if(done == 1){
              typed2.destroy();
              endAnim();
            }
          });
        });

      }
    });
  }

  function endAnim() {
    $("#btn-animD").css('display', 'block');
    $("#btn-animD").addClass('animated fadeIn').one(animationEnd, function() {
      $(this).removeClass('animated fadeIn');
    });
    $("#btn-animD").one("click", function(){
      $(this).addClass('animated fadeOutUp').one(animationEnd, function() {
        $(this).css('display', 'none');
    });
      var typed3 = new Typed('#typed',{
        strings: ["Cool right?!^800 I could also continue but unfortunately my time is running out",
                  "I'll leave you one last gift before turning off^1000","When the light goes out, and night falls, try to press the mouse button^800.^800.^800.^800 Ok? :)^1500",
                  "I hope to see you soon ;)^800"],
        startDelay: 2500,
        cursorChar: "|",
        typeSpeed: 30,
        onComplete: function () {
          $('.console').animate({
            boxShadow: "5px 5px 2px #050506"
          }, 3000);
          $('.main-container').animate({
             backgroundColor: "#111116",
             boxShadow: "inset 0 0 20px #050506"
           }, 3000,function() {
             $(".console").addClass('animated zoomOut').one(animationEnd, function() {
               $(this).css('display', 'none');
               $(".end").css('display', 'block');
               $(".end").css('animation-iteration-count', '3');
               $(".end").addClass('animated flash');
               $(".fireworks").css('display', 'block');
               fireworks();
             });
           });
        },
        onDestroy: function(self) {}
      });
    });
  }

  function fireworks(){
    window.human = false;
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    window.addEventListener('load', function() {
      fireworks.render.play();
      fireworks.setCanvasSize();
    }, false);
  }

  function bluePattern() {
    const wrapperEl = document.body;
    const numberOfEls = 280;
    const duration = 3000;
    const delay = duration / numberOfEls;
    const radius = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    const distance = radius / 4 <= 150 ? 150 : radius / 3;

    let tl = anime.timeline({
      duration: delay,
      complete: function() {}
    });

    function createEl(i) {
      let el = document.createElement('div');
      const hue = Math.round(360 / numberOfEls * i);
      const angle = i;
      el.classList.add('el');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
      tl.add({
        begin: function() {
          var randomDistance = anime.random(distance - 50, distance + 50);
          anime({
            targets: el,
            // backgroundColor: ['#fff', '#000'],
            translateX: [0, Math.sin(angle) * randomDistance],
            translateY: [0,Math.cos(angle) * randomDistance],
            scale: [
              {value: [0, anime.random(5, 10) * .1], easing: 'easeOutBack'},
              {value: 0, easing: 'easeInBack'},
            ],
            easing: 'easeInOutSine',
            direction: 'reverse',
            duration: duration
          });
        }
      });
      wrapperEl.appendChild(el);
    };

    for (let i = 0; i < numberOfEls; i++) createEl(i);
  }

});
