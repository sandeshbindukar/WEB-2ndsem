function moveLeft()
{
	var elememt=document.getElementById('player');
	elememt.className = 'character standLeft';
	elememt.className = 'character walkLeft';
	var currentLeftPosition = player.offsetLeft;
		if (currentLeftPosition == -200) 
		{
			player.style.left = window.innerWidth + 'px';
		}
	else
	{
		player.style.left = currentLeftPosition - 1 +'px';
	}
}
function moveRight()
{
	var elememt=document.getElementById('player');
	elememt.className = 'character standRightt';
	elememt.className = 'character walkRight';
	var currentRightPosition = player.offsetLeft;
	if (window.innerWidth == currentRightPosition)
	{
	 	player.style.left = -200 + 'px';
	}
	else
		
		player.style.left = currentRightPosition + 1 +'px';
}
function moveUp()
{
	var elememt=document.getElementById('player');
	elememt.className = 'character standUp';
	elememt.className = 'character walkUp';

	var currentUpPosition = player.offsetTop;
	if (currentUpPosition == -200)
	{
			player.style.top = window.innerHeight + 'px';
	}

	else
		{
			player.style.top = currentUpPosition - 1 +'px';
		}
}
function moveDown()
{
	var elememt=document.getElementById('player');
	elememt.className = 'character standDown';
	elememt.className = 'character walkDown';
	var currentDownPosition = player.offsetTop;
	if (window.innerHeight == currentDownPosition)
	{
	 	player.style.top = -200 + 'px';
	}

	else
		player.style.top = currentDownPosition + 1 +'px';
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
	var elememt=document.getElementById('player');
	 if (event.keyCode == 37) {
	 leftPressed = false;
	 elememt.className = 'character standLeft';
	 }
	 if (event.keyCode == 38) {
	 upPressed = false;
	 elememt.className = 'character standUp';
	 }
	 if (event.keyCode == 40) {
	 downPressed = false;
	 elememt.className = 'character standDown';
	 }
	 if (event.keyCode == 39) {
	 rightPressed = false;
	 elememt.className = 'character standRight';
	 }
}
function closeSideBar()
{
	var aside = document.getElementsByTagName('aside');
	aside[0].style.display = 'none';
}
function showSideBar()
{
	var aside = document.getElementsByTagName('aside');
	aside[0].style.display = 'block';
}
function setHead()
{
	var element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/'+ this.id +'.png)';
}
function setBody()
{
	var element = document.getElementsByClassName('body');
	element[0].style.backgroundImage = 'url(images/'+ this.id +'.png)';
}

function myLoad() 
{
	//select heads
	var element = document.getElementsByClassName('heads');
	var heads = element[0].getElementsByTagName('li');
	for (var i = 0 ; i < heads.length ; i++) {
		heads[i].addEventListener('click',setHead);
	}
	//select body
	var element = document.getElementsByClassName('bodies');
	var body = element[0].getElementsByTagName('li');
	for (var i = 0 ; i < body.length ; i++) {
		body[i].addEventListener('click',setBody);
	}

	document.addEventListener('keydown',myKeyDown);
	document.addEventListener('keyup',myKeyUp);
	setInterval(moveInterval,10);
	//hide sidebar
	var cross = document.getElementById('closeside');
	cross.addEventListener('click', closeSideBar);
	//show sidebar
	var player = document.getElementById('player');
	player.addEventListener('click', showSideBar);

}
document.addEventListener('DOMContentLoaded', myLoad);