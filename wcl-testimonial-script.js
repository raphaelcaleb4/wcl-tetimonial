const swiper = new Swiper('.swiper.wcl-test', {
  // Optional parameters
  loop: true,
  effect: "cards",
  grabCursor: true,
  slidesPerView: 4,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

console.log("txt");
