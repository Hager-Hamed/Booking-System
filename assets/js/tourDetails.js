// image-slider

class Slider {
    constructor(slider) {
      this.slider = slider;
      this.display = slider.querySelector(".image-display");
      this.navButtons = Array.from(slider.querySelectorAll(".nav-button"));
      this.prevButton = slider.querySelector(".prev-button");
      this.nextButton = slider.querySelector(".next-button");
      this.sliderNavigation = slider.querySelector(".slider-navigation");
      this.currentSlideIndex = 0;
      this.preloadedImages = {};

      this.initialize();
    }

    initialize() {
      this.setupSlider();
      this.preloadImages();
      this.eventListeners();
    }

    setupSlider() {
      this.showSlide(this.currentSlideIndex);
    }

    showSlide(index) {
      this.currentSlideIndex = index;
      const navButtonImg = this.navButtons[
        this.currentSlideIndex
      ].querySelector("img");
      if (navButtonImg) {
        const imgClone = navButtonImg.cloneNode();
        this.display.replaceChildren(imgClone);
      }
      this.updateNavButtons();
    }

    updateNavButtons() {
      this.navButtons.forEach((button, buttonIndex) => {
        const isSelected = buttonIndex === this.currentSlideIndex;
        button.setAttribute("aria-selected", isSelected);
        if (isSelected) button.focus();
      });
    }

    preloadImages() {
      this.navButtons.forEach((button) => {
        const imgElement = button.querySelector("img");
        if (imgElement) {
          const imgSrc = imgElement.src;
          if (!this.preloadedImages[imgSrc]) {
            this.preloadedImages[imgSrc] = new Image();
            this.preloadedImages[imgSrc].src = imgSrc;
          }
        }
      });
    }

    eventListeners() {
      document.addEventListener("keydown", (event) => {
        this.handleAction(event.key);
      });

      this.sliderNavigation.addEventListener("click", (event) => {
        const targetButton = event.target.closest(".nav-button");
        const index = targetButton
          ? this.navButtons.indexOf(targetButton)
          : -1;
        if (index !== -1) {
          this.showSlide(index);
        }
      });

      this.prevButton.addEventListener("click", () =>
        this.handleAction("prev")
      );
      this.nextButton.addEventListener("click", () =>
        this.handleAction("next")
      );
    }

    handleAction(action) {
      if (action === "Home") {
        this.currentSlideIndex = 0;
      } else if (action === "End") {
        this.currentSlideIndex = this.navButtons.length - 1;
      } else if (action === "ArrowRight" || action === "next") {
        this.currentSlideIndex =
          (this.currentSlideIndex + 1) % this.navButtons.length;
      } else if (action === "ArrowLeft" || action === "prev") {
        this.currentSlideIndex =
          (this.currentSlideIndex - 1 + this.navButtons.length) %
          this.navButtons.length;
      }

      this.showSlide(this.currentSlideIndex);
    }
  }

  const ImageSlider = new Slider(document.querySelector(".image-slider"));



// openItinerary 
    const $openitems = $("#openItinerary"),
        $accordion = $(".Itineraries .accordion-collapse"),
        $accordionBtn = $(".Itineraries .accordion-button");
        $openitems.on("click", function () {
        $accordion.hasClass("show") ?
        ($accordionBtn.attr("aria-expanded", "false").addClass("collapsed"),
        $accordion.removeClass("show"), console.log($(".accordion-two ")),
        $openitems.text("Open Itineries").removeClass("close-itinerary")) :
        ($accordionBtn.attr("aria-expanded", "true").removeClass("collapsed"),
        $accordion.addClass("show"), console.log($(".accordion-two ")),
        $openitems.text("close  Itineries").addClass("close-itinerary"));
    })


    document.addEventListener('DOMContentLoaded', function () {
        flatpickr("#date-picker", {
          dateFormat: "d-m-Y", // Matches the placeholder format
          defaultDate: "today", // Optional: Sets the default date to today
          disableMobile: true, // Optional: Ensures the full picker is displayed on mobile devices
        });
      });


      


      
      
/* ===============================  accordion =============================== */

/*-----------  accordion ---------*/
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


// زر فتح جميع العناصر
document.getElementById('expand-all').addEventListener('click', function () {
  const accordions = document.querySelectorAll('.accordion-collapse');
  accordions.forEach(accordion => {
    accordion.classList.add('show'); // إضافة كلاس "show" لإظهار المحتوى
  });

  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.classList.remove('collapsed'); // إزالة كلاس "collapsed" لتغيير حالة الزر
  });
});

// زر إغلاق جميع العناصر
document.getElementById('collapse-all').addEventListener('click', function () {
  const accordions = document.querySelectorAll('.accordion-collapse');
  accordions.forEach(accordion => {
    accordion.classList.remove('show'); // إزالة كلاس "show" لإخفاء المحتوى
  });

  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.classList.add('collapsed'); // إضافة كلاس "collapsed" لتغيير حالة الزر
  });
});


/* ===============================   accordion =============================== */