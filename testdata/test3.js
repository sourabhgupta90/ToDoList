/*$(document).ready(function(){
  $('.goodbye').hide();
  
  $("#btn1").click(function(){
	  $($('.goodbye')[0]).clone().show().appendTo('.hello');
  });
  
});

*/
	
function myFunction()
{
	$('div.container').each(function (index) {
	    var divNumber = index;
	    alert("var");
	});
	alert("Hello! I am an alert box!");
}