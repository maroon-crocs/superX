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

let rackImages = document.getElementById("rackImages");

let floorSubCategory = ` <div class="sub-categories-floor" id="subCategories">
<button
  class="subcategory-btn"
  onclick="filterBySubcategory('Channel')"
>
  Floor Stands
</button>
<button
  class="subcategory-btn"
  onclick="filterBySubcategory('Channel')"
>
  Counter
</button>
</div>`;

let channelWallRacks = [
  // {
  //   url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Channel hangril bracket-min.jpg",
  //   key: "channel",
  // },
  {
    url:"D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Channel hangril bracket-min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Channel waterfall-min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Cross bar hanging -min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Double slot channel shelf-min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Hangril channel system-min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/MS double slot channel-min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Pin bar-min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Single slot channel shelf -min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/SS double slot channel -min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/1st CHANNEL/Step arm-min.jpg",
    key: "channel",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid .jpg",
    key: "grid",
  },

  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid basket.jpg",
    key: "grid",
  },

  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid direct hangril.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid frame hook.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid glass holder.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid hanging bracket.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid hangril bracket.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid hook.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid J5 hook.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid shelf bracket 2png.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid shelf bracket.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid shoe holder.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid t-leg stand.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid wall hook.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid waterfall.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/2nd GRID/Grid with all accessories.jpg",
    key: "grid",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall  heavy shoe tray.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall basket .jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall bat holder.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall boards.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall cap holder.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall direct hangril .jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall football holder.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall glass holder.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall grid shoe tray.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall hangril bracket.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall hook.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall J5 hook.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall oval shoe tray.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall shelf bracket.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall waterfall .jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall white board.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/3rd SLATWALL/Slatwall with full accessories.jpg",
    key: "slatwall",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/D pipe with light shelfs.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/Double H pillar.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/Elemento SS pillar.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/Golden plating system.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/Golden post.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/Grid pillar with SS pipe.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/Grid pillar.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/Light option for shelf.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/New pillar.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/Single H pillar.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/SQ post back bracket.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/SQ post front bracket.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/SQ post middle bracket.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/SQ post SD bracket.jpg",
    key: "pillar",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/WALL RACKS/4th PILLARS/SQ post shelf plus hanging.jpg",
    key: "pillar",
  },
];

let floorRacks = [
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Belt stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Brand stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Broom stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Cloth hanging stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Dump basket.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Fourway stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Ring hanging stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/S stand for cloths.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Salebin.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Slotted angle rack .jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Stand for outside of shop.jpg",
    key: "floor-stand",
  },

  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Vegetable stand.jpg",
    key: "floor-stand",
  },

  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/All in one counter frame.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/All in one counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Both side shelf counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Cash counter top frame.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Cash counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Complete Metal Counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/H.I.T counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Hanging counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Medical counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Top heavy frame cash counter.jpg",
    key: "counter",
  },
];

// Electronic Racks
let electronicRacks = [
  {
    url: "D:/SuperX Shopfits/superX/images/superx category/electornic disply racs/AC display racks/AC Display Rack.png",
    key: "AC-display",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Brand stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Broom stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Cloth hanging stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Dump basket.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Fourway stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Ring hanging stand.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/S stand for cloths.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Salebin.jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Slotted angle rack .jpg",
    key: "floor-stand",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Stand for outside of shop.jpg",
    key: "floor-stand",
  },

  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/1st Floor Stand/Vegetable stand.jpg",
    key: "floor-stand",
  },

  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/All in one counter frame.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/All in one counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Both side shelf counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Cash counter top frame.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Cash counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Complete Metal Counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/H.I.T counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Hanging counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Medical counter.jpg",
    key: "counter",
  },
  {
    url: "D:/SuperX Shopfits/superX/images/SuperX main images/FLOOR RACKS/2nd Counters/Top heavy frame cash counter.jpg",
    key: "counter",
  },
];

function extractLastName(url) {
  // Split the URL by '/'
  const parts = url.split("/");
  // Get the last part (last name) without the file extension and '-min'
  let fileName = parts[parts.length - 1].split(".")[0];
  // Remove '-min' from the fileName
  fileName = fileName.replace("-Min", "");
  return fileName;
}

function capitalizeString(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

document.getElementById("vid").play();

const wallArray = [
  // { label: "Show All", key: "all" },
  { label: "Channel", key: "channel" },
  { label: "Grid", key: "grid" },
  { label: "Slatwall", key: "slatwall" },
  { label: "Pillar", key: "pillar" },
];

let wallSubCategoryBtn = wallArray?.map(
  (el) =>
    `<button class="btn" onclick="control('${el?.key}')"  id=${el?.key}>${el?.label}</button>`
);

function control(id) {
  if (id == "all") {
    $("#parent > div").fadeIn(450);
  } else {
    var $el = $("." + id).fadeIn(450);
    $("#parent > div").not($el).hide();
  }
  $(this).removeClass("active");
  $(this).addClass("active");
}

function control2(id) {
  if (id == "all") {
    $("#parent > div").fadeIn(450);
  } else {
    var $el = $("." + id).fadeIn(450);
    $("#parent > div").not($el).hide();
  }
  $(this).removeClass("active");
  $(this).addClass("active");
}

let wallSubCategoryImg = channelWallRacks?.map(
  (image, i) =>
    `<div class="${image?.key}">
  <a href="${image?.url}" data-lightbox="img-1">
  <img class="category-image  ${image?.key}" src="${
      image?.url
    }" alt="Wall Rack">
    </a>
  <p class="${image?.key}">${extractLastName(
      capitalizeString(image?.url)
    )}</p></div>`
);

function showWallRacks() {
  $(".sub-categories-wall").html(wallSubCategoryBtn);
  $("#parent").html(wallSubCategoryImg);
  control("channel");
  scrollToSection();
}

const floorArray = [
  // { label: "Show All", key: "all" },
  { label: "Floor Stand", key: "floor-stand" },
  { label: "Counter", key: "counter" },
];

let floorSubCategoryBtn = floorArray?.map(
  (el) =>
    `<button class="btn" onclick="control2('${el?.key}')" id=${el?.key}>${el?.label}</button>`
);

let floorSubCategoryImg = floorRacks?.map(
  (image, i) =>
    `<div class="${image?.key}">
  <a href="${image?.url}" data-lightbox="img-1">
  <img class="category-image  ${image?.key}" src="${
      image?.url
    }" alt="Wall Rack"></a>
  <p class="${image?.key}">${extractLastName(
      capitalizeString(image?.url)
    )}</p></div>`
);

function showFloorRacks() {
  $(".sub-categories-wall").html(floorSubCategoryBtn);
  $("#parent").html(floorSubCategoryImg);
  control2("floor-stand");
  scrollToSection();
}

// Electronic Display Racks

const electronicArray = [
  // { label: "Show All", key: "all" },
  { label: "AC Display Racks", key: "AC-display" },
  { label: "Electronic Display Racks", key: "electronic-display" },
  { label: "TV Display Racks", key: "TV-display" },
];

let electronicSubCategoryBtn = electronicArray?.map(
  (el) =>
    `<button class="btn" onclick="control2('${el?.key}')" id=${el?.key}>${el?.label}</button>`
);

let electronicSubCategoryImg = electronicRacks?.map(
  (image, i) =>
    `<div class="${image?.key}">
  <a href="${image?.url}" data-lightbox="img-1">
  <img class="category-image  ${image?.key}" src="${
      image?.url
    }" alt="Wall Rack"></a>
  <p class="${image?.key}">${extractLastName(
      capitalizeString(image?.url)
    )}</p></div>`
);

function showElectronicRacks() {
  $(".sub-categories-wall").html(electronicSubCategoryBtn);
  $("#parent").html(electronicSubCategoryImg);
  control2("floor-stand");
  scrollToSection();
}

function scrollToSection() {
  const section = document.getElementById('sub-categories-wrapper');
  const yOffset = -200; // Adjust this value to set the desired offset from the top of the screen
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
  window.scrollTo({ top: y, behavior: 'smooth' });
}


showWallRacks();

$(document).ready(function () {
  // Normal -> Add navbar-dark
  // Scroll > 100 -> Add navbar-light & bg-light
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      console.log("I am ");
      $(".navbar-wrapper").removeClass("navbar-dark");
      $(".navbar-wrapper").addClass("navbar-dark");
      $(".navbar-wrapper").addClass("navbar-dark");
    } else {
      $(".navbar-wrapper").addClass("navbar-dark");
      $(".navbar-wrapper").removeClass("navbar-dark");
      $(".navbar-wrapper").removeClass("navbar-dark");
    }
  });
});
