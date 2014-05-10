
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});



var newGame = function(){
	// generate random number
	var computerNumber = Math.floor(Math.random() * (100 )) + 1;
	var userNumber = function(){
		userNumber = +(prompt("Enter a number between 1 and 100."));
	};
	//var userNumber;

	alert(computerNumber);

	//prompt user for guess
	var getNum = function(){
		userNumber();
		if ($.isNumeric(userNumber) && userNumber > 0 && userNumber < 101){
			alert(userNumber);
		} else {
			userNumber();
			getNum();
		}
	};

	getNum();

	var compareNumbers = function(userNumber, computerNumber){
		while (userNumber !== computerNumber) {
			if (userNumber > computerNumber){
				userNumber = +(prompt("Please enter a number between " + userNumber + " and " + computerNumber));
			} else {
				userNumber = +(prompt("Please enter a number between " + userNumber + " and " + computerNumber));
			}
		} alert("You got it!");
	};

	compareNumbers(userNumber, computerNumber);
};

window.onload(newGame());
