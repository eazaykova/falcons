'use strict';

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([-1, -2, -3]));

function getMaxSubSum(arr) {
	let maxNum = 0;

	for (let i = 0; i < arr.length; i++) {
		let tempValue = 0;
		for (let j = i; j < arr.length; j++) {
			tempValue += arr[j];
			maxNum = Math.max(tempValue, maxNum);
		}
	}
	return maxNum;
}