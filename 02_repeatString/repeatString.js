const repeatString = function(string, num) {
	if (num < 0) {
		return 'ERROR'
	} else if (string == ""){
		return ''
	}
	let s = ""
	for(let i=0; i<num; i++) {
		s += string
	}
	return s
};

//repeatString('hey', 3)
// Do not edit below this line
module.exports = repeatString;
