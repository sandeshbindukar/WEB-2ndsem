
function myLoad() {
	var buttons = document.getElementsByTagName('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click',lotteryNumber);
	}

	var clear = document.getElementsByTagName('span');
	for (var i = 0; i <	clear.length; i++) {
		clear[i].addEventListener('click',clearTable);
	
	}
}

function clearTable() {
	var tables = this.parentNode.getElementsByTagName('table');
	for (var i = 0; i < tables.length; i++) {
		tables[i].parentNode.removeChild(tables[i]);
		i--;
	}
}

function lotteryNumber(){
	//var tds = this.parentNode.getElementsByTagName('td');

	var table = document.createElement('table');
	var tr = document.createElement('tr');
	table.appendChild(tr);

	for (var i = 0; i < 6; i++) {
		var randomNumber= Math.ceil(Math.random()*49);
	 	var td = document.createElement('td');
	 	var textNode = document.createTextNode(randomNumber);
	 	td.appendChild(textNode);
	 	tr.appendChild(td);

	 	//tds[i].firstChild.nodeValue = randomNumber;
	 } 
	this.parentNode.appendChild(table);

}

document.addEventListener('DOMContentLoaded',myLoad);