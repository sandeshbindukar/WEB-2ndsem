function linkClick(){

	var colors=[];
	colors[0]='blue';
	colors[1]='green';
	colors[2]='yellow';
	colors[3]='pink';
	colors[4]='purple';
	
	var div=document.getElementsByTagName('div');

	var r= Math.floor(Math.random()*5);
	div[0].style.backgroundColor=colors[r];


	var borderArray=[];
	borderArray[0]='solid';
	borderArray[1]='dashed';
	borderArray[2]='dotted';
	var randomBorder=Math.floor(Math.random()*3);
	var randomSize=Math.ceil(Math.random()*15);
	var randomColour=Math.floor(Math.random()*5);

	div[0].style.border=randomSize+'px '+borderArray[randomBorder]+' '+colors[randomBorder];

}
function myLoad(){
	var element=document.getElementsByTagName('button');
	element[0].addEventListener('click',linkClick)
}
document.addEventListener('DOMContentLoaded',myLoad);