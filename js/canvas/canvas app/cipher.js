function encry(str, pass) { 
    let i = 0;
    let enc = ""
    while(i < str.length) {
    for(let j = 0; j < pass.length; j++) {
        if (i == str.length) {
            return enc 
        } 
        enc += String.fromCharCode(str.charCodeAt(i) + pass.charCodeAt(j))
            i += 1
        }
    }    
    
}

function decry(str, pass) { 
    let i = 0;
    let enc = ""
    while(i < str.length) {
    for(let j = 0; j < pass.length; j++) {
        if (i == str.length) {
            return enc 
        } 
        enc += String.fromCharCode(str.charCodeAt(i) - pass.charCodeAt(j))
            i += 1
        }
    }    
    
}
