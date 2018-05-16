// function changeOpacity()
// {
// 	var elememt=document.getElementById('circle');
// 	var currentOpacity= parseFloat(elememt.style.opacity);
// 	if(currentOpacity < 1) elememt.style.opacity = currentOpacity + 0.1;
// }
// function clickFunction()
// {
// 	setInterval(changeOpacity,1000);
// }
// function myLoad()
// {
// 	var elememt=document.getElementById('circle');
// 	elememt.addEventListener('click',clickFunction);
// 	elememt.style.opacity = '0';
// }

// document.addEventListener('DOMContentLoaded', myLoad);

function moveLeft()
{
	var elememt=document.getElementById('circle');
	var currentLeftPosition = circle.offsetLeft;
	// if (currentLeftPosition == 0)
	// {
	// 	clearInterval(interval);
	// 	interval = setInterval(moveRight,1);
	// }
		if (currentLeftPosition == -200) 
		{
			circle.style.left = window.innerWidth + 'px';
		}
	else
	{
		circle.style.left = currentLeftPosition - 1 +'px';
	}
}
function moveRight()
{
	var elememt=document.getElementById('circle');
	var currentRightPosition = circle.offsetLeft;
	// if (window.innerWidth == currentRightPosition + 200)
	// {
	// 	clearInterval(interval);
	// 	interval = setInterval(moveLeft,1);
	// }
	if (window.innerWidth == currentRightPosition)
	{
	 	circle.style.left = -200 + 'px';
	}
	else
		
		circle.style.left = currentRightPosition + 1 +'px';
}
function moveUp()
{
	var elememt=document.getElementById('circle');
	var currentUpPosition = circle.offsetTop;
	if (currentUpPosition == -200)
	{
			// clearInterval(interval);
			// interval = setInterval(moveDown,1);
			circle.style.top = window.innerHeight + 'px';
	}

	else
		{
			circle.style.top = currentUpPosition - 1 +'px';
		}
}
function moveDown()
{
	var elememt=document.getElementById('circle');
	var currentDownPosition = circle.offsetTop;
	// if (innerHeight == currentDownPosition + 200)
	// 	{
	// 		clearInterval(interval);
	// 		interval = setInterval(moveUp,1);
	// 	}
	if (window.innerHeight == currentDownPosition)
	{
	 	circle.style.top = -200 + 'px';
	}

	else
		circle.style.top = currentDownPosition + 1 +'px';
}

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

function moveInterval() {
 if (leftPressed == true) {
 moveLeft();
 }
 if (rightPressed == true) {
 moveRight();
 }
 if (upPressed == true) {
 moveUp();
 }
 if (downPressed == true) {
 moveDown();
 }
}

function myKeyDown(event)
{
	if (event.keyCode == 37) {
	 leftPressed = true;
	 }
	 if (event.keyCode == 38) {
	 upPressed = true;
	 }
	 if (event.keyCode == 40) {
	 downPressed = true;
	 }
	 if (event.keyCode == 39) {
	 rightPressed = true;
	 }
}
function myKeyUp(event) {
	 if (event.keyCode == 37) {
	 leftPressed = false;
	 }
	 if (event.keyCode == 38) {
	 upPressed = false;
	 }
	 if (event.keyCode == 40) {
	 downPressed = false;
	 }
	 if (event.keyCode == 39) {
	 rightPressed = false;
	 }
}
function myLoad() 
{
	document.addEventListener('keydown',myKeyDown);
	document.addEventListener('keyup',myKeyUp);
	setInterval(moveInterval,10);
}
document.addEventListener('DOMContentLoaded', myLoad);