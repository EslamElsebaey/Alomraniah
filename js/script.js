
$(document).ready(function(){

  // preloader

setTimeout(()=>{
  $("#preloader img").css("opacity" , "0")
} , 700)
setTimeout(() => {
  $("#preloader").css({
    opacity : "0" , 
    visibility : "hidden" ,
  })
  $("body").css("overflow" , "visible");
}, 1500);

/************************************************************************ */

//  wow animation
new WOW().init();

/************************************************************************ */

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, '1000');
}) 

/************************************************************************ */

// main swiper

const mainSwiper = new Swiper('.mainBanner .mainSwiper', {
  loop: true,
  draggable: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

/************************************************************************ */



/************************************************************************ */


// open and close sideBar

$(".openNav-btn").click(function(){
  $("nav").removeClass("open-nav");
  $("body").addClass("overflow-hidden") ;
})
$(".closeNav-btn").click(function(){
  $("nav").addClass("open-nav");
  $("body").removeClass("overflow-hidden") ;
})

/************************************************************************ */

// show and hide search box

$(".openSearch-btn").click(function(){
  $(".search-holder-parent").fadeToggle(200);
  $("body").addClass("overflow-hidden") ;
  $(".search-holder-input").addClass("open-search");
})
$(".closeSearh-btn").click(function(){
    $(".search-holder-input").removeClass("open-search");
  setTimeout(() => {
    $(".search-holder-parent").fadeToggle(300);
  }, 200);
  $("body").removeClass("overflow-hidden") ;
 
})


/************************************************************************ */

// nested menus

if($(window).width() <= 768) {
  $("footer h4").click(function(){
    $(this).next().slideToggle(300);
    $(this).toggleClass("arrow-rotate");
  })
  
$(".li-drop").click(function (e) {
  e.preventDefault() ;
  $(".ul-drop").slideToggle(300) ;
  $(this).children().toggleClass("icon-rotate");
  })
}



})
















  

