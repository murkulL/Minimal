window.addEventListener('load', addActiveClass);
window.addEventListener('resize', addActiveClass);

const divRecentWait = document.querySelector('.wait');

const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

function addActiveClass() {
    if (window.innerWidth <= 720) {
        divRecentWait.classList.remove("wait");
        divRecentWait.classList.add('swiper swiper-initialized swiper-horizontal swiper-backface-hidden');
    } else {
        divRecentWait.classList.remove("swiper swiper-initialized swiper-horizontal swiper-backface-hidden");
        divRecentWait.classList.add('wait');
    }
}

// window.addEventListener('load', addActiveClass);
// window.addEventListener('resize', addActiveClass);

// const swiperElement = document.querySelector('.swiper');

// const swiper = new Swiper('.swiper', {
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   loop: true,
// });

// function addActiveClass() {
//   const divRecentWait = document.querySelector('.wait');
//   if (window.innerWidth >= 720) {
//     divRecentWait.classList.remove("swiper");
//     swiperElement.classList.add('wait');
//     swiper.params.loop = false;
//     swiper.destroy();
//     swiper.init();
//   } else {
//     divRecentWait.classList.remove("wait");
//     swiperElement.classList.add('swiper');
//     swiper.params.loop = true;
//     swiper.destroy();
//     swiper.init();
//   }
// }


