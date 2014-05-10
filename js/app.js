
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

	if (userNumber < computerNumber){
		alert("too low!");
	} else if (userNumber > computerNumber){
		alert("too high!");
	} else if (typeof userNumber != 'number'){
		prompt("Please enter a valid number between 1 and 100.");
	} else {
		alert("you got it!");
	}
};

window.onload(newGame());
