$(document).ready(function(){

  function hidePreloader(){
    var preloader= $('.spinner-wrapper');
    preloader.fadeOut(400)
  }
  hidePreloader();

  //orange and dark icons pup-up
  function iconsPupUp() {

    var distanceFromTop= $(this).scrollTop();
    var orangeSection= $('.orange-section');
    var orangeIconsPopUpPoint= orangeSection.offset().top + orangeSection[0].clientHeight/3;

    var projectsSection= $('.projects-section');
    var projectsSectionsOffset= projectsSection.offset().top;
    var projectsSectionHeight= projectsSection[0].clientHeight;
    var darkIconsPopUpPoint= projectsSectionsOffset + projectsSectionHeight - 300;

    if(distanceFromTop>orangeIconsPopUpPoint & distanceFromTop < projectsSectionsOffset-250){
      $('.orange-icons').addClass('pop-up');
    }
    if(distanceFromTop>darkIconsPopUpPoint){
      $('.dark-icons').addClass('pop-up');
    }
  }

  iconsPupUp();

  //dark topnav background

  $(window).scroll(function(){

    var distanceFromTop= $(this).scrollTop();
    var navbar= $('.navbar');

    if(distanceFromTop>1){
      navbar.addClass('nav-bg');
    }else{
      navbar.removeClass('nav-bg');
    }

    iconsPupUp();
  })

  //top-nav closes when click outside of it

  $('body').click(function(event){

    var navbar= $('.navbar-collapse');
    var eventTarget= $(event.target);

    if(navbar.hasClass('show') && !eventTarget.hasClass('navbar-toggler-icon')){
      $('.navbar-toggler').addClass('collapsed');
      $('.navbar-collapse').removeClass('show');
    }
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

function createSlides() {
  var total= 6;
  var i=1;

  for (i; i<=total; i++){
    var slidersWrapper= $('.sliders-wrapper')[0];

    var mySlides= document.createElement('div');
    mySlides.classList.add("mySlides");
    slidersWrapper.appendChild(mySlides);

    var imgTag= document.createElement('img');
    imgTag.src= "img/portfolio/thumbnails/" + i + ".jpg";
    imgTag.classList.add('img-fluid');
    mySlides.appendChild(imgTag);

    var numbersDiv= document.createElement('div');
    numbersDiv.classList.add('numbertext');
    mySlides.appendChild(numbersDiv);

    numbersDiv.innerHTML = i + " of " + total;
  }
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
  $('body').addClass('stop-scroll');
  createSlides()
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
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (singleSlide of Array.from(slides)) {
    singleSlide.style.display = "none";
  }

  if(slides[slideIndex-1]){
    slides[slideIndex-1].style.display = "block";
  }

  //close modal when click outside the img
  $('#myModal').click(function(event) {
    var target= $(event.target);
    if(!target.hasClass('img-fluid') && !target.hasClass('arrow')){
      closeModal()
    };
  });
};
