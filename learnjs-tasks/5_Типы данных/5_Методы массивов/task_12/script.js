'use strict';

function unique(arr) {
	let temp = [];

	for (let element of arr) {
		if (!temp.includes(element)) {
			temp.push(element);
		}
	}

	return temp;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O