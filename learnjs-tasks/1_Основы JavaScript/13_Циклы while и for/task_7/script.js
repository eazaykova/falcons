'use strict';

let maxValue = prompt('Введите максимальное число интервала:');

flag: for (let i = 2; i <= maxValue; i++) {

	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue flag;
	}

	alert(i);
}
