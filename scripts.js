$(document).ready(function(){
  $(window).scroll(function(){
    var distanceFromTop= $(this).scrollTop();
    var orangeSection= $('.orange-section')[0];
    var iconsFadeInPoint= orangeSection.offsetHeight + orangeSection.clientHeight;
    if(distanceFromTop>iconsFadeInPoint){
      $('.fa').addClass('pop-up');
    }
  })
})
