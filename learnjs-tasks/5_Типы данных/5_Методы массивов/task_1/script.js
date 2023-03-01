'use strict';

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

function camelize(str) {
	let newStr = str.split('-');
	let arr = [];

	newStr.forEach((element, index) => {

		if (index !== 0) {
			let tempArr = element.split('');

			tempArr.forEach((element, index) => {
				if (index === 0) {
					tempArr.splice(0, 1, element.toUpperCase());
				}
			});

			arr.push(tempArr.join(''));

		} else {
			arr.push(element);
		}
	});

	return arr.join('');
}