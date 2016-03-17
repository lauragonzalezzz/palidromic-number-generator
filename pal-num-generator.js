function palidromeNumberGenerator (num) {
	var count = 0;
	var forward = num;
	var backwards = num.toString().split('').reverse().join('');
	backwards = Number(backwards);	

	
	while (forward !== backwards) {
		count++
		forward += backwards;
		backwards = forward.toString().split('').reverse().join('');
		backwards = Number(backwards);
	}
	return {
		value : forward,
		steps : count 
	}
}
console.log(palidromeNumberGenerator(12587));