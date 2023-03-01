'use strict';
let jsOfficialName = prompt('Какое "официальное" название JavaScript?', '');

// 1-й вариант

/*let result = (jsOfficialName == 'ECMAScript') ? 'Верно!' : 'Не знаете? ECMAScript!';
alert(result);*/

// 2-й вариант

if (jsOfficialName == 'ECMAScript') {
	alert('Верно!');
} else {
	alert('Не знаете? ECMAScript!');
}