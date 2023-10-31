// //buttonScript.js
// function displayMessage(){
// 	window.alert('Hello');
// 	}

const btn=document.querySelector('#btn-1');

function addParagraph(){
	const newElement = document.createElement('p');
	newElement.textContent='New Paragraph';
	document.body.appendChild(newElement);
	}

	btn.onclick=addParagraph;