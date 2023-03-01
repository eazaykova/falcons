'use strict';
let currentUserName = prompt('Кто там?', '');

if (currentUserName === 'Админ') {
	let currentUserPassword = prompt('Пароль?', '');

	if (currentUserPassword === 'Я главный') {
		alert('Здравствуйте!');
	} else if (!currentUserPassword || currentUserPassword === '') {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}

} else if (!currentUserName || currentUserName === '') {
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}