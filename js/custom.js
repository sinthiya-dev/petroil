$(document).ready(function(){
  $('.slide_main').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function(){
  $(".switcher_icon").click(function(){
    $(".color_switcher").toggleClass('theme');
  });

  $(".yellow").click(function(){
    $(".main_css").attr("href", "css/yellow.css");
  });
  $(".blue").click(function(){
    $(".main_css").attr("href", "css/blue.css");
  });
  $(".green").click(function(){
    $(".main_css").attr("href", "css/green.css");
  });
  $(".red").click(function(){
    $(".main_css").attr("href", "css/style.css");
  });
});

$(document).ready(function(){
  $('.parallax-window').parallax({imageSrc: 'images/banner.jpg'});
});