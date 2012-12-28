$(document).ready(function(){
  $('.goodbye').hide();
  
  $("#btn1").click(function(){
	  $($('.goodbye')[0]).clone().show().appendTo('.hello');
  });
  
});

