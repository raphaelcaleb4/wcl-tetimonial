const swiper = new Swiper('.swiper.wcl-test', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  effect: "cards",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

alert("txt");
console.log("txt");
