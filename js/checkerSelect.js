let arr_2D = [['*', '*', '*', '*'],['*', '*', '*', '*'], ['*', '*', '*', '*']]
function checkerSelect(arr_2D, offset) {
	let copy = arr_2D
	let len = copy.length
	let len2 = copy[0].length
	let i, j = 0
	while(i < len) {
		while(j <= len2) {
			copy[i][j] = 'x'
			j += offset
		}
		i += 1
	}
	return copy
}