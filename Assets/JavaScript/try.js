const swiper = new Swiper(".slide-content", {
  // Optional parameters
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
