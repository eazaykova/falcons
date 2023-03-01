'use strict';

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

let sum = calcSalaries(salaries);
alert(sum);

function calcSalaries(objSalaries) {
	let sum = 0;

	for (let key in objSalaries) {
		sum += objSalaries[key];
	}
	return sum;
}