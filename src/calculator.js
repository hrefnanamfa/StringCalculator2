//calculator.js
function add(numbers){
	if(numbers == "")
	return 0;
	
	if(numbers.includes(",")){
		var numberArray = numbers.split(",");
		var total = 0;
		for(var i = 0; i < numberArray.length; i++){
			total += parseInt(numberArray[i]);
		}
		return total;
	}
	else
		return parseInt(numbers);
}

module.exports = add;