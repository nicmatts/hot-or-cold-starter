
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	var newGame = function(){
		
		// generate random number
		var computerNumber = Math.floor(Math.random() * (100 )) + 1;
		
		//intitialize guess count
		var guessCount = 1;

		//this is the game
		$("#guessButton").click(function(e) {
			//prevent the page from reloading when the button is clicked
			e.preventDefault();
			
			//get the user's guess
			userNumber = Number($("input:text").val());

			
			//get the difference between the user number and the computer number
			var difference = Math.abs(userNumber-computerNumber);
			
			//clear the text box and append the user's guess
			function clearAndAppend(){
				$("input:text").val("");
				$("#guessList").append("<li>" + userNumber + "</li>");
			}

			//make user entry is valid
			if(isNaN(userNumber) || userNumber > 100 || userNumber < 0 || userNumber == " "){
				$("#feedback").text("Please enter a number between 1 and 100.");
				$("input:text").val("");
			} else {
				//increment the guess count after each guess
				$("span#count").text(guessCount);
				guessCount += 1;
			
				//compare the user number and the computer number and return a result
				if (userNumber !== computerNumber) {
					if (difference < 5){
						$("#feedback").text("HOT HOT HOT! Try again.");
						clearAndAppend();
					} else if (difference >= 5 && difference < 10) {
						$("#feedback").text("You're hot!");
						clearAndAppend();
					} else if (difference >= 10 && difference < 20) {
						$("#feedback").text("You're warm, try again!");
						clearAndAppend();
					} else if (difference >= 20 && difference < 40) {
						$("#feedback").text("You're cool, try again!");
						clearAndAppend();
					} else {
						clearAndAppend();
						$("#feedback").text("You're ice cold, try again!");
					}
				} else {
					$("#feedback").text("You got it!").attr("id", "win");
					$("#guessList").append("<li>" + userNumber + "</li>");
				}
			}
		});
	};

	window.onload(newGame());
});
