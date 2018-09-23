//DOM var

var info = document.querySelector('#info');
var about = document.querySelector('#about');
var place = document.querySelector('#location');
var addBtn = document.querySelector('#add');
var viewBtn = document.querySelector('#view'); 
var infoDiv = document.querySelector('#infoDiv');
 
// inputs

var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var phoneNumber = document.querySelector('#phoneNumber');
var city = document.querySelector('#city');
var address = document.querySelector('#address');
var email = document.querySelector('#email');
var submit = document.querySelector('#submit');

//table

var showBook = document.querySelector('#showBook');
var btn1 = document.getElementById('btn1');


// array for storing

var storeArray = [];

// vars for displaying conacts

var str1, str2; 	

// colors

var firstColor = '#66cdaa';
var secondColor = 'yellow'
var thirdColor =  '#40e0d0';

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


var fadeDiv = document.getElementById('fade');
var f = document.getElementById('f');
var l = document.getElementById('l');
var p = document.getElementById('p');
var c = document.getElementById('c');
var a = document.getElementById('a');
var e = document.getElementById('e');



var storeToLocal = function(firstName, lastName, phoneNumber, city, address, email) {
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
		
			var fadeEffect = setInterval(function () {
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
			var person = new storeToLocal(firstName.value, lastName.value, phoneNumber.value, city.value, address.value, email.value);
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
			str1 += "<td class='fields'><p><a href='#' class='dellBtn' data-id='" + x + "' >Delete</a></p></td>";
		
			str1 += '</tr>';
			showBook.innerHTML += str1;
		}	
		}
	}

};

function clearAll() {
	var allFields = document.querySelectorAll('.inputs');
	for(f in allFields) {
		allFields[f].value = '';
	}
};

displayAll();

// grab ajax text

var myRequest = new XMLHttpRequest();
var data;
function dropDown(x) {
	if(x === 1){
		myRequest.open('GET', 'https://akademac.github.io/projectX.txt/projectX.txt');
		myRequest.onload = function() {
		infoDiv.innerHTML = myRequest.responseText;
		infoDiv.style.display = "inline";
		infoDiv.style.color = 'white';
				};
		 }
	else if(x === 2) {
		myRequest.open('GET', 'https://akademac.github.io/JSON/testJson.json');
		myRequest.onload = function() {
			data = JSON.parse(myRequest.responseText);
			console.log(data);
			infoDiv.style.display = "inline";
			infoDiv.innerHTML = 'My name is ' + data.name + ' and I am ' + data.age + ' years old!';
		}}

myRequest.send();

};

function frame() {
	var loc = '<iframe src="https://google/maps/4qqTyNbC4w92" width="255px" height="105px"></iframe>'
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
		var getID = e.target.getAttribute('data-id');
		storeArray.splice(getID, 1);
		localStorage['projectX'] = JSON.stringify(storeArray);
			displayAll();
		}
	};

if (showBook) {
	showBook.addEventListener('click', removeContact);
}