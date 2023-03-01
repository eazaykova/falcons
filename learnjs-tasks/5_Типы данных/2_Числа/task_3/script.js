'use strict';

function readNumber() {

	let value;

	do {
		value = prompt('Введите число:', 0);
	} while (!isFinite(value))

	if (value != '') {
		return value;
	} else {
		return null;
	}
}

alert(`Число: ${readNumber()}`);
