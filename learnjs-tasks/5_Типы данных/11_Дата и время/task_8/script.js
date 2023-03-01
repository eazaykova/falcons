'use strict';

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));

function formatDate(date) {
	let difference = new Date() - date;

	if (difference < 1000) {
		return 'прямо сейчас';
	}

	let second = Math.floor(difference / 1000);

	if (second < 60) {
		return second + ' сек. назад';
	}

	let value = 60 * 1000;
	let minutes = Math.floor(difference / value);
	if (minutes < 60) {
		return minutes + ' мин. назад';
	}

	let formDate = date;
	let day = newNumberFormat(formDate.getDate());
	let month = newNumberFormat(formDate.getMonth() + 1);
	let hour = newNumberFormat(formDate.getHours());
	let min = newNumberFormat(formDate.getMinutes());


	return `${day}.${month}.${formDate.getFullYear()}, ${hour}:${min}`;
}

function newNumberFormat(number) {
	if (number < 10) {
		return `0${number}`
	}
	return number
}