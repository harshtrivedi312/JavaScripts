/**
 
Given 2 int values, return true if either of them is in the range 10..20 inclusive.


in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false
 */

function in1020(a, b) {
	// Code....
if(a >=10 && a <=20 || b >=10 && b <=20)
	return true;
	else{
		return false;
	}
}

exports.in1020 = in1020;