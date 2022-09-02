var grouped_data = [[30, 35, 3], [36, 41, 10],
				   [42, 47, 18], [48, 53, 25],
				   [54, 59, 8], [60, 65, 6]]

function grouped_median(grouped_data) {
	let len = grouped_data.length
	let new_arr = [grouped_data[0][2]]
	let sum = 0
	for(let i = 1; i < len; i++) {
		sum = grouped_data[i][2] + new_arr[i -1]
		new_arr.push(sum)	
	}
	console.log("Cumulative arr:" + new_arr)
	let new_len = new_arr.length
	let total_frequency = new_arr[new_len - 1]
	console.log("Total:" + total_frequency)
	let n = total_frequency / 2
	console.log("N: " + n)
	console.log("New arr: " + new_arr)
	let median,l, fc, fm, h
	h = (grouped_data[0][1] - grouped_data[0][0]) + 1
	

	let x = -1
	for(let c = 0; c < new_len; c++) {
		if (n < new_arr[c] && n > new_arr[c - 1]) {
			x = c
			
		}
	}

	l = grouped_data[x][0]
	fc = new_arr[x - 1]
	fm = grouped_data[x][2]
	
	console.log("Value of x: " + x)
	console.log("fc: " + fc)
	console.log("l: " + l)
	console.log("fm: " + fm)
	median = (l + ((n - fc) * (h / fm)))

	return median;
}

grouped_median(grouped_data)

/*for(let k = 0; k < len; k++) {
		for(let j = 0; j < new_len; j++) {
			if (n <= new_arr[j] && n > new_arr[j - 1]) {
				fc = new_arr[j]
				l = grouped_data[k][0]
				fm = grouped_data[k][2]
			}
		}
	}*/