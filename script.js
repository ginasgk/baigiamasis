var mySwiper1 = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 100000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1000: {
        slidesPerView: 3
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
