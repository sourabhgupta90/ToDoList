$('.new-employee-list').hide();
$("#add-new").click(function(){

$($(".new-employee-list")[0]).clone().show().insertBefore($(".span3.employee-list")[3]);


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