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
	circle.style.left = currentLeftPosition - 1 +'px';
}
function moveRight()
{
	var elememt=document.getElementById('circle');
	var currentRightPosition = circle.offsetLeft;
	circle.style.left = currentRightPosition + 1 +'px';
}
function moveUp()
{
	var elememt=document.getElementById('circle');
	var currentUpPosition = circle.offsetTop;
	circle.style.top = currentUpPosition - 1 +'px';
}
function moveDown()
{
	var elememt=document.getElementById('circle');
	var currentDownPosition = circle.offsetTop;
	circle.style.top = currentDownPosition + 1 +'px';
}
var interval;
function clickFunction(event)
{	
	clearInterval(interval);
	if (event.keyCode == 37)
		interval = setInterval(moveLeft,10);
	if (event.keyCode == 39)
		interval = setInterval(moveRight,10);
	if (event.keyCode == 38)
		interval = setInterval(moveUp,10);
	if (event.keyCode == 40)
		interval = setInterval(moveDown,10);
	
}
function myLoad() 
{
	document.addEventListener('keydown',clickFunction);
}
document.addEventListener('DOMContentLoaded', myLoad);