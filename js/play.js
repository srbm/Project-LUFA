
//Remove titles, leave list of options, then in JS hide lists and append button title on top.
	//Hide ul links
$(".links").hide();
	
//reset all to button covers

  $('html').click(function () {
	$(".links").hide();
	$("button").show();
});


//Capture click event
$("button.menu").click(function (event) {
	event.stopPropagation();
	//Reveal link options
	$(".links").hide();
	$(this).siblings("ul").show();
	//Hide buton
	$("button").show();
	$(this).hide();
});

//on home/banner click
/* $(".lufa-banner").click(function (event) {
	//stop home page loading
	event.preventDefault();
//give banner animation
	$(".lufa-banner").slide down and out toward screen
//load home page
	$(document).load('BSindex.html');
});
*/





