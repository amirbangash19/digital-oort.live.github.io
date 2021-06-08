// slick slider
$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: "<i class='prev fas fa-caret-left'></i>",
    nextArrow: "<i class='next fas fa-caret-right'></i>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

// full page scroll
new fullScroll({
  mainElement: "main",
  displayDots: true,
  dotsPosition: "right",
  animateTime: 0.7,
  animateFunction: "ease",
});

// Hamburger Menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 
