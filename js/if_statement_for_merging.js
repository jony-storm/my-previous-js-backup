if(arr_a[i] == arr_b[i]) {
	sorted_arr.push(arr_a[i])
	sorted_arr.push(arr_b[i])
}
if ((arr_a[i] < arr_b[i]) && (arr_b[i] == arr_a[i + 1])) {
	sorted_arr.push(arr_a[i])
	sorted_arr.push(arr_b[i])
	sorted_arr.push(arr_a[i + 1])

}

if((arr_a[i] > arr_b[i]) && (arr_a[i] == arr_b[i + 1])) {
	sorted_arr.push(arr_b[i])
	sorted_arr.push(arr_b[i + 1])
	sorted_arr.push(arr_b[i])
}

if(arr_a[i] == arr_b[i]) {
	sorted_arr.push(arr_a[i])
	if(arr_b[i] <= arr_a[i + 1]) {
		sorted_arr.push(arr_b[i])
		sorted_arr.push(arr_a[i + 1])
	} else {
		sorted_arr.push(arr_a[i + 1])
		sorted_arr.push(arr_b[i])
	}
} else if(arr_a[i] < arr_b[i]) {
	sorted_arr.push(arr_a[i])
	if(arr_b[i] <= arr_a[i + 1]) {
		sorted_arr.push(arr_b[i])
		sorted_arr.push(arr_a[i + 1])
	} else {
		sorted_arr.push(arr_a[i + 1])
		sorted_arr.push(arr_b[i])
	}
} else {
	sorted_arr.push(arr_b[i])
	sorted_arr.push(arr_a[i])
}


/*if((arr_a[i] == arr_b[i]) && (arr_b[i] == arr_a[i + 1])) {
	sorted_arr.push(arr_a[i])
	sorted_arr.push(arr_b[i])
} else if((arr_a[i] < arr_b[i]) && (arr_b[i] < arr_a[i + 1])) {
	sorted_arr.push(arr_a[i])
	sorted_arr.push(arr_b[i])
	sorted_arr.push(arr_a[i + 1])
} else if((arr_a[i] > arr_b[i]) && (arr_b[i] > arr_a[i + 1])){
	sorted_arr.push(arr_b[i])
	sorted_arr.push(arr_a[i + 1])
	sorted_arr.push(arr_a[i])
} else {
	sorted_arr.push(arr_a[i])
}*/



if(arr_b[i] < arr_a[i + 1]) {
	sorted_arr.push(arr_b[i])
	sorted_arr.push(arr_a[i + 1])
} else {
	sorted_arr.push(arr_a[i + 1])
	sorted_arr.push(arr_b[i])
}