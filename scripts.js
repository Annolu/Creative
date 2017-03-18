$(document).ready(function(){

  //orange and dark icons pup-up
  function iconsPupUp() {

    var distanceFromTop= $(this).scrollTop();
    var orangeSection= $('.orange-section');
    var darkSection= $('.dark-section');
    var whiteSections= $('.white-sections');

    var whiteSectionsOffset= whiteSections.offset().top;

    var orangeIconsPopUpPoint= orangeSection.offset().top + orangeSection[0].clientHeight/3;
    var darkIconsPopUpPoint= darkSection.offset().top;

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
  })

  //smooth scroll to internal anchor link

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 100
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	})
})
