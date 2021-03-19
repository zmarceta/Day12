// Only change code below this line
function sumFibonacci(num) {
	if (num < 1) {
		return 0;
	} else if (num == 1 ) {
		return 1;
	}
	var fibonacciArray = [1,1];
	var sum = 0;
	for (var i = 1; i <= num; i++)
	{	
		var nextNumber = fibonacciArray[i-1] + fibonacciArray[i];
		if (nextNumber <= num) {
			fibonacciArray.push(nextNumber);
		} else {
			break;
		}
	}
	for (var i = 0; i < fibonacciArray.length; i++)
	{	
		if (fibonacciArray[i] % 2 == 1)
		   sum += fibonacciArray[i];
	}
	return sum;
}
// Only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;