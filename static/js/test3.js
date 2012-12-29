/*$("#target").click(function() {
  alert("Handler for .click() called.");
});*/

var foo = "foo";
$(function(){
      // since foo is global, i can alert it here
      alert(foo);
      // this is a local variable
      var bar = "bar";
      $('a').click(function(){
            // this function has access to both the local
            // scope it was defined in and everything
            // that local scope had access to
            alert(foo+bar);
            return false;
      });
});



  $('.goodbye').hide();
  
  $("#btn1").click(function(){
	  $($('.goodbye')[0]).clone().show().appendTo('.hello');
  });


/*function myFunction()
{
	$('div.container').each(function (index) {
	    var divNumber = index;
	    alert("var");
	});
	alert("Hello! I am an alert box!");
}
$(document).ready(function(){
	  $('.goodbye').hide();
	  $("#btn1").click(function(){
		  $('.hello').clone().appendTo('.goodbye');
	  });
	  $("#btn2").click(function(){
		  $('.goodbye').hide();
	  });
	});*/

