function burgerButton() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu-items');

  burger.addEventListener('click', function() {
    menu.classList.toggle('header__menu-items--active');
  });
}

let recentSwiper;
let reviewSwiper;

function initSwipers() {
  if (window.innerWidth <= 720) {
    if (!reviewSwiper) {
      reviewSwiper = new Swiper('.reviews-swiper', {
        pagination: {
          el: '.reviews-swiper .swiper-pagination',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
      });
    }
    if (!recentSwiper) {
      recentSwiper = new Swiper('.recent-swiper', {
        pagination: {
          el: '.recent-swiper .swiper-pagination',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        // breakpoints: {
        //   720: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        // }
      });
    }
  } else {
    if (reviewSwiper) {
      reviewSwiper.destroy();
      reviewSwiper = null;
    }
    if (recentSwiper) {
      recentSwiper.destroy();
      recentSwiper = null;
    }
  }
}

window.addEventListener('load', function() {
  burgerButton();
  initSwipers();
});

window.addEventListener('resize', initSwipers);



