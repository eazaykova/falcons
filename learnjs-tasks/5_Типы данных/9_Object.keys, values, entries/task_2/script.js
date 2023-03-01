'use strict';

let user = {
	name: 'John',
	age: 30
};

alert(count(user)); // 2

function count(obj) {
	let i = 0;
	for (let value of Object.entries(obj)) {
		i++;
	}
	return i;
}

//or 
/*
function count(obj) {
	return Object.keys(obj).length;
}*/