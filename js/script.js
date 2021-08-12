// preloader
$(window).load(function() {
	$("#loading").delay(1000).fadeOut(500);
	$("#loading-center").click(function() {
	$("#loading").fadeOut(500);
	})
})
// type.js
var typed = new Typed('.type_animation', {
    strings: ['Saif', 'A Designer', 'A Freelancer'],
    smartBackspace: true ,
    typeSpeed: 100,
    backSpeed: 100, 
    loop: true
  });

  var typed = new Typed('.banner_animation', {
    strings: ['Saiful Islam', 'A Designer', 'A Freelancer'],
    smartBackspace: true ,
    typeSpeed: 100,
    backSpeed: 100, 
    loop: true
  });

// venu box
$(function(){
    $('.venobox').venobox(); 

})
$(function(){
    // counter
    $('.count').counterUp({
      delay: 10,
      time: 2000
  });
})



$(document).ready(function(){
  // progress bar
  $(".progress-bar").ProgressBar();
});

