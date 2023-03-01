'use strict';

alert(extractCurrencyValue('$120'));

function extractCurrencyValue(str) {
	return +str.slice(1);
}