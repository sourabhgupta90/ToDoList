$("#add-new").click(function(){
	
	$($(".span3.employee-list")[0]).clone().insertAfter($(".span3.employee-list")[3]);


});

/*
$(document).ready(function(){
	  $('.goodbye').hide();
	  
	  $("#btn1").click(function(){
		  $($('.goodbye')[0]).clone().show().appendTo('.hello');
	  });
	  
	});

*/
