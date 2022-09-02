!DO NOT RUN ANY OF THE FOLLOWING PROGRAM 

//find  the ceiling of a number
function ceiling(str) {
    let point = str.indexOf(".")
    let len = str.length
    for(let i = point + 1; i < len; i++) {
        if(str[i] != 0) {
            console.log("Ceiling of num " + str + " is: " + (parseInt(str.substr(0, point))+1))
        } else
            console.log("Ceiling of num " + str + " is: " + parseInt(str.substr(0, point))) 
    }
}
ceiling("12.03")



//find ceiling of a number
function ceiling(str) {
    let point = str.indexOf(".")
    let len = str.length
    let i = point + 1;
    while(str[i] < len) {
        if(str[i] != 0) {
            console.log("Ceiling of num " + str + " is: " + ((parseInt(str.substr(0, point)) + 1)))
        } else {
            console.log("Ceiling of num " + str + " is: " + parseInt(str.substr(0, point)))
        }

        i++;
    }
}
ceiling("12.000")

//find ceiling
function ceiling(str) {
    let point = str.indexOf(".")
    let len = str.length
    if(str[point + 1] == 0) {
        for(let i = point + 2; i < len; i++) {
            if(str[i] == 0)
                continue 
        }
        console.log("Ceiling of num " + str + " is: " + parseInt(str.substr(0, point)));
    } else
        console.log("Ceiling of num " + str + " is: " + ((parseInt(str.substr(0, point))) + 1)) 
}
ceiling("12.03")

//find the floor of a number
function floor(str) {
    let point = str.indexOf(".")
    if (str[0] != "-") {
        console.log("Floor of num " + eval(str) + " is: " + parseInt(str.substr(0, point)))
    } else {
        console.log("Floor of num " + eval(str) + " is: " + (parseInt(str.substr(0, point)) - 1))
    }
}
floor("12.23");

//find wrong mode
function mode(arr) {
    let sorted_arr = arr.sort((a,b) => {return b - a})
    let len = sorted_arr.length
    // let len = arr.length
    let count = 0
    let new_arr = []
    for(let i = 0; i < len; i++){
        if(sorted_arr[i] == sorted_arr[i + 1]) {
            count += 1
            new_arr.push(count)
        } else {
            count = 1
            new_arr.push(count)
        }
    }
    // let new_sort = new_arr.sort((a, b) => {return b - a})
    console.log(sorted_arr)
    console.log(new_arr)
    let mode = arr[0]
    return mode
}

//find  a matched string in another string
function subStrCoun(str, mstr) {
    let count = 0;
    let len = str.length - mstr.length;
    if (mstr.length == 0) {
        console.log("The string to be matched is empty! Provide a string of length at least one!")
    } else {
        for(let i = 0; i <= len; i++) {
            if(str[i] == mstr[0]) {
                for(let j = 0; j < mstr.length; j++) {
                    if(str[i + j] = mstr[j]) {
                       continue
                    } else {
                        i = i + j
                        break;
                    }
                }
                console.log(count += 1)
                i =i + mstr.length
                // console.log(str[i] + str[i + 1] + str[i + 2])
            } else  {
                continue;
            }
        }
    }
}

//convert decimal number to binary number
function decimal_to_bin(num) {
    let arr = []
    let quotient = num / 2
    let remainder = num % 2
    let result;
    while(true) {
        if(quotient == 0) {
            return -1
        } else {
            result = remainder / 2;
            arr.push(result);
        }
    }
}

//find matching
function matching(str, mstr) {
    let count = 0;
    let slen = str.length
    let mlen = mstr.length
    for(let i = 0; i < slen - mlen; i++) {
        for(let j = i; j < mstr; j++) {
            if(str[i] == mstr[j]) {
                console.log(count + 1)
                i += mlen;
            } else {
                console.log("Not found");
            }
        }
    }
}


//min space count
var new_arr = []
function min_space_count(str, arr, pos) {
    let space_count = 0
    for(let i = 0; i < arr.length; i++) {
        if(str.substr(pos, arr[i].length)) {
            new_arr.push((str.slice(pos, arr[i].length)))
            new_arr.push(" ")
            space_count += 1
            pos += arr[i].length
        }
    }

    return(new_arr + space_count)
}

