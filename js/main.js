
function askQuestions (){




	var firstName = prompt ('what is your first name?');

	var lastName = prompt ('what is your last name?');

	var fullName = firstName + ' ' + lastName; /*need to add a space in by adding the sting ' ' */
	console.log(fullName);

	var age = prompt ('how old are you?');

	age=parseInt(age);

	if (age >= 18) {

		console.log ('you are an adult');
		}	else if (age >= 13) {
			console.log ('you are a teenager');

	} else { 
		console.log ('you are a child');

	}

	if (firstName.trim ().toLowerCase () === 'General' && lastName.trim ().toLowerCase ()  !== 'Assembly') {
		console.log ('Hello General');

		/*use trim() to get rid of space and .toLowerCase to ignore capitals*/
	}

	var faveColour = prompt ('what is your favourite colour?').toLowerCase();

	if (faveColour == 'red' || 
		faveColour == 'blue' ||
		faveColour == 'yellow' ||
		faveColour == 'green') {

		$('h1').css('color', faveColour);
	}

}

/* when the page has loaded - shortcut for when page has loaded in jquery*/

$(function () { 

	$('img').on('click', askQuestions);

	/* when the user clicks an h3*/

	$('h3').on('click', function () { 


		/*hide the next element*/

		$(this).next().slideToggle();
	});




});