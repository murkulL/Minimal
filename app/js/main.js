function crossButton() {
  const cross = document.querySelector('.header__cross-nav');
  const menu = document.querySelector('.header__menu-items');

  cross.addEventListener('click', function() {
    menu.classList.toggle('header__menu-items--active');
  });
}

let recentSwiper;
let reviewSwiper;

function initSwipers() {
  if (window.innerWidth <= 720) {
    // инициализация swiper для отзывов
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
    // инициализация swiper для недавних продуктов
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
      });
    }
  } else {
    // уничтожение swiper при ширине экрана более 720px
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
  crossButton();
  initSwipers();
});

window.addEventListener('resize', initSwipers);


// function crossButton() {
//   const cross = document.querySelector('.header__cross-nav');
//   const menu = document.querySelector('.header__menu-items');

//   cross.addEventListener('click', function() {
//     menu.classList.toggle('header__menu-items--active');
//   });
// }
// const pagination = document.querySelector('.swiper-pagination');
// const recent = document.querySelector('.wait-slider-recent');
// const reviews = document.querySelector('.wait-slider-reviews');
// let swiper;
// let swiper2;

// function addActiveClass() {
//   if (window.innerWidth <= 720) {
  

//     reviews.classList.remove('wait-slider-reviews');
//       reviews.classList.add('swiper');
//     recent.classList.remove('wait-slider-recent');
//     if (!swiper && swiper2) {
//       swiper = new Swiper('.swiper', {
//         pagination: {
//           el: '.swiper-pagination',
//         },
//         autoplay: {
//           delay: 3000,
//           disableOnInteraction: true,
//         },
//         loop: true,
//       });
//     }
//   } else {
//     reviews.classList.remove('swiper');
//     reviews.classList.add('wait-slider-reviews');
//     recent.classList.add('wait-slider-recent');
//     if (swiper) {
//       swiper.destroy();
//       swiper = null;
//     }
//   }
// }

// window.addEventListener('load', function() {
//   addActiveClass();
//   crossButton();
// });

// window.addEventListener('resize', addActiveClass);
