function fibonacci(num) {
// your code here
	let num1 = 0
	let num2 = 1
	let fib = 0

	for(int i = ;i <= num;i++){
		fib = num1+num2
		num1 = num2
		num2 = fib
	}
	return fib
}

module.exports = fibonacci;
