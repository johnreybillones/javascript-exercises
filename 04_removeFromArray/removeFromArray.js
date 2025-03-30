const removeFromArray = function(array, removeElement) {
	const removeIndex = array.indexOf(removeElement)
	array.splice(removeIndex, 1)
	return array
};
//removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
