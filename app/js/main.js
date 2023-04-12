function crossButton() {
  const cross = document.querySelector('.header__cross-nav');
  const menu = document.querySelector('.header__menu-items');

  cross.addEventListener('click', function() {
    menu.classList.toggle('header__menu-items--active');
  });
}

let divRecentWait = document.querySelector('.wait');
let swiper;

function addActiveClass() {
  if (window.innerWidth <= 720) {
    divRecentWait.classList.add('swiper');
    divRecentWait.classList.remove('wait');
    if (!swiper) {
      swiper = new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
      });
    }
  } else {
    divRecentWait.classList.remove('swiper');
    divRecentWait.classList.add('wait');
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
  }
}

window.addEventListener('load', function() {
  addActiveClass();
  crossButton();
});

window.addEventListener('resize', addActiveClass);
