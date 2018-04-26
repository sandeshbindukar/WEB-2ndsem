
/*function print(argument) {
for (var i = 1; i <= 5; i++) {
	console.log(i);
}
	
}
print();
print();*/

/*function myLoad()
{
	var pageheading = document.getElementById('pageheading');
	pageheading.innerHTML = 'New Heading';

	var pagecontent = document.getElementById('pagecontent');
	pagecontent.innerHTML = 'New Paragraph';
}
document.addEventListener('DOMContentLoaded', myLoad);*/

/*var count = 1;
function changeHeading()
{
	console.log(count);
	var pageheading = document.getElementById('pageheading');
	if (count % 2 == 1) 
	{
		pageheading.innerHTML = "New Heading";
		pageheading.style.color = "red";
	}
	else 
	{
		pageheading.innerHTML = "Page Heading";
		pageheading.style.color = "black";
	}
	count++;
}
var check = 1;
function changeContent()
{
	console.log(check);
	var pagecontent = document.getElementById('pagecontent');
	if (check % 2 == 1) 
	{
		pagecontent.innerHTML = 'New Paragraph';
		pagecontent.style.color = "green";
	}
	else
	{
		pagecontent.innerHTML = "Page Content"
		pagecontent.style.color = "black";
		pagecontent.style.fontSize = "18px";
	}
	check++;
}
function myLoad()
{
	var pageheading = document.getElementById('pageheading');
	pageheading.addEventListener('click', changeHeading);

	var pagecontent = document.getElementById('pagecontent');
	pagecontent.addEventListener('mouseover', changeContent);
}

document.addEventListener('DOMContentLoaded', myLoad);*/

function getInput()
{
	var input= document.getElementById('myText');
	document.getElementById('display').innerHTML = input.value;
}
function myLoad()
{
	var input = document.getElementById('myText');
	input.addEventListener('keyup', getInput);
}

document.addEventListener('DOMContentLoaded', myLoad);