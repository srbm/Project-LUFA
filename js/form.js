//Take text from form 
	//store it in an array

// and send it to my email

//
var contactUS = [];

var person;
var personEmail;
var comments;

var retrieve = function () {
	$('button').click(function () {
		person = document.getElementById('person').value; //get the name from text field
		personEmail = document.getElementById('personEmail').value; //get email form text field
		comments = document.getElementById('comments').value; //get comments from text field

	});

	contactUS.push(person);
	contactUS.push(personEmail);
	contactUS.push(comments);

};

retrieve();

