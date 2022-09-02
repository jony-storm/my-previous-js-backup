/*

** Wed Nov 25 19:43:41 +06 2020
'lsdbarleaabbcdsljfabbc'

atgcbdc

if(a=) {
    if(b) {
        
    }
    elif(c)
} else {
    i++
    continue
}

aaabbbc

*/
let found = []
function pattern_work(str) {
    let  result = []
    let len = str.length
    for(let i =0; i < len; i++) {
        if (str[i]=='a') {
            for(let j = i+1; j < len; j++) {
                if(str[j]=='b') {
                    continue
                } 
                else if (str[j]=='c') {
                    result.push({start:i, end:j })

                    break
                }
                break
            }
        }
    }
    return result
}



function pattern_demo(str='lsdbabrleaabbcdsljfabbc') {
    let len = str.length
    let i = 0;
    let result = []
    console.log(str)
    while(i < len) {
        if(str[i] == "a") {
            for(let j = i + 1; j < len; j++) {
                if(str[j] == "b") {
                    continue
                } else if(str[j] == "c") {
                    result.push({start: i, end: j})
                    break
                } else {
                    break
                }
            }
            i++
        } else {
            i++
        }
    }
    return result
}