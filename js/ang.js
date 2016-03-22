angular.module("formApp", [])

	.controller('formCtrl', function($scope, dataServ) {
		$scope.someFunction = function() {
			//blank function im afraid to delete
		};
	
		this.form = {
				name: '',
				email: '',
				comments: '' }
		
		$scope.saveForm = function (form) {
			dataServ.saveForm(form);
		};
	
	})
	
	.service('dataServ', function() {

		this.saveForm = function(form) {
			if(form.email == undefined) {
				alert("Please enter a valid email address")
			} else {
				alert("Thanks " + form.name + " ! Your form has been submitted! We will send a response to " + form.email + " within a few days. \n Your Message: " + form.comments);
				document.getElementById("myForm").reset();
			}
			
		};
	});