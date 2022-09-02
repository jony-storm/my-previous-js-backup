function patt_match(str, patt){
    let patt_length = patt.length
    let loop_length = str.length - patt_length
    let i = 0
    let count = 0
    let match_indx = []
    if (patt_length <= 0) {
        return 0
    }
    while(i <= loop_length){
        let j = 0
        let flg = true
        while(j < patt_length) { 
            if (str[i + j] != patt[j]) {
                j = j + 1
                flg = false
                break
            } else {
                j = j + 1
            }
        }
        if (flg) {
            match_indx.push(i)
            i = i + patt_length
            count = count + 1
        } else {
            i = i + j
        }
    }

    let match_indx_len = match_indx.length
    let color_str = str.substring(0, match_indx[0])

    for(let i = 0; i < match_indx_len; i++) {
        color_str += "\033[31m" + str.substring(match_indx[i], match_indx[i]  + patt_length) + "\033[0m" + str.substring(match_indx[i] + patt_length, match_indx[i + 1])
    }
    console.log(color_str)
    return count
}