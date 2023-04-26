function burgerButton() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu-items');
  const link = document.querySelectorAll('.header__menu-link');

  burger.addEventListener('click', function() {
    menu.classList.toggle('header__menu-items--active');
    burger.classList.toggle('burger--active');
  });

  link.forEach(function(item){
    item.addEventListener('click', function(){
      if(menu){
        menu.classList.remove('header__menu-items--active');
        burger.classList.remove('burger--active');
      }
    })
  })

}

let recentSwiper;
let reviewSwiper;

function initSwipers() {
  if (window.innerWidth <= 820) {
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

function activeCards() {
  const textOnCard = document.querySelectorAll('.recent__texton-img'); 
  const imgOnCard = document.querySelectorAll('.recent__image');

  imgOnCard.forEach(function(img, index) {
    img.addEventListener('mouseenter', function() {
      textOnCard[index].classList.add('recent__texton-img--active'); 
    });

    img.addEventListener('mouseleave', function() {
      textOnCard[index].classList.remove('recent__texton-img--active');
    });
  });
}
function activeOurteam(){
  const ourTeamItem = document.querySelectorAll('.ourteam__item');
  const imgOurTeamItem  = document.querySelectorAll('.ourteam__image');

  ourTeamItem.forEach(function(item,index){
    item.addEventListener('mouseenter', function(){
      imgOurTeamItem[index].classList.add('ourteam__image--active');
    })
    item.addEventListener('mouseleave', function(){
    imgOurTeamItem[index].classList.remove('ourteam__image--active');
    })
  })

}
window.addEventListener('load', function() {
  activeOurteam()
  activeCards();
  burgerButton();
  initSwipers();

});
window.addEventListener('resize', initSwipers);

const anchors = document.querySelectorAll('a[href*="#"]')
    
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }