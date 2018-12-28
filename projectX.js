//DOM let

let info = document.querySelector('#info');
let about = document.querySelector('#about');
let place = document.querySelector('#location');
let addBtn = document.querySelector('#add');
let viewBtn = document.querySelector('#view'); 
let infoDiv = document.querySelector('#infoDiv');
 
// inputs

let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let phoneNumber = document.querySelector('#phoneNumber');
let city = document.querySelector('#city');
let address = document.querySelector('#address');
let email = document.querySelector('#email');
let submit = document.querySelector('#submit');

//table

let showBook = document.querySelector('#showBook');
let btn1 = document.getElementById('btn1');

// array for storing

let storeArray = [];

// vars for displaying conacts

let str1, str2; 	

// colors

let firstColor = '#66cdaa';
let secondColor = 'yellow'
let thirdColor =  '#40e0d0';

let dropUp = () => infoDiv.style.display = 'none';


// other pages

function otherPage(y) {

	switch(y) {
		case 1: 
			window.location = 'addContact.html';
			break;
		case 2:
			window.location = 'viewAll.html';
			break;
	}
};

//fadeing div

let fadeDiv = document.getElementById('fade');
let f = document.getElementById('f');
let l = document.getElementById('l');
let p = document.getElementById('p');
let c = document.getElementById('c');
let a = document.getElementById('a');
let e = document.getElementById('e');

//functionality

let storeToLocal = function(firstName, lastName, phoneNumber, city, address, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.city = city;
	this.address = address;
	this.email = email;
	this.showFade = function() {
		 f.innerHTML = this.firstName;
		 l.innerHTML = this.lastName;
		 p.innerHTML = this.phoneNumber;
		 c.innerHTML = this.city;
		 a.innerHTML = this.address;
		 e.innerHTML = this.email;
		
		 let fadeEffect = setInterval(function () {
			if (!fadeDiv.style.opacity) {
			     fadeDiv.style.opacity = 1;
			       }
			if (fadeDiv.style.opacity > 0) {
			      fadeDiv.style.opacity -= 0.1;
			     } 
			else {
			     clearInterval(fadeEffect);
			        }
			    }, 70);
			};
};

function store() {
		let isEmpty = firstName.value != '' && lastName.value != '' && phoneNumber.value != '' && city.value != '' && address.value != '' && email.value != '';
		if(isEmpty === true) {
			let person = new storeToLocal(firstName.value, lastName.value, phoneNumber.value, city.value, address.value, email.value);
			storeArray.push(person);
			localStorage['projectX'] = JSON.stringify(storeArray);
			person.showFade();
			clearAll();
			}
			displayAll();
	};

function displayAll() {
	if(localStorage['projectX'] === undefined) {
		localStorage['projectX'] = [];
	}
	else {
		storeArray = JSON.parse(localStorage['projectX']);
		if(showBook === null) {
			return false;
		}
		else {
		showBook.innerHTML = '';
		for(x in storeArray) {
			str1 = '<tr>';
			str1 += '<td class="fields">' + x + '</td>';
			str1 += '<td class="fields">' + storeArray[x].firstName + '</td>';
			str1 += '<td class="fields">' + storeArray[x].lastName + '</td>';
			str1 += '<td class="fields">' + storeArray[x].phoneNumber + '</td>';
			str1 += '<td class="fields">' + storeArray[x].city + '</td>';
			str1 += '<td class="fields">' + storeArray[x].address + '</td>';
			str1 += '<td class="fields">' + storeArray[x].email + '</td>';
			str1 += "<td class='fields'><p><a href='#' class='dellBtn' data-id='" + x + "' style='text-align: center'>Delete</a></p></td>";
		
			str1 += '</tr>';
			showBook.innerHTML += str1;
			}	
		}
	}
};

function clearAll() {
	let allFields = document.querySelectorAll('.inputs');
	for(f in allFields) {
		allFields[f].value = '';
	}
};

displayAll();

// grab ajax text

let myRequest = new XMLHttpRequest();
let data;
function dropDown(x) {
	if(x === 1){
		myRequest.open('GET', 'https://akademac.github.io/JSON/testJson.json');
		myRequest.onload = function() {
		data = JSON.parse(myRequest.responseText);
		console.log(data[1].description);
		infoDiv.innerHTML = data[1].description;
		infoDiv.style.display = "inline";
		infoDiv.style.color = 'white';
				};
		 }
	else if(x === 2) {
		myRequest.open('GET', 'https://akademac.github.io/JSON/testJson.json');
		myRequest.onload = function() {
			data = JSON.parse(myRequest.responseText);
			console.log(data[0].phoneNumber);
			infoDiv.style.display = "inline";
			infoDiv.innerHTML = '<ul>';
			infoDiv.innerHTML += '<li>' + "Phone Number: " + data[0].phoneNumber + '</li>';
			infoDiv.innerHTML += '<li>' + "Email: " + data[0].email + '</li>';
			infoDiv.innerHTML += '</ul>';


		}
	}

myRequest.send();

};

//iframe need key

function frame() {
	let loc = '<iframe src="https://google/maps/4qqTyNbC4w92" width="255px" height="105px"></iframe>'
	infoDiv.style.display = "inline";
	infoDiv.innerHTML = loc; 
}

// recursive function

function reverseF(n) {
	if(!n.length) {
		return n;
	} 
	else {
		return reverseF(n.slice(1)).concat(n[0]);
	}
}	

function reverse() {
	storeArray = JSON.parse(localStorage['projectX']);
	storeArray2 = reverseF(storeArray);
		if(showBook === null) {
			return false;
		}
		else {
			showBook.innerHTML = '';
			for(y in storeArray2) {
				str2 = '<tr>';
				str2 += '<td class="fields">' + y + '</td>';
				str2 += '<td class="fields">' + storeArray2[y].firstName + '</td>';
				str2 += '<td class="fields">' + storeArray2[y].lastName + '</td>';
				str2 += '<td class="fields">' + storeArray2[y].phoneNumber + '</td>';
				str2 += '<td class="fields">' + storeArray2[y].city + '</td>';
				str2 += '<td class="fields">' + storeArray2[y].address + '</td>';
				str2 += '<td class="fields">' + storeArray2[y].email + '</td>';
				str2 += "<td class='fields'><p><a href='#' class='dellBtn' data-id='" + y + "'>Delete</a></p></td>";

				str2 += '</tr>';
				showBook.innerHTML += str2;
				}	
		}
};

function removeContact(e) {
	if(e.target.classList.contains('dellBtn')) {
		let getID = e.target.getAttribute('data-id');
		storeArray.splice(getID, 1);
		localStorage['projectX'] = JSON.stringify(storeArray);
			displayAll();
		}
	};

if (showBook) {
	showBook.addEventListener('click', removeContact);
}