"use strict"

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}
// scroll document false
setTimeout(fog_hidden, 5000);
function fog_hidden() {
  document.querySelector('.fog').style.zIndex = -1;
}
function is_touch_device() {
    return ('ontouchstart' in window);
  }
  
  // function bodyFixed() { //scroll - false
  //   // if(is_touch_device()) {
  //   //   document.body.classList.add('fixed')
  //   // } else {
  //   //   let x=window.scrollX;
  //   //   let y=window.scrollY;
  //   //   window.onscroll=function(){window.scrollTo(x, y);};
  //   // }
  //   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  //   document.body.style.paddingRight = lockPaddingValue
  //   document.body.classList.add('fixed')
  // }
  
  // function bodyNotFixed() { // scroll - true
  //   // if(is_touch_device()) {
  //   //   document.body.classList.remove('fixed')
  //   // } else {
  //   //   window.onscroll=function(){window.scrollTo()};
  
  //   // }
  //   document.body.style.paddingRight = '0px'
  //   document.body.classList.remove('fixed')
  // }

//disable scroll
let body = document.body
const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
let disableScroll = function () {
	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
  document.body.style.paddingRight = lockPaddingValue
  // document.body.classList.add('fixed')
}

let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
  document.body.style.paddingRight = '0px'
}

// $('#mi26').fancybox({
//   afterShow: function() {
//     body.classList.add('test')
//     console.log("test")
//   },
//   beforeClose: function() {
//     body.classList.remove('test')
//   }
// });
//header
window.onscroll = function() {headerFixed()};

let header = document.querySelector(".header-w");

// let sticky = header.offsetTop;

function headerFixed() {
  if (window.innerWidth <= 1123) {
    header.classList.add("fixed");
    document.querySelector('.wrapper').style.paddingTop = "50px"
  } else {
    header.classList.remove("fixed");
    document.querySelector('.wrapper').style.paddingTop = "0px"
  }
}
if (window.innerWidth <= 1123) {
  header.classList.add("fixed");
  document.querySelector('.wrapper').style.paddingTop = "50px"
} else {
  header.classList.remove("fixed");
  document.querySelector('.wrapper').style.paddingTop = "0px"
}



//Popup close 
document.addEventListener("click",
function(event) {
  event = event || window.event;
  let target = event.target
  if(target.classList.contains('popup')) {
    target.classList.remove('active')
    enableScroll()
    // bodyNotFixed()
  }
  if(target.classList.contains('completed__slide')) {
    target.closest(".popup").classList.remove('active')
    // bodyNotFixed()
    enableScroll()
  }
}
)

let popupClose = document.querySelectorAll('.popup-close')
for(let i=0 ; i < popupClose.length ; i++) {
    popupClose[i].addEventListener("click",
    function() {
        popupClose[i].closest('.popup').classList.remove('active')
        // bodyNotFixed()
        enableScroll()
    })
}
//открытие форм попап
// форма ОСТАВИТЬ ЗАЯВКУ
let btnApplication = document.querySelectorAll('.btn-application')
let formApplication = document.querySelector('.form-application')
let btns = document.querySelectorAll('.open-popup')
for(let i=0 ; i < btns.length ; i++) {
  btns[i].addEventListener("click",
  function() {
    let name =  btns[i].getAttribute('btn-name')
    if(name !== null) {
      // bodyFixed()
      disableScroll();
      openPopup(name)
    }
  })
}
function openPopup(nameForm) {
  let form = document.querySelector('[form-name="'+nameForm+'"]')
  form.classList.add('active')
}
let propelledBtn = document.querySelector('.propelled__btn')
let snowmobile = document.querySelector('.snowmobile')
propelledBtn.onclick = function() {
    snowmobile.classList.toggle('active')
}
// смена слова в кнопке в попапе
let popupBtn = document.querySelectorAll('.popup__btn')
function changePopupBtn(word) {
  for(let i=0 ; i < popupBtn.length ; i++) {
      popupBtn[i].innerHTML = word
  }
}

let flagsBtn = document.querySelectorAll('.flags__btn')
let flagsBtnHidden = document.querySelectorAll('.flags__btn_hidden')
for(let i=0 ; i < flagsBtn.length ; i++) {
  flagsBtn[i].addEventListener("mouseover",
  function() {
    flagsBtnChanger(i)
  })
}
function flagsBtnChanger(index) {
  changerActive(flagsBtn)
  changerActive(flagsBtnHidden)
  flagsBtn[index].classList.add('active')
  flagsBtnHidden[index].classList.add('active')
}
// let orderItem = document.querySelectorAll('.order__item')
// let orderItemName = document.querySelectorAll('.order__name')
// function changeBtnOrder(check) {
//   for(let i=0 ; i < orderItem.length ; i++) {
//       if(check) {
//         orderItem[i].setAttribute('btn-name', 'docs')
//       } else {
//         orderItem[i].removeAttribute('btn-name')
//       }
//   }
//   for(let i=0 ; i < orderItemName.length ; i++) {
//     if(check) {
//       orderItemName[i].removeAttribute('btn-name')
//     } else {
//       orderItemName[i].setAttribute('btn-name','docs')
//     }
// }
// }








//Menu mobile
let nav_icon = document.querySelectorAll('.nav-icon')
let headerMobile = document.querySelector('.header-m')
let logoHidden = document.querySelectorAll('.logo-hidden')
for(let i=0 ; i < nav_icon.length ; i++) {
    nav_icon[i].addEventListener("click",
    function() {
        headerMobile.classList.toggle('active')
        for(let i = 0; i < nav_icon.length;i++) {
            nav_icon[i].classList.toggle('open')
        }
        for(let i = 0; i < logoHidden.length;i++) {
          logoHidden[i].classList.toggle('hidden')
        }
    })
}
// document.querySelector('.header__menu').onclick = function() {
//   document.querySelector('.header__menu').classList.toggle('active')
//   headerMobile.classList.toggle('active')
//   for(let i = 0; i < nav_icon.length;i++) {
//     nav_icon[i].classList.toggle('open')
//   }
// }

// Size-control
let checker = true
window.addEventListener('resize', function(event){
    if(window.innerWidth > 1123) {
      document.querySelector('.header-m').classList.remove('active')
      for(let i = 0; i < nav_icon.length;i++) {
        nav_icon[i].classList.remove('open')
      }
    }
    // if(window.innerWidth > 539) {
    //   checker = true
    //   propelledBtn.innerHTML = 'Подробнее'
    //   changePopupBtn('Отправить')
    //   propelledBtn.removeAttribute('btn-name')
    // } else {
    //   checker = false
    //   propelledBtn.innerHTML = 'Заказать'
    //   changePopupBtn('Оставить заявку')
    //   propelledBtn.setAttribute('btn-name','psm')
    // }
    // changeBtnOrder(checker)
})
if(window.innerWidth > 539) {
  checker = true
} else {
  checker = false
}
// changeBtnOrder(checker)
if(window.innerWidth > 1123) {
  document.querySelector('.header-m').classList.remove('active')
  for(let i = 0; i < nav_icon.length;i++) {
    nav_icon[i].classList.remove('open')
  }
}
// if(window.innerWidth > 539) {
//   propelledBtn.innerHTML = 'Подробнее'
//   changePopupBtn('Отправить')
//   propelledBtn.removeAttribute('btn-name')

// } else {
//   propelledBtn.innerHTML = 'Заказать'
//   changePopupBtn('Оставить заявку')
//   propelledBtn.setAttribute('btn-name','psm')
// }

// swiper categories
const swiper_categories = new Swiper('.categories__swiper', {
    slidesPerView: 3,
    spaceBetween: 122,
    loop: true,
    navigation: {
        nextEl: '.categories__next',
        prevEl: '.categories__prev',
    },
    breakpoints: {
      0: {
        // spaceBetween: 8,
        // slidesPerView: 'auto',
        // loop: true,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      839: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1350: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
})
// swiper_categories.on('slideChange', function() {
//   if ( swiper_categories.activeIndex == 0 ) {
//     swiper_categories.slideTo(1)
//   }
// })
// swiper propelled
const swiper_propelled = new Swiper('.propelled__swiper', {
    slidesPerView: 5,
    spaceBetween: 45,
    loop: true,
    navigation: {
        nextEl: '.propelled__next',
        prevEl: '.propelled__prev',
    },
    breakpoints: {
      0: {
        // spaceBetween: 8,
        // slidesPerView: 'auto',
        // loop: true,
        // initialSlide: 1
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      839: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1291: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1750: {
        slidesPerView: 5,
        spaceBetween: 45,
      }
    }
})
// if(window.innerWidth <= 539) {
//   swiper_propelled.on('slideChange', function() {
//     if ( swiper_propelled.activeIndex == 0 ) {
//       swiper_propelled.slideTo(1)
//     }
//   })
// }


//scroll to block id
let scrollItem = document.querySelectorAll('.scroll-item')
for (let anchor of scrollItem) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href')
    console.log(blockID)
    let toBlock = document.getElementById(blockID)
    console.log(toBlock)
    $('body,html').animate({
      scrollTop: $(toBlock).offset().top 
    },1000);
  })
}
//header-touch-swipe

// Вешаем на прикосновение функцию handleTouchStart
document.querySelector('.header-m').addEventListener('touchstart', handleTouchStart, false);  
// А на движение пальцем по экрану - handleTouchMove      
document.querySelector('.header-m').addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    let icons = document.querySelectorAll('.nav-icon')
    let menuBtn = document.querySelectorAll('.header__menu')
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          for(let i=0 ; i < icons.length ; i++) {
            icons[i].classList.remove('open')
          }
          for(let i=0 ; i < menuBtn.length ; i++) {
            menuBtn[i].classList.remove('acitve')
          }
          for(let i = 0; i < logoHidden.length;i++) {
            logoHidden[i].classList.remove('hidden')
          }
          document.querySelector('.header-m').classList.remove('active')
        } else {
        }                       
    } else { 
        if ( yDiff > 0 ) {
        } else { 
        }                                                                 
    }
    xDown = null;
    yDown = null;
};
const formCallMe = document.querySelectorAll('.form')
for(let i=0 ; i < formCallMe.length ; i++) {
  formCallMe[i].addEventListener('submit', e => formSend(e,formCallMe[i]))
}

async function formSend(e,form) {
    e.preventDefault();
    let error = formValidate(form)
    let formNameData = form.getAttribute('form-name')
    let formData = new FormData(form)
    console.log(formNameData)
    if(error === 0 ) {
      form.classList.add('_sending');
        let response = await fetch('../sendmail.php', {
            method: 'POST',
            body: formData,
            test: 'test',
        });
        if(response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();
            form.classList.remove('_sending');
        } else {
            alert('Ошибка!')
            form.classList.remove('_sending');
        }
    } else {

    }
}

function formValidate(form) {
    let error = 0
    let formReq = form.querySelectorAll('.req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);
        if(input.classList.contains('form-mail')) {
            if(emailTest(input)) {
                formAddError(input)
                error++
            }
        }
        if(input.classList.contains('form-words')) {
            if(input.value == 0) {
                formAddError(input)
                error++
            }
        }
        if(input.classList.contains('form-phone')) {
            if(phoneTest(input)) {
                formAddError(input)
                error++
            }
        }
    }
    return error
}

function formAddError(input) {
    input.classList.add('_error');
    input.classList.add('_error')
}

function formRemoveError(input) {
    input.classList.remove('_error');
    input.classList.remove('_error')
}

function emailTest(input) {
    return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(input.value)
}

function phoneTest(input) {
    return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value)
}