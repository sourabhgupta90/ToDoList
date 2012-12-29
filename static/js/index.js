$("#add-new").click(function(){

$($(".span3.employee-list")[0]).clone().insertBefore($(".span3.employee-list")[3]);


});

var ids = $("#container").children().map(function(n, i) {
	  return n.id;
	});



function myFunction(el) {
	var x = el.value;
	var y = document.createElement("li");
	y.innerHTML = x;
	$(el).parent().append(y);

	}



/*
$(document).ready(function(){
$('.goodbye').hide();
$("#btn1").click(function(){
$($('.goodbye')[0]).clone().show().appendTo('.hello');
});
});

*/