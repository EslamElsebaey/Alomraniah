
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

// hovering on products images

// $(".my-col a").mouseenter(function(){
//   $(this).css("color", "#1d9add");
//   $(this).prev().children().css("filter" , "brightness(0) saturate(100%) invert(56%) sepia(17%) saturate(2499%) hue-rotate(162deg) brightness(89%) contrast(95%)");
//    $(this).prev().children().children().css("transform" , "scale(1.2)");
// })
// $(".my-col a").mouseleave(function(){
//   $(this).css("color", "#fff");
//   $(this).prev().children().css("filter" , "none");
//   $(this).prev().children().children().css("transform" , "scale(1)");
// })

/************************************************************************ */


// open and close sideBar

$(".openBtn").click(function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "hidden") ;
})
$(".closeBtn").click(function(){
  $("nav").addClass("open-nav");
  $("body").css("overflow" , "visible") ;
  $(".search").removeClass("show-search");
  $(".searchBtn .svg-inline--fa").addClass("fa-magnifying-glass");
  $(".searchBtn .svg-inline--fa").removeClass("fa-square-xmark");
})

/************************************************************************ */

// show and hide search box

$(".searchBtn").click(function(){
  $(".search").toggleClass("show-search");
  if( $(".search").hasClass("show-search") == true){
    $(".searchBtn .svg-inline--fa").removeClass("fa-magnifying-glass");
    $(".searchBtn .svg-inline--fa").addClass("fa-square-xmark");
  }else{
    $(".searchBtn .svg-inline--fa").addClass("fa-magnifying-glass");
    $(".searchBtn .svg-inline--fa").removeClass("fa-square-xmark");
  }
  
})

/************************************************************************ */

// nested menus

if($(window).width() <= 768) {
  $("footer h4").click(function(){
    $(this).next().slideToggle(500);
    $(this).toggleClass("arrow-rotate");
  })
  
$(".li-drop").click(function (e) {
  e.preventDefault() ;
  $(".ul-drop").slideToggle(1000) ;
  $(this).children().toggleClass("icon-rotate");
  })
}



})
















  

