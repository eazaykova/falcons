'use strict';

alert(getLastDayOfMonth(2023, 1));
alert(getLastDayOfMonth(2020, 3));
alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1);
	date.setDate(0);
	return date.getDate();
}

