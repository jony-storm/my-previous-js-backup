merge array a and b
var a = [1,1,2,3,4,9]
var b = [2,2,3,5,7]
var c = [1,1,2,2,2,3,2,4,5,7,9]
function sortedArr(arr_a, arr_b){
	let a_len = arr_a.length
	let b_len = arr_b.length
	let sorted_arr = []
	let loop_len = a_len < b_len ? a_len : b_len
	let i = 0
	while(i < loop_len) {
			if((arr_a[i] < arr_b[i]) && (arr_b[i] < arr_a[i + 1])) {
				sorted_arr.push(arr_a[i])
				sorted_arr.push(arr_b[i])
				sorted_arr.push(arr_a[i + 1])
			} else if((arr_a[i] < arr_b[i]) && (arr_b[i] > arr_a[i + 1])) {
				sorted_arr.push(arr_a[i])
				sorted_arr.push(arr_a[i + 1])
				sorted_arr.push(arr_b[i])
			} else if ((arr_a[i] > arr_b[i]) && (arr_b[i] < arr_a[i + 1])){
				sorted_arr.push(arr_b[i])
				sorted_arr.push(arr_a[i])
				sorted_arr.push(arr_a[i + 1])
			} else if((arr_a[i] > arr_b[i]) && (arr_b[i] > arr_a[i + 1])) {
				sorted_arr.push(arr_b[i])
				sorted_arr.push(arr_a[i + 1])
				sorted_arr.push(arr_a[i])
			} else {
				sorted_arr.push(arr_a[i])
				sorted_arr.push(arr_b[i])
			}
		i++
	}

	return (sorted_arr)
}
