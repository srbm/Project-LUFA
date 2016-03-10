//Problem: Create interactivity on main page to fulfill main JS requirment for project
//Solution: Hover or click events trigger modal displaying options with links to go to change modal 

//Remove titles, leave list of options, then in JS hide lists and append button title on top.
	//Hide ul links
$(".links").hide();
	
	//add button title
$(".leagues").append("<button>Leagues</button>");
$(".pickup").append("<button>Pickup</button>");
$(".club-teams").append("<button>Club Teams</button>");
$(".pro-teams").append("<button>Pro Teams</button>");

//Capture click event
$("button:contains('Leagues')").click(function () {
	//Reveal link options
	$(".links").hide();
	$(".league-links").show();
	//Hide buton
	$("button").show();
	$(this).hide();
});

$("button:contains('Pickup')").click(function () {
	//Reveal link options
	$(".links").hide();
	$(".pickup-links").show();
	$().show();
	//Hide buton
	$("button").show();
	$(this).hide();
});

$("button:contains('Club')").click(function () {
	//Reveal link options
	$(".links").hide();
	$(".club-links").show();
	//Hide buton
	$("button").show();
	$(this).hide();
});

$("button:contains('Pro Teams')").click(function () {
	//Reveal link options
	$(".links").hide();
	$(".pro-links").show();
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

