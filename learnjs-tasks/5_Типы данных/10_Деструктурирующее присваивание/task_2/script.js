'use strict';

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

console.log(topSalary(salaries));

function topSalary(salaries) {
	let employee = [null, 0];

	for (let [name, salary] of Object.entries(salaries)) {
		if (employee[1] < salary) {
			employee[0] = name;
			employee[1] = salary;
		}
	}
	return employee[0];
}