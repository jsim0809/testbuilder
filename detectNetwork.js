// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstOne = cardNumber.substring(0,1);
  var firstTwo = cardNumber.substring(0,2);
  var firstThree = cardNumber.substring(0,3);
  var firstFour = cardNumber.substring(0,4);
  var length = cardNumber.length;
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

// China UnionPay helper functions

	var CHINA_UNIONPAY_PREFIXES = [];
	for (var i=622126; i<=622925; i++) {
		CHINA_UNIONPAY_PREFIXES.push(i);
	}
	for (var i=624; i<=626; i++) {
		CHINA_UNIONPAY_PREFIXES.push(i);
	}
	for (var i=6282; i<=6288; i++) {
		CHINA_UNIONPAY_PREFIXES.push(i);
	}
	var CHINA_UNIONPAY_LENGTHS = [];
	for (var i=16; i<=19; i++) {
		CHINA_UNIONPAY_LENGTHS.push(i);
	}
	function isChinaUnionPrefix(cardNumber) {
		for (var i=0; i<CHINA_UNIONPAY_PREFIXES.length; i++) {
			if (cardNumber.indexOf(CHINA_UNIONPAY_PREFIXES[i].toString()) === 0) {
				return true;
			}
		}
		return false;
	}
	function isChinaUnionLength(cardNumber) {
		for (var i=0; i<CHINA_UNIONPAY_LENGTHS.length; i++) {
			if (cardNumber.length === CHINA_UNIONPAY_LENGTHS[i]) {
				return true;
			}
		}
		return false;
	}
	function isChinaUnion(cardNumber) {
		return isChinaUnionPrefix(cardNumber) && isChinaUnionLength(cardNumber);
	}

// Switch helper functions

  var SWITCH_PREFIXES = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var SWITCH_LENGTHS = [16, 18, 19];

  	function isSwitchPrefix(cardNumber) {
		for (var i=0; i<SWITCH_PREFIXES.length; i++) {
			if (cardNumber.indexOf(SWITCH_PREFIXES[i].toString()) === 0) {
				return true;
			}
		}
		return false;
	}
	function isSwitchLength(cardNumber) {
		for (var i=0; i<SWITCH_LENGTHS.length; i++) {
			if (cardNumber.length === SWITCH_LENGTHS[i]) {
				return true;
			}
		}
		return false;
	}
	function isSwitch(cardNumber) {
		return isSwitchPrefix(cardNumber) && isSwitchLength(cardNumber);
	}


// Here is the actual return part

	if (isSwitch(cardNumber)) {
		return "Switch";
	} else if ((firstTwo === '38' || firstTwo === '39') && length === 14) {
  	return "Diner's Club";
  } else if ((firstTwo === '34' || firstTwo === '37') && length === 15) {
  	return "American Express";

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  } else if (firstOne === '4' && (length === 13 || length === 16 || length === 19)) {
  	return "Visa";
  } else if ((firstTwo === '51' || firstTwo === '52' || firstTwo === '53' || firstTwo === '54' || firstTwo === '55') && length === 16) {
  	return "MasterCard";

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  } else if ((firstFour === '6011' || firstThree === '644' || firstThree === '645' || firstThree === '646' ||
  	firstThree === '647' || firstThree === '648' || firstThree === '649' || firstTwo === '65') && (length === 16 || length === 19)) {
  	return "Discover";
  } else if ((firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304') && (length >= 12 && length <= 19)) {
  	return "Maestro";

  } else if (isChinaUnion(cardNumber)) {
	return "China UnionPay";
  } else {
  	return "Unknown Credit Card Type";
  }


};


