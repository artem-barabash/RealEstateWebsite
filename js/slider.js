$(document).ready(function() {
			$('.slider_block').slick({
	        	autoplay:true,
      			autoplaySpeed:2000,
      			dots: true,
      			arrows: false
	      });

});
$(document).ready(function(){
      $('.footer-slider').slick({
      	autoplay:true,
      	autoplaySpeed:2000,
      	prevArrow: '<button class="prev-btn"></button>',
    	nextArrow: '<button class="next-btn"></button>'
      });
});