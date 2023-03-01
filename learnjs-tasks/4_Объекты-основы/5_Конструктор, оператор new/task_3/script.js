'use strict';

function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function () {
		this.addValue = +prompt('Сколько нужно добавить?', 0);
		this.value += this.addValue;
	};
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value); 