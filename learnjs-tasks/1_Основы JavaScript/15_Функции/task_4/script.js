'use strict';

let x = prompt('Введите число для возведения в степень:');
let n = prompt('Введите степень:');

if ((n > 0) && (n % 1 == 0)) {
	alert(pow(x, n));
}
else {
	alert(`Степень должна быть натуральным числом от 1 и выше. ${n} - ненатуральное число!`);
}

function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}