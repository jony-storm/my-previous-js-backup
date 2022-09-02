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

function detect_odd_palindromes(str="abcdcbaabcdedconklboopoowxcqqcv") {
    let len = str.length
    let palindromes_arr = []
    let i = 1
    console.log(str)
    while(i < len) {
        let palin_start = i - 1
        let palin_end = i + 1
        if(str[palin_start] == str[palin_end]) {
            while(str[palin_start] != str[palin_end]) {
                palin_start -= 1
                palin_end += 1
            }
            console.log("palindromes: " +  str.substring(palin_start, palin_end))
            palindromes_arr.push({palin_start : palin_start, palin_end: palin_end - 1})
        }
        i = palin_end
    }
    return palindromes_arr
}

function detect_even_palindromes(str="abbabcdlbooppoowxcqqcv") {
    let len = str.length
    let palindromes_arr = []
    let i = 1
    while(i < len) {
        let palin_start = i - 1
        let palin_end = i
        if(str[palin_start] == str[palin_end]) {
            for(let j = palin_start; j < i; j--) {
                if(str[j] == str[palin_end]) {
                    palin_start = j
                    palin_end += 1
                    continue
                } else {
                    console.log("palindromes: " +  str.substring(palin_start, palin_end))
                    palindromes_arr.push({palin_start : palin_start, palin_end: palin_end - 1})
                    break
                }
            }
        }
        i = palin_end
    }
    return palindromes_arr
}

