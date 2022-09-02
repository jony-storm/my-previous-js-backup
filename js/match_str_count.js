function pattern_match(str, mstr) {
    let count = 0;
    let s_len = str.length
    let m_len = mstr.length
    let len = s_len - m_len;
    for(let i = 0; i < len + 1; i++) {
        if(str[i] == mstr[0]) {
            for(let j = 1; j < mstr.length; j++) {
                if(str[i + j] = mstr[j]) {
                   continue
                } else {
                    i = i + j
                    break;
                }
            }
            console.log(count += 1)
            i =i + mstr.length
        }
        else  {
            continue;
        }
    }
}



// for(let j = 1; j < m_len; j++) {
//     if(str[i + j] == mstr[j]) {
//         continue
//     } else {
//         i = i + j
//         break
//     }
//     count += 1
//     console.log("Count: %d", count)
// }
// i += m_len
// console.log("I: " + i)