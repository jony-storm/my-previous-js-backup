function equal_z_ones(str) {
    let len = str.length
    let i, countZ = 0, countOne = 0;
    for(i = 0; i < len; i++) {
        if (str[i] == "0") {
            countZ++;
        } else if (str[i] == "1") {
            countOne++
            break
        } else {
            return "error"
        }
    }

    for(let j = i + 1; j < len; j++) {
        if(str[j] == '1') {
            countOne++
        } else if(str[j] == "0") {
            return "error"
        } else {
            return "error"
        }
    }

    console.log("countZero: " + countZ + ", countOne: " + countOne)
}
    
    