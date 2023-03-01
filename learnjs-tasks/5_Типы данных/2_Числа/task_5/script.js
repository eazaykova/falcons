'use strict';

let min = +prompt('Введите min число: ', 0);
let max = +prompt('Введите max число: ', 0);

alert(random(min, max));

function random(min, max) {
	return Math.random() * (max - min) + min;
}