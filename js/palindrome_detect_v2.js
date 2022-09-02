function detect_odd_palindromes(str="abcdcbaabcdedconklboopoowxcqqcv") {
    let len = str.length
    let palindromes_arr = []
    let i = 1
    console.log(str)
    while(i < len) {
        let palin_start = i - 1
        let palin_end = i + 1
        if(str[palin_start] == str[palin_end]) {
            for(let j = palin_start; j >= 0; j--) {
                if(str[j] == str[palin_end]) {
                    palin_start = j
                    palin_end += 1
                    continue
                } 
            }
            console.log("palindromes: " +  str.substring(palin_start, palin_end))
            palindromes_arr.push({palin_start : palin_start, palin_end: palin_end - 1})
        }
        i = palin_end
    }
    return palindromes_arr
}

function detect_odd_palindromes(str="abcdcbaabcdedconklboopoowxcqqcv", min=1) {
    let len = str.length
    let arr = []
    let i = 1
    console.log(str)
    while(i < len) {
        let palin_start = i - 1
        let palin_end = i + 1
        let flag = 0
        while(str[palin_start] == str[palin_end]) {
            palin_start -= 1
            palin_end += 1
            flag += 1
        }
        palin_start += 1
        if (flag >= min) {
            console.log("palindromes: " +  str.substring(palin_start, palin_end))
            arr.push({palin_start : palin_start, palin_end: palin_end - 1})
        }
        i++
    }
    let colored_str = str.substring(-1, arr[0].palin_start) + "\033[31m" + str.substring(arr[0].palin_start, arr[0].palin_end + 1) + "\033[0m"
    let j = 1
    let arr_len = arr.length
    while(j < arr_len - 1) {
        colored_str += str.substring(arr[j-1].palin_end + 1, arr[j].palin_start) + "\033[31m" +  str.substring(arr[j].palin_start, arr[j].palin_end + 1) + "\033[0m"
        j++
    }
    colored_str += str.substring(arr[j - 1].palin_end + 1, arr[j].palin_start) + "\033[31m" +  str.substring(arr[j].palin_start, arr[j].palin_end + 1) + "\033[0m" + str.substring(arr[j].palin_end + 1, len)
    console.log(colored_str)
    return arr
}


function detect_even_palindromes(str="abcdcbaabcdedconklboopoowxcqqcv", min=1) {
    let len = str.length
    let arr = []
    let i = 1
    console.log(str)

    while(i < len) {
        let palin_start = i
        let palin_end = i + 1
        let flag = 0
        while(str[palin_start] == str[palin_end]) {
            palin_start -= 1
            palin_end += 1
            flag += 1
        }
        palin_start += 1
        if (flag >= min) {
            arr.push({palin_start : palin_start, palin_end: palin_end - 1})
        }
        i++
    }

    let colored_str = str.substring(-1, arr[0].palin_start) + "\033[31m" + str.substring(arr[0].palin_start, arr[0].palin_end + 1) + "\033[0m"
    let j = 1
    let arr_len = arr.length
    while(j < arr_len - 1) {
        colored_str += str.substring(arr[j-1].palin_end + 1, arr[j].palin_start) + "\033[31m" +  str.substring(arr[j].palin_start, arr[j].palin_end + 1) + "\033[0m"
        j++
    }
    colored_str += str.substring(arr[j - 1].palin_end + 1, arr[j].palin_start) + "\033[31m" +  str.substring(arr[j].palin_start, arr[j].palin_end + 1) + "\033[0m" + str.substring(arr[j].palin_end+1, len)
    console.log(colored_str)
    return arr
}