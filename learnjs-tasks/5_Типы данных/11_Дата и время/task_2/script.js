'use strict';

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getWeekDay(date));        // нужно вывести "ВТ"

let date1 = new Date(2014, 0, 3); // 3 января 2014 года
alert(getWeekDay(date1)); // ПТ

function getWeekDay(date) {
	switch (date.getDay()) {
		case 0:
			return 'ВС';
		case 1:
			return 'ПН';
		case 2:
			return 'ВТ';
		case 3:
			return 'СР';
		case 4:
			return 'ЧТ';
		case 5:
			return 'ПТ';
		case 6:
			return 'СБ';
	}
}