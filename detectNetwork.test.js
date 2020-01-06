/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

describe('Discover', function() {
	var should = chai.should;
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
  	detectNetwork('6011567890123456').should.equal('Discover')
  });

  it('has a prefix of 644 and a length of 16', function() {
  	detectNetwork('6444567890123456').should.equal('Discover')
  });

  it('has a prefix of 645 and a length of 16', function() {
  	detectNetwork('6454567890123456').should.equal('Discover')
  });

  it('has a prefix of 646 and a length of 16', function() {
  	detectNetwork('6464567890123456').should.equal('Discover')
  });

  it('has a prefix of 647 and a length of 16', function() {
  	detectNetwork('6474567890123456').should.equal('Discover')
  });

  it('has a prefix of 648 and a length of 16', function() {
  	detectNetwork('6484567890123456').should.equal('Discover')
  });

  it('has a prefix of 649 and a length of 16', function() {
  	detectNetwork('6494567890123456').should.equal('Discover')
  });

  it('has a prefix of 65 and a length of 16', function() {
  	detectNetwork('6534567890123456').should.equal('Discover')
  });

  it('has a prefix of 6011 and a length of 19', function() {
  	detectNetwork('6011567890123456789').should.equal('Discover')
  });

  it('has a prefix of 644 and a length of 19', function() {
  	detectNetwork('6444567890123456789').should.equal('Discover')
  });

  it('has a prefix of 645 and a length of 19', function() {
  	detectNetwork('6454567890123456789').should.equal('Discover')
  });

  it('has a prefix of 646 and a length of 19', function() {
  	detectNetwork('6464567890123456789').should.equal('Discover')
  });

  it('has a prefix of 647 and a length of 19', function() {
  	detectNetwork('6474567890123456789').should.equal('Discover')
  });

  it('has a prefix of 648 and a length of 19', function() {
  	detectNetwork('6484567890123456789').should.equal('Discover')
  });

  it('has a prefix of 649 and a length of 19', function() {
  	detectNetwork('6494567890123456789').should.equal('Discover')
  });

  it('has a prefix of 65 and a length of 19', function() {
  	detectNetwork('6534567890123456789').should.equal('Discover')
  });
});


// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

describe('Maestro', function() {
  var should = chai.should;
  // Write full test coverage for the Maestro card
  it('has a prefix of 5018 and a length of 12', function() {
  	detectNetwork('501856789012').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 12', function() {
  	detectNetwork('502056789012').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 12', function() {
  	detectNetwork('503856789012').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 12', function() {
  	detectNetwork('630456789012').should.equal('Maestro')
  });

  it('has a prefix of 5018 and a length of 13', function() {
  	detectNetwork('5018567890123').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 13', function() {
  	detectNetwork('5020567890123').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 13', function() {
  	detectNetwork('5038567890123').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 13', function() {
  	detectNetwork('6304567890123').should.equal('Maestro')
  });

  it('has a prefix of 5018 and a length of 14', function() {
  	detectNetwork('50185678901234').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 14', function() {
  	detectNetwork('50205678901234').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 14', function() {
  	detectNetwork('50385678901234').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 14', function() {
  	detectNetwork('63045678901234').should.equal('Maestro')
  });

  it('has a prefix of 5018 and a length of 15', function() {
  	detectNetwork('501856789012345').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 15', function() {
  	detectNetwork('502056789012345').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 15', function() {
  	detectNetwork('503856789012345').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 15', function() {
  	detectNetwork('630456789012345').should.equal('Maestro')
  });

  it('has a prefix of 5018 and a length of 16', function() {
  	detectNetwork('5018567890123456').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 16', function() {
  	detectNetwork('5020567890123456').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 16', function() {
  	detectNetwork('5038567890123456').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 16', function() {
  	detectNetwork('6304567890123456').should.equal('Maestro')
  });

  it('has a prefix of 5018 and a length of 17', function() {
  	detectNetwork('50185678901234567').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 17', function() {
  	detectNetwork('50205678901234567').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 17', function() {
  	detectNetwork('50385678901234567').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 17', function() {
  	detectNetwork('63045678901234567').should.equal('Maestro')
  });

  it('has a prefix of 5018 and a length of 18', function() {
  	detectNetwork('501856789012345678').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 18', function() {
  	detectNetwork('502056789012345678').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 18', function() {
  	detectNetwork('503856789012345678').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 18', function() {
  	detectNetwork('630456789012345678').should.equal('Maestro')
  });

  it('has a prefix of 5018 and a length of 19', function() {
  	detectNetwork('5018567890123456789').should.equal('Maestro')
  });

  it('has a prefix of 5020 and a length of 19', function() {
  	detectNetwork('5020567890123456789').should.equal('Maestro')
  });

  it('has a prefix of 5038 and a length of 19', function() {
  	detectNetwork('5038567890123456789').should.equal('Maestro')
  });

  it('has a prefix of 6304 and a length of 19', function() {
  	detectNetwork('6304567890123456789').should.equal('Maestro')
  });
});

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

describe('China UnionPay', function() {
  var should = chai.should;

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

  var arrayOfChinaUnionLengths = [];
  
  for (var i = 0; i < CHINA_UNIONPAY_LENGTHS.length; i++) {
  	var arrayToString = [];
  	for (var j = 0; j < CHINA_UNIONPAY_LENGTHS[i]; j++) {
 	  arrayToString.push('0');
 	}
 	arrayOfChinaUnionLengths.push(arrayToString.join(''));
  }

  // At this point, arrayOfChinaUnionLengths has one element for each possible length, in all zeroes

  // This function truncates and appends a prefix onto a string.
  // For example, replacePrefix('abc', '0000000') returns 'abc0000'

  function replacePrefix(prefix, string) {
    var short = string.slice(prefix.toString().length);
  	return prefix + short;
  }

  // This is the function loop where we assert every possible China UnionPay prefix/length combination

  for (var i = 0; i < arrayOfChinaUnionLengths.length; i++) {
  	for (var j = 0; j < CHINA_UNIONPAY_PREFIXES.length; j++) {
  		var testString = 'has a prefix of ' + CHINA_UNIONPAY_PREFIXES[j].toString() + ' and a length of ' + arrayOfChinaUnionLengths[i].length;
  		var replacedPrefix = replacePrefix(CHINA_UNIONPAY_PREFIXES[j],arrayOfChinaUnionLengths[i]);
  		(function(replaced) {
  			it(testString, function() {
  			detectNetwork(replaced).should.equal('China UnionPay');
  		});
  		}) (replacedPrefix);
  	}
  }

// var temp = '6240000000000000';

//     it('has a prefix of 624 and a length of 16', function() {
//   		detectNetwork(temp).should.equal('China UnionPay')
// 	});


 //    it('has a prefix of 624 and a length of 16', function() {
 //  		detectNetwork('62445678901234567').should.equal('China UnionPay')
	// });

  	// for (var prefix = 644; prefix <= 649; prefix++) {  
  	// 	(function(prefix) {    
  	// 		it('has a prefix of ' + prefix + ' and a length of 16');    
  	// 		it('has a prefix of ' + prefix + ' and a length of 19');  
  	// 	})(prefix)
  	// }

});

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

describe('Switch', function() {
  var should = chai.should;

  var SWITCH_PREFIXES = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var SWITCH_LENGTHS = [16, 18, 19];

  var arrayOfSwitchLengths = [];
  
  for (var i = 0; i < SWITCH_LENGTHS.length; i++) {
  	var arrayToString = [];
  	for (var j = 0; j < SWITCH_LENGTHS[i]; j++) {
 	  arrayToString.push('0');
 	}
 	arrayOfSwitchLengths.push(arrayToString.join(''));
  }

  // At this point, arrayOfSwitchLengths has one element for each possible length, in all zeroes
  // like [000000, 000000000000]

  function replacePrefix(prefix, string) {
    var short = string.slice(prefix.toString().length);
  	return prefix + short;
  }

  // Finally we can test them.


  for (var i = 0; i < arrayOfSwitchLengths.length; i++) {
  	for (var j = 0; j < SWITCH_PREFIXES.length; j++) {
  		var testString = 'has a prefix of ' + SWITCH_PREFIXES[j].toString() + ' and a length of ' + arrayOfSwitchLengths[i].length;
  		var replacedString = replacePrefix(SWITCH_PREFIXES[j],arrayOfSwitchLengths[i]);
  		(function(expected) {
  			it(testString, function() {
  			detectNetwork(expected).should.equal('Switch');
  		});
  		})(replacedString);
  	}
  }


  // for (var i = 0; i < arrayOfChinaUnionLengths.length; i++) {
  // 	for (var j = 0; j < CHINA_UNIONPAY_PREFIXES.length; j++) {
  // 		var testString = 'has a prefix of ' + CHINA_UNIONPAY_PREFIXES[j].toString() + ' and a length of ' + arrayOfChinaUnionLengths[i].length;
  // 		var replacedPrefix = replacePrefix(CHINA_UNIONPAY_PREFIXES[j],arrayOfChinaUnionLengths[i]);
  // 		(function(replaced) {
  // 			it(testString, function() {
  // 			detectNetwork(replaced).should.equal('China UnionPay');
  // 		});
  // 		}) (replacedPrefix);
  // 	}
  // }


  });

