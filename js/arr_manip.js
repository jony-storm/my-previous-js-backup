function zeros_like(row, col) {
	let arr = new Array(row)
	let new_arr = []
	for(let i = 0; i < row; i++) {
		for(let j = 0; j < col; j++) {
			new_arr[j] = 0
		}
		arr[i] = new_arr
	}
	return arr
}



arr = [ [ 1, 0, 1, 0, 1 ],
  		[ 0, 1, 1, 1, 0 ],
  		[ 1, 1, 1, 1, 1 ],
  		[ 0, 1, 1, 1, 0 ],
  		[ 1, 0, 1, 0, 1 ],]
arr1 = [[0, 0, 0, 0, 0],
	   [0, 0, 0, 0, 0],
	   [0, 0, 0, 0, 0],
	   [0, 0, 0, 0, 0],
	   [0, 0, 0, 0, 0],]
function change_diagonal_vertical_horizontal() {
	let arr = [[0, 0, 0, 0, 0],
	   [0, 0, 0, 0, 0],
	   [0, 0, 0, 0, 0],
	   [0, 0, 0, 0, 0],
	   [0, 0, 0, 0, 0],]
	let row = arr.length
	let col = arr[0].length
	for(let i = 0; i < row; i++) {
		let one = Math.floor(row / 2)
		arr[i][one] = 1
		arr[one][i] = 1
	}
	let d = 0
	while(d < row) {
		arr[d][d] = 1
		d += 1	
	}


	d = col - 1
	r = 0
	while(d >= 0) {
		arr[r][d] = 1
		d -= 1
		r += 1
	}
	return (arr)
}