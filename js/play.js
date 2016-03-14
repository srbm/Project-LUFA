
	

//Problem: Create interactivity on main page to fulfill main JS requirment for project
//Solution: Hover or click events trigger modal displaying options with links to go to change modal 

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





//Display specific modal according to the choice clicked with more options to click on
//Capture click/tap event on an option

//change modal to the option tapped/clicked
	//give a back option

//provide an X at upper right to return to exit modal
	//exit can be achieved by esc as well

