'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
	let map = new Map();

	for (let value of arr) {
		let arrValue = value.toLowerCase().split('');
		let keyValue = arrValue.sort().join('');

		if (!map.get(keyValue)) {
			map.set(keyValue, value);
		}

	}
	return Array.from(map.values());
}