function fibonacci(num) {
// your code here
	let num1 = 0
	let num2 = 1
	let fib = 0

	for(let i = 3 ;i <= num;i++){
		fib = num1+num2
		num1 = num2
		num2 = fib
	}
	return fib
}

module.exports = fibonacci;
