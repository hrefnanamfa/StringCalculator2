//calculator.js
function add(numbers){
	if(numbers == "") // if the string is empty
		return 0;
	
	if(numbers.includes(",") || numbers.includes("\n")){
		var numberArray = numbers.split(/[\n,]+/); // split on , and \n

		if(numbers.includes("-")) // if we have negative numbers
			checkNegativeNumbers(numberArray);
		
		return sum(numberArray);
	}
	else
		return parseInt(numbers); // if the string has only 1 number
}

function sum(numberArray){
	var total = 0;
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) <= 1000){
			total += parseInt(numberArray[i]);
		}
	}
	return total;
}

function checkNegativeNumbers(numberArray){
	var negativeArray = []; // create empty negativeArray
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) < 0) // if the value in numberArray is < 0
			negativeArray.push(numberArray[i]); // add it to the negativeArray
		
	}
	if (negativeArray.length > 0) // if there is more than 0 values in negativeArray
		throw new Error("Negatives not allowed: " + negativeArray.toString()); //throw error
}
module.exports = add;