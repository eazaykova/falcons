'use strict';
let age = prompt('Укажите ваш возраст:');

//Используя оператор ?
/*
function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
}*/

//Используя оператор ||
function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}
alert(checkAge(age));