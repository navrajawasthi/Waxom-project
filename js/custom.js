//menu toggle
$('.menu-toggle').on('click', function (e) {
  $('body').toggleClass("active-responsive-menu");
});


// navigation submenu
 $(document).ready(function(){
        // Show hide popover
        $(".dropdown").click(function(){
            $(this).find(".dropdown-menu").slideToggle("fast");
        });
    });
    $(document).on("click", function(event){
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        }            
    });

    // Submenu onclick function
$('.feat-btn').click(function () {
  $(this).toggleClass("show");
});

// Slick Slider for banner
$('.hero-slider-wrapper').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: true,
  dots: true,
 });

 //slick slider multiple for creativeness
$(".hero-slider").slick({
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '260px',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        centerMode: true,
slidesToShow: 1,
        centerPadding: '160px',
      }
    },
    {
      breakpoint: 568,
      settings: {
        centerMode: true,
slidesToShow: 1,
        centerPadding: '60px',
      }
    }
  ]
});

//blog slider wrapper
$(".hero-slider-wrap").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


//magnific-popup

$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

$('.grid').imagesLoaded( function() { // it will load the image of isotope 
//isotope
var $grid = $('.grid');
$grid.isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
  }
});
$('.filter button').on('click', function () {
  var value = $(this).attr('data-name');
  $grid.isotope({
    filter: value
  });
});
});


//match height to equal all content height
$('.match-height').matchHeight({
  // byRow: false
});

//isotope filtering button active
$('.filter-active button').click(function () {
  $('.filter-active button').removeClass('active-filter');
  $(this).addClass('active-filter');
});


//Video play pause 
$('.video').parent().click(function () {
  if ($(this).children(".video").get(0).paused) {
    $(this).children(".video").get(0).play(); $(this).children(".video-content").fadeOut();
  } else {
    $(this).children(".video").get(0).pause();
    $(this).children(".video-content").fadeIn();
    
  }
});


//counter 
var counted = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


//sticky
$(document).on("scroll", function () {
  if ($(document).scrollTop()) {
    $('.header-wrapper').addClass('active_sticky');
  }
  else {
    $('.header-wrapper').removeClass('active_sticky');
  }
})


// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header-wrapper').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 0);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If scrolled down and past the navbar, add class .nav-up.
  if (st > lastScrollTop && st > 0) {
    // Scroll Down
    $('.header-wrapper').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.header-wrapper').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

//back-to-top
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $('.back-top-arrow').fadeIn();
    $(".back-top-arrow").css("opacity", "9999");
    $(".back-top-arrow").css("visibility", "visible");
  } else {
    $('.back-top-arrow').fadeOut();
  }
});






//spinner loader

$(window).on('load', function () {
  $(".preloader-wrapper").css("opacity", "0");
  $(".preloader-wrapper").css("transition", "0.5s ease");
  $(".preloader-wrapper").css("z-index", "-1");
  // $("body").css("overflow", "auto");
 // animation wow // after preloader wow.js will start
  // new WOW().init();

gsap.from('.banner-content', { scrollTrigger: '.banner-content', opacity: 0, y: "50px", duration: 1, ease: "power1.out", stagger: 1 })
  
});


//gsap animation
gsap.from('.service-image', { scrollTrigger: '.service-image', y: "100px", duration: 1, backgroundPosition: "200px 0", ease: "power1.out", stagger: 0.3 })
gsap.from('.content', { scrollTrigger: '.content', y: "100px", duration: 1, backgroundPosition: "200px 0", ease: "power1.out", stagger: 0.3 })
gsap.from('.creative-wrapper .heading', { scrollTrigger: '.creative-wrapper .heading', x: "100px", duration: 1, ease: "power2.out" })
gsap.from('.buyer-content', { scrollTrigger: '.buyer-content', opacity:0, x: "-100px", duration: 1, ease: "power1.out", stagger: 1 })
gsap.from('.project-heading', { scrollTrigger: '.project-heading', duration: 2, y: "100px", ease: "power1.out" })
gsap.from('.test', { scrollTrigger: '.test', opacity:0, y: "50px", duration: 1, ease: "power1.out", stagger: 0.3 })
gsap.from('.video-text', { scrollTrigger: '.video-text', duration: 2, y: "50px", ease: "power1.out" })
gsap.from('.device-image', { scrollTrigger: '.device-image', duration: 2, x: "-50px", ease: "power1.out" })
gsap.from('.device-content', { scrollTrigger: '.device-content', duration: 1, x: "50px", ease: "power1.out" })
gsap.from('.device-features', { scrollTrigger: '.device-features', duration: 1, x: "50px", ease: "power1.out" })
gsap.from('.blog-heading', { scrollTrigger: '.blog-heading', duration: 1, y: "50px", ease: "power1.out" })
gsap.from('.slide-gsap', { scrollTrigger: '.slide-gsap', y: "100px", duration: 1, backgroundPosition: "200px 0", ease: "power1.out", stagger: 0.3 })
gsap.from('.client-logo', { scrollTrigger: '.client-logo', opacity:0, y: "50px", duration: 1, ease: "power1.out", stagger: 0.3 })
gsap.from('.footer-section', { scrollTrigger: '.footer-section', duration: 1, y: "100px", ease: "power1.out", stagger: 0.3 })
gsap.from('.footer-section', { scrollTrigger: '.footer-section', duration: 1, x: "-50px", ease: "power1.out", stagger: 0.3  })
gsap.from('.copyright', { scrollTrigger: '.copyright', duration: 1, x: "-50px", ease: "power1.out"})
gsap.from('.powered-by', { scrollTrigger: '.powered-by', duration: 1, x: "50px", ease: "power1.out"})


