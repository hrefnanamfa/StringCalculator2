//calculator.js
function add(numbers){

	var numberArray;

	if(numbers == "") // if the string is empty
		return 0;

	else if(numbers.length == 1) //if the string is only 1 number
		return parseInt(numbers);

	else if(numbers[0] == "/" && numbers[1] == "/" ){ //if we get a different delimiter
		var splitter = getSplitter(numbers); // get the delimitor
		var substr = numbers.substr(numbers.indexOf("\n") + 1); // get numbers in string
		numberArray = substr.split(splitter); // make array on delimiter
	}

	else if(numbers.includes(",") || numbers.includes("\n")){ // if delimiter is , or \n
		numberArray = numbers.split(/[\n,]+/); // make array on , and \n
	}
	if(numbers.includes("-")) // if we have negative numbers
		checkNegativeNumbers(numberArray); // throw error
	return sum(numberArray);
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

function getSplitter(numbers){
	var i = 2;
	var splitter = "";

	while(numbers[i] != "\n"){
		splitter = splitter + numbers[i];
		i++;
	}
	return splitter;
}

module.exports = add;