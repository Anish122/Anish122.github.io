// JavaScript Document
$(document).ready(function(){
    $(".pull-me").click(function(){
        $(".panel").slideToggle(500);    
    });    
});

$(document).ready(function() {
   $('#menu ul a').mouseenter(function() {
       $(this).animate({
           height: '+=15px'
       });
		$(this).fadeTo(300,0.8);
   });
   $('#menu ul a').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
	   $(this).fadeTo(300,1);
   });
   
});

$(document).ready(function(){
		$( "#accord" ).accordion({collapsible:true,active:false
									
	});
		
		
});

