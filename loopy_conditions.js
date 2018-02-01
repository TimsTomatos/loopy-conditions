/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */
function greaterNumber(a, b) {
	if (a < b) {
		return b;
	}
	if (b < a) {
		return a;
	}
	if (a = b){
		return "Same";
	}
}
console.log(greaterNumber(8,7))	


/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */
 var n;
function stringOfNumbers(n) {
	for (i = 0; i < n.length; i--) {
		
	}
	
}
console.log(stringOfNumbers(6));

/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */

var numberSum = [1,2,3,4,5,6,7,8,9,10].reduce(sumOfArray, 0);
function sumOfArray(a, b) {
	return a + b;	
}
console.log(numberSum);

/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */

var even = [1,2,3,4,5,6,7,8,9,10];
function getEvens(even){
	for (var i = 2; i <= even.length; i = i + 2) {
		console.log(i);
	}
}
console.log(getEvens(even));
/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */

var odd = [1,2,3,4,5,6,7,8,9,10];
function getOdds(odds){
	for (var i = 1;  i <= odd.length;  i =  i + 2) {
		console.log(i);
	}
 }
console.log(getOdds(odd));

/**multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers bas
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:ed on the third param
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'eter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
/*var operator = ["add", "subtract", "divide", "multiply"]
function calculate(num1,num2, operator){
	if ("add") {
		return num1 + num2;
	}
	if ("subtract"){
		return num1 - num2;
	}
	if ("multiply") {
		return num1 * num2;
	}
	if ("divide") {
		return num1 / num2;
	}
	else {
		return "Invalid operator";
	}
}
console.log(calculate(100,200, "subtract"));*/

function calculate(operator, num1, num2){
	if (operator == "add") {
		output = num1 + num2;
	}
	if (operator == "subtract"){
		output = num1 - num2;
	}
	if (operator == "multiply") {
		 output = num1 * num2;
	}
	if (operator == "divide") {
		output = num1 / num2;
	}
	else {
		output = "Invalid operator";
	}
}
calculate("multiply", 20, 5);
console.log(output);