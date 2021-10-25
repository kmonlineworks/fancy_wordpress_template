$(document).ready(function(){

	$('.toggle').click(function(){
		$('.nav').toggleClass('display');
	});

	$('.menu-toggle').click(function(){
		$('.submenu').toggle();
	});
});