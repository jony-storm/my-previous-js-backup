function cusum(arr) {
	var new_arr = [arr[0]]
	var sum = 0;
	for(let i = 1; i < arr.length; i++) {
		sum = arr[i] + new_arr[i -1]
		new_arr.push(sum)
	}

	return new_arr;
}


function median(arr_of_data, arr_of_frequency) {
	var sum = 0;
	var len = arr_of_frequency.length
	for(let i = 0; i < len; i++) {
		sum += arr_of_frequency[i]
	}
	// console.log(sum)
	function cusum() {
		let new_arr = [arr_of_frequency[0]]
		let sum_of_arr = 0;
		for(let i = 1; i < len; i++) {
			sum_of_arr = arr_of_frequency[i] + new_arr[i -1]
			new_arr.push(sum_of_arr)
		}

	return new_arr;
	}

	var cusum = cusum()
	var median = 0
	if(sum % 2 != 0) {
		median = ((sum + 1) / 2)
		
	} else {
		median = (sum / 2)
	}

	for(let j = 0; j < len; j++) {
		if (median < cusum[j] && median > cusum[j - 1]) {
			console.log(arr_of_data[j])
		}
	}

	/*if(sum % 2 != 0) {
		median = ((sum + 1) / 2)
		for(let j = 0; j < len; j++) {
			if (median < cusum[j] && median > cusum[j - 1]) {
				console.log(arr_of_data[j])
			}
		}
	} else {
		median = (sum / 2)
		for(let j = 0; j < len; j++) {
			if ((median <= cusum[j] && median > cusum[j - 1])) {
				console.log((arr_of_data[j] + arr_of_data[j + 1]) / 2)
			}
		}
	}*/
}