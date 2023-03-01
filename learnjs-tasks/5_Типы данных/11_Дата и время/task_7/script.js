'use strict';

alert(getSecondsToTomorrow());

function getSecondsToTomorrow() {
	let date = new Date();
	let second = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
	return 86400 - second;
}