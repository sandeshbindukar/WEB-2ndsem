var start = 0;
var stop = 0;
var currentDice = 0;
var time = 0;
var count = 0;

function startFlip(){
	var random = Math.ceil(Math.random() * 6);
	currentDice.className = 'side' + random;
}

function stopFlip(){
	clearInterval(start);
	clearInterval(stop);
	clearInterval(time);

	var numbers = [];
	numbers[1] = 'One';
	numbers[2] = 'Two';
	numbers[3] = 'Three';
	numbers[4] = 'Four';
	numbers[5] = 'Five';
	numbers[6] = 'Six';

	var random = Math.ceil(Math.random() * 6);
	currentDice.className = 'side' + random;
	currentDice.nextSibling.nextSibling.innerHTML = 'You rolled a '+ numbers[random];
}
function startTime(){
	var seconds = document.getElementById('seconds');
	seconds.innerHTML = ++count;
}

function clickFunction(){
	count= 0;
	currentDice = this;
	time = setInterval(startTime,1000);
	start = setInterval(startFlip,100);
	stop = setInterval(stopFlip,5000);

}

function myLoad() {
	var elements = document.getElementsByTagName('div');
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click',clickFunction);
	}
}














document.addEventListener('DOMContentLoaded',myLoad);