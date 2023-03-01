'use strict';

alert(sumInput());

function sumInput() {
	let values = [];
	let sum = 0;

	while (true) {
		let number = prompt('Введите число:', 0);

		if (!isFinite(number) || number === null || number === '') break;

		values.push(+number);
	}

	for (let value of values) {
		sum += value;
	}

	return sum;
}
