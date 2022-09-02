var ccn = "4408041274369853"
function verify_credit_card_num(num_str) {
	//16 digit
	let len = num_str.length
	let sum = 0;
	for(let i = len - 1; i >= 0; i--) {
		if(i % 2 != 0) {
			sum += parseInt(num_str[i])
		} else {
			let double = parseInt(num_str[i]) * 2
			if(double < 10) {
				sum += double
			} else {
				sum += parseInt((double / 10)) + (double % 10)
			}
		}
	}
	
	if((sum % 10 == 0)&& (num_str[0] == 4))
		console.log("Valid")
}