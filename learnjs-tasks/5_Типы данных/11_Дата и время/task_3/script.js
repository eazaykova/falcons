'use strict';

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getLocalDay(date));       // вторник, нужно показать 2

let date1 = new Date(2012, 0, 8);  // 3 января 2012 года
alert(getLocalDay(date1));

function getLocalDay(date) {
	if (date.getDay() == 0) {
		return 7;
	}
	return date.getDay();
}