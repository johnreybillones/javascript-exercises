const reverseString = function(string) {
	let stringArray = string.split("")
	stringArray.reverse()
	stringJoined = stringArray.join("")
	return stringJoined
};
// Do not edit below this line
module.exports = reverseString;
