
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "#0d0221");
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})