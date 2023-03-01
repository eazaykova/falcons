'use strict';

function checkSpam(str) {
	if (str.toLowerCase().includes('viagra')) {
		return true;
	} else if (str.toUpperCase().includes('XXX')) {
		return true;
	} else {
		return false;
	}
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));