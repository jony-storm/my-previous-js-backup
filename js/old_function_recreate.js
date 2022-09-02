//wk my name is wakia (wakia)
function substrcount(str, mstr) {
    let mstr_len = mstr.length
    let outer_loop_len = str.length - mstr_len
    let count = 0
    let i = 0
    // abcdefg
    //    defg
    while(i <= outer_loop_len) {
        let j = 0
        let flg = false
        while(j < mstr_len) {
            if(str[i + j] == mstr[j]) {
                flg = true
                j += 1
            } else {
                flg = false
                j = j + 1
                break
            }
        }

        if(flg) {
            count += 1
            i = i + mstr_len
        } else {
            i = i + j
        }
    }

    console.log("str: " + str + " ----> substr: " + mstr + " ----> count: " + count)
}



//str: my name is wakia akter belly...; pass: "wakia";
//enc: wakiawakiawakiawakiawakiawakiaw
function encrypt(str, pass) {
    let str_len = str.length
    let pass_len = pass.length
    let encrypted_str = ""
    let i = 0
    while(i < str_len) {
        let j = 0
        while(j < pass_len) {
            if(i >= str_len) {
                return  encrypted_str
            } else {
                encrypted_str += String.fromCharCode(str.charCodeAt(i) + pass.charCodeAt(j))
                j += 1
                i += 1
            }
        }
    }
}


function decrypt(str, pass) {
    let str_len = str.length
    let pass_len = pass.length
    let encrypted_str = ""
    let i = 0
    while(i < str_len) {
        let j = 0
        while(j < pass_len) {
            if(i >= str_len) {
                return  encrypted_str
            } else {
                encrypted_str += String.fromCharCode(str.charCodeAt(i) - pass.charCodeAt(j))
                j += 1
                i += 1
            }
        }
    }
}


function encrypt(str, pass) {
    let str_len = str.length
    let pass_len = pass.length
    let encrypted_str = ""
    let i = 0
    console.log("str_len: " + str_len + " pass_len: " + pass_len)
    while(i < str_len) {
        let j = 0
        while(j < pass_len) {
            if(i >= str_len) {
                // encrypted_str += String.fromCharCode(str[i + j].charCodeAt(0) + pass[j].charCodeAt(0))
                // j += 1
                
                return encrypted_str
            } else {
               encrypted_str += String.fromCharCode(str.charCodeAt(i) ^ pass.charCodeAt(j))
                j += 1
                i += 1
                // console.log(encrypted_str)
            }
        }

        // i = i + j
    }

    console.log("toencrypt: " + str + " & passphrase: " + pass + " & encrypted_str: " + encrypted_str)
    // return encrypted_str
}