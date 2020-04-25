
function to_q1(){
	var welcome = document.getElementById('welcome');
	welcome.style.display = 'none';

	var first_quiz = document.getElementById('first_quiz');
	first_quiz.style.display = 'block';

	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;

}

//show feedback for the quiz
function check_first_quiz_answer() {
	//defining the right answer here
	var choice_B = document.getElementById('first_quiz_B');

	if (choice_B.classList.contains('selected_choice')){
		document.getElementById("first_correct_fb").style.display='block';
	} else {
		document.getElementById("first_incorrect_fb").style.display='block';
	};
}

//change submit button to next
function quiz_submit() {
	document.getElementById('submit').style.display='none';
	document.getElementById('next').style.display='block';

	var choice_B = document.getElementById('first_quiz_B');

	if (!choice_B.classList.contains('selected_choice')) {
		document.getElementById('retry_1').style.display='block';
	}
	
}

function retry() {
	var checkbox_list = document.getElementsByTagName("input");
	for (var i = 0; i < checkbox_list.length; ++i) {
		checkbox_list[i].checked = false; 
	}

	document.getElementById('submit').style.display='block';
	document.getElementById('next').style.display='none';
	document.getElementById('retry_1').style.display='none';

	document.getElementById("first_incorrect_fb").style.display='none';
}


//first_quiz

function first_quiz_A() {
	var selected = document.getElementById('first_quiz_A');
	//selected.className += " selected_choice"
	selected.classList.toggle('selected_choice');

	var quiz_B = document.getElementById('first_quiz_B');
	var quiz_C = document.getElementById('first_quiz_C');
	var quiz_D = document.getElementById('first_quiz_D');

	quiz_B.classList.remove('selected_choice');
	quiz_C.classList.remove('selected_choice');
	quiz_D.classList.remove('selected_choice');
}

function first_quiz_B() {
	var selected = document.getElementById('first_quiz_B');
	//selected.className += " selected_choice"
	selected.classList.toggle('selected_choice');

	var quiz_A = document.getElementById('first_quiz_A');
	var quiz_C = document.getElementById('first_quiz_C');
	var quiz_D = document.getElementById('first_quiz_D');

	quiz_A.classList.remove('selected_choice');
	quiz_C.classList.remove('selected_choice');
	quiz_D.classList.remove('selected_choice');
}

function first_quiz_C() {
	var selected = document.getElementById('first_quiz_C');
	//selected.className += " selected_choice"
	selected.classList.toggle('selected_choice');

	var quiz_A = document.getElementById('first_quiz_A');
	var quiz_B = document.getElementById('first_quiz_B');
	var quiz_D = document.getElementById('first_quiz_D');

	quiz_A.classList.remove('selected_choice');
	quiz_B.classList.remove('selected_choice');
	quiz_D.classList.remove('selected_choice');
}

function first_quiz_D() {
	var selected = document.getElementById('first_quiz_D');
	//selected.className += " selected_choice"
	selected.classList.toggle('selected_choice');

	var quiz_A = document.getElementById('first_quiz_A');
	var quiz_B = document.getElementById('first_quiz_B');
	var quiz_C = document.getElementById('first_quiz_C');

	quiz_A.classList.remove('selected_choice');
	quiz_B.classList.remove('selected_choice');
	quiz_C.classList.remove('selected_choice');
}
