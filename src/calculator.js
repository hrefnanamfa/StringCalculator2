//calculator.js
function add(number){
	if(number == "")
	return 0;
	
	if(number.includes(",")){
		var numberArray = number.split(",");
		return parseInt(numberArray[0]) + parseInt(numberArray[1]);
	}
	else
		return parseInt(number);
}

module.exports = add;