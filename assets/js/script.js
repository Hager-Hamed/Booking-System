var swiper = new Swiper(".tours-card .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },

  },
});


$(function () {

  $(document).ready(function () {
    var swiper = new Swiper(".Partners .partnerSwiper", {
      slidesPerView: 6,
      spaceBetween: 20,
      autoplay: true,
      loop: true,
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 6,
          spaceBetween: 50,
        }
      }
    })
  })


})

/* ===============================  counterUp =============================== */

$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }

    });


});

/* ===============================  counterUp =============================== */

/* ===============================  accordion =============================== */

/*-----------  accordion ---------*/
// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');

//   items.forEach(item => item.setAttribute('aria-expanded', 'false'));

//   if (itemToggle === 'false') {
//     this.setAttribute('aria-expanded', 'true');
//   }
// }

// // إضافة الحدث للأزرار الفردية
// items.forEach(item => item.addEventListener('click', toggleAccordion));

// // زر فتح جميع العناصر
// document.getElementById('expand-all').addEventListener('click', function () {
//   const accordions = document.querySelectorAll('.accordion-collapse');
//   accordions.forEach(accordion => accordion.classList.add('show'));

//   const buttons = document.querySelectorAll('.accordion-button');
//   buttons.forEach(button => {
//     button.classList.remove('collapsed');
//     button.setAttribute('aria-expanded', 'true'); // تحديث aria-expanded
//   });
// });

// // زر إغلاق جميع العناصر
// document.getElementById('collapse-all').addEventListener('click', function () {
//   const accordions = document.querySelectorAll('.accordion-collapse');
//   accordions.forEach(accordion => accordion.classList.remove('show'));

//   const buttons = document.querySelectorAll('.accordion-button');
//   buttons.forEach(button => {
//     button.classList.add('collapsed');
//     button.setAttribute('aria-expanded', 'false'); // تحديث aria-expanded
//   });
// });






const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


document.getElementById('expand-all').addEventListener('click', function () {
  const accordions = document.querySelectorAll('.accordion-collapse');
  accordions.forEach(accordion => {
    accordion.classList.add('show'); 
  });

  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.classList.remove('collapsed');
  });
});

document.getElementById('collapse-all').addEventListener('click', function () {
  const accordions = document.querySelectorAll('.accordion-collapse');
  accordions.forEach(accordion => {
    accordion.classList.remove('show'); 
  });

  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.classList.add('collapsed'); 
  });
});


/* ===============================   accordion =============================== */


flatpickr("#date-picker", {
  dateFormat: "d-m-Y"  // Formats date as day-month-year
});



const $openitems = $("#openItinerary"),
  $accordion = $(".Itineraries .accordion-collapse"),
  $accordionBtn = $(".Itineraries .accordion-button");
$openitems.on("click", function () {
  $accordion.hasClass("show") ?
    ($accordionBtn.attr("aria-expanded", "false").addClass("collapsed"), $accordion.removeClass("show"), console.log($(".accordion-item")), $openitems.text("Open Itineries").removeClass("close-itinerary")) :
    ($accordionBtn.attr("aria-expanded", "true").removeClass("collapsed"), $accordion.addClass("show"), console.log($(".accordion-item")), $openitems.text("close  Itineries").addClass("close-itinerary"));
})







