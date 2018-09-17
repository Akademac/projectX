//DOM var

var info = document.querySelector('#info');
var about = document.querySelector('#about');
var place = document.querySelector('#location');
var addBtn = document.querySelector('#add');
var viewBtn = document.querySelector('#view'); 
var drop = document.querySelector('#drop');
 
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

// array for storing

var storeArray = [];

	//styling	

// colors

var firstColor = '#66cdaa';
var secondColor = 'yellow'
var thirdColor =  '#40e0d0';

function dropDown(x) {
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://akademac.github.io/projectX.txt/projectX.txt');
	drop.style.display = 'block';
	switch(x) {
		case 1:
			console.log('asdad');
			drop.innerHTML = myRequest.responseText;
			console.log(myRequest.responseText);
			drop.style.backgroundColor = firstColor;
			break;
		case 2:
			drop.style.backgroundColor = secondColor;
			break;
		case 3:
			drop.style.backgroundColor = thirdColor;
			break;
		}
		myRequest.send();
};

let dropUp = () => drop.style.display = 'none';

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


	// functionnality


var storeToLocal = function(firstName, lastName, phoneNumber, city, address, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.city = city;
	this.address = address;
	this.email = email;
};

function store() {
		let isEmpty = firstName.value != '' && lastName.value != '' && phoneNumber.value != '' && city.value != '' && address.value != '' && email.value != '';
		if(isEmpty) {
			var person = new storeToLocal(firstName.value, lastName.value, phoneNumber.value, city.value, address.value, email.value);
			storeArray.push(person);
			localStorage['projectX'] = JSON.stringify(storeArray);
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
			return false
		}
		else {
		showBook.innerHTML = '';
		for(x in storeArray) {
			var str = '<tr>';
			str += '<td class="fields">' + storeArray[x].firstName + '</td>';
			str += '<td class="fields">' + storeArray[x].lastName + '</td>';
			str += '<td class="fields">' + storeArray[x].phoneNumber + '</td>';
			str += '<td class="fields">' + storeArray[x].city + '</td>';
			str += '<td class="fields">' + storeArray[x].address + '</td>';
			str += '<td class="fields">' + storeArray[x].email + '</td>';
			str += '</tr>';
			showBook.innerHTML += str;
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

