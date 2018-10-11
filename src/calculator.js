//calculator.js
function add(numbers){
	if(numbers == "")
		return 0;

	if(numbers.includes(",") || numbers.includes("\n")){
		var numberArray = numbers.split(/[\n,]+/);
		return sum(numberArray);
	}
	else
		return parseInt(numbers);
}


function sum(numberArray){
	var total = 0;
	for(var i = 0; i < numberArray.length; i++){
		total += parseInt(numberArray[i]);
	}
	return total;
}

module.exports = add;