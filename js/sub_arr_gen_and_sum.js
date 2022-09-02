function sub_arr_gen_sum(arr, num) {
    let len = arr.length
    let sub_arr = []
    let min_length = 0
    let min_length_arr = []
    let sum = 0
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < (len-i); j++) {
            let temp = []
            let count = 0
            while(count <= i) {
                temp.push(arr[j + count])
                count++
            }
            sub_arr.push(temp)
            let sub_arr_sum = 0
            if(min_length <= i && sum != num) {
                for(let ele = 0; ele <= i; ele++) {
                    sub_arr_sum += temp[ele]
                }
                if(num == sub_arr_sum) {
                    min_length_arr = temp
                    min_length = i
                    sum = sub_arr_sum
                }
            }
        }
    }

    return {sub_arr, min_length_arr, sum}
}