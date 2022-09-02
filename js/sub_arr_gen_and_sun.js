function sub_arr_gen(arr) {
    let len = arr.length
    let sub_arr = []
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < (len-i); j++) {
            let temp = []
            let count = 0
            while(count <= i) {
                temp.push(arr[j + count])
                count++
            }
            sub_arr.push(temp)
        }
    }

    return sub_arr
}
