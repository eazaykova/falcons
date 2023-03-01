'use strict';

let arr = [1, 2, 3];

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}