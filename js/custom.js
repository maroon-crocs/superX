// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function toggleNav() {
  document.getElementById("myNav").classList.toggle("menu_width");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

/** google_map js **/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "in",
  separateDialCode: true,
  preferredCountries: ["in"],
  utilsScript: "js/intlTelInput-utils.min.js",
});

function process(event) {
  event.preventDefault();

  var name = document.querySelector('input[name="name"]').value;
  var phone = phoneInput.getNumber();
  var email = document.querySelector('input[name="email"]').value;

  $.ajax({
    method: "POST",
    url: "https://formsubmit.co/ajax/superxshopfits@gmail.com",
    dataType: "json",
    accepts: "application/json",
    data: {
      name: name,
      phone: phone,
      email: email,
    },
    success: (data) => {
      $(".alert-success").addClass("show");
      $(".alert-success").toggleClass("d-none");
    },
    error: (err) => {
      $(".alert-danger").addClass("show");
      $(".alert-danger").toggleClass("d-none");
    },
  });
}

$(".gallery-img").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: false,
  prevArrow: false,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".gallery-img-1").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: false,
  prevArrow: false,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

document.getElementById("vid").play();
