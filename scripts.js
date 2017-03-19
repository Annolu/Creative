$(document).ready(function(){

  //orange and dark icons pup-up
  function iconsPupUp() {

    var distanceFromTop= $(this).scrollTop();
    var orangeSection= $('.orange-section');
    var darkSection= $('.dark-section');
    var whiteSections= $('.white-sections');

    var whiteSectionsOffset= whiteSections.offset().top;

    var orangeIconsPopUpPoint= orangeSection.offset().top + orangeSection[0].clientHeight/3;
    var darkIconsPopUpPoint= darkSection.offset().top -100;

    if(distanceFromTop>orangeIconsPopUpPoint & distanceFromTop < whiteSectionsOffset+150){
      $('.orange-icons').addClass('pop-up');
    }
    if(distanceFromTop>darkIconsPopUpPoint){
      $('.dark-icons').addClass('pop-up');
    }
  }

  iconsPupUp();

  $(window).scroll(function(){

    let distanceFromTop= $(this).scrollTop();

    //dark topnav background
    var navbar= $('.navbar');

    if(distanceFromTop>1){
      navbar.addClass('nav-bg');
    }else{
      navbar.removeClass('nav-bg');
    }

    iconsPupUp();
    /*
    var parallax= $('.parallax');

    if(distanceFromTop>1){
      parallax.css("transform", "perspective(50px) translate3d(1px,1px,1px)");
    }else{
      parallax.css("transform", "perspective(0px) translate3d(0px,0px,0px)");
    }*/
  })

  //smooth scroll to internal anchor link

  $('a[href*="#"]:not([href="#"])').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 100
    }, 900, 'swing');
	})


})
//Lightbox

function openModal() {
  document.getElementById('myModal').style.display = "block";
  $('body').addClass('stop-scroll');
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  $('body').removeClass('stop-scroll');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
