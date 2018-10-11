//calculator.js
function add(numbers){
	if(numbers == "")
		return 0;

	
	if(numbers.includes(",") || numbers.includes("\n")){
		var numberArray = numbers.split(/[\n,]+/);

		if(numbers.includes("-")){
			checkNegativeNumbers(numberArray);
		}
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

function checkNegativeNumbers(numberArray){
	var negativeArray = [];
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) < 0){
			negativeArray.push(numberArray[i]);
		}
	}
	if (negativeArray.length > 0){
		throw new Error("Negatives not allowed: " + negativeArray.toString());
	}
}
module.exports = add;