// date Wed Dec  2 19:04:04 +06 2020
function getRandomBetTwoValue(min, max) {
    if(max < min) {
        return max
    } else {
        return Math.floor(Math.random() * (max - min) + min)
    }
}


function create_palindrome_str(len) {
    let palindrome_arr = new Array(len)
    let loop_len = len / 2

    for(let i = 0; i < loop_len; i++) {
        palindrome_arr[i] = String.fromCodePoint(getRandomBetTwoValue(97, 122))
        palindrome_arr[len - i + 1] = palindrome_arr[i]
    }

    if(len % 2 == 0) {
        return palindrome_arr.join("")
    } else {
        let sliced = palindrome_arr.slice(0, loop_len)
        return sliced.join("") + String.fromCodePoint(getRandomBetTwoValue(97, 122)) + sliced.reverse().join("")
    }
}

function palindrome_test_str_gen(len) {
    let arr = []
    let palindrome_or_not = getRandomBetTwoValue(0, 5)
    let total_str_len = 0
    let i = 0
    while (total_str_len < len) {
        let left_over_len
        if(palindrome_or_not != 0) {
            arr.push(String.fromCodePoint(getRandomBetTwoValue(97, 122)))
            palindrome_or_not = getRandomBetTwoValue(0, 5)
            total_str_len += 1
            i++
        } else {
            left_over_len = len - total_str_len
            arr.push(create_palindrome_str(getRandomBetTwoValue(2, left_over_len)))
            total_str_len += arr[i].length
            palindrome_or_not = getRandomBetTwoValue(0, 5)
            i += 1
        }
    }
    return arr.join("")
}


function dataset_gen(min_len, max_len, count) {
    // let result = ""
    for(let i = 0; i < count; i++) {
        // result += palindrome_test_str_gen(getRandomBetTwoValue(min_len, max_len)) + ""
        console.log(palindrome_test_str_gen(getRandomBetTwoValue(min_len, max_len)))
    }
}



//not-my version
//Thu Dec  3 08:55:43 +06 2020
//palindrome_str='abcdsdef'
function palindrome_test_str_gen(len) {
    let palindrome_str = ""
    let palindrome_or_not = getRandomBetTwoValue(0, 4)
    let total_str_len = 0
    let i = 0
    while (total_str_len < len) {
        let left_over_len
        if(palindrome_or_not != 0) {
            palindrome_str += String.fromCodePoint(getRandomBetTwoValue(97, 122))
            palindrome_or_not = getRandomBetTwoValue(0, 4)
            total_str_len += 1
            i++
        } else {
            left_over_len = len - total_str_len
            let rand_palin_len = getRandomBetTwoValue(2, left_over_len)
            if(rand_palin_len % 2 == 0) {
                palindrome_str += palindrome_str.substr()
            } else {
                palindrome_str += palindrome_str.substr(i - rand_palin_len / 2, i).reverse()
            }
            total_str_len += arr[i].length
            palindrome_or_not = getRandomBetTwoValue(0, 4)
            i += 1
        }
    }
    return arr.join("")
}