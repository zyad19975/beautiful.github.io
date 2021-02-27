var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length;


$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  pauseOnFocus : false,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

$('.slideshow-text').slick({
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

