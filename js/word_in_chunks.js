function word_count(str, chunk_size) {
    let len = Math.floor((cleared_str.length / chunk_size))
    let i = 0
    let j = 0
    let word_count_arr = []
    while(i < len) {
        let obj = {start: false, end:false, count:0}
        let chunk_str = str.substring(0, chunk_size)

        // counts confirmed words in a single chunk and start and ends state
        while(j < chunk_str.length) {
            if(chunk_str[i] != " ") {
                j++
                continue
            } else {
                j++
                obj.count += 1
            }
        }

       
        word_count_arr.push(obj)
        chunk_size += j
        i++
    } 
    let total_word = 0
    for(let i = 0; i < word_count_arr.length; i++) {
        total_word += word_count_arr[i].count
    }

    console.log(word_count_arr + "\n" + total_word) 
}




// this is an string
function wordcount(str) {
    let len = str.length
    let inside = false
    let outside = true
    let count = 0
    let i = 0
    let sep = ", \t\n\f.:-"
    while(i < len) {

        //if (str[i] == ' ' || str[i] == '\t' || str[i] == '\n') {
        if (sep.indexOf(str[i]) > -1) {
            if (outside) {
                i++;
            } else {
                outside = true
                inside = false
                i++;
            }
        } else {
            if (outside) {
                count += 1
                inside = true
                outside = false
                i++
            } else {
                i++
            }
        }
    }
    return count
}


function wordcount(str, chunk_size) {
    let len = str.length
    let loop_len;
    if(len % chunk_size == 0) {
        loop_len = Math.floor(len / chunk_size)
    } else {
        loop_len = Math.ceil(len / chunk_size)
    }
    
    let word_count_arr = []
    let i = 0
    let j = 0
    let sep = ", \t\n\f.:-"
    while(i < loop_len) {
        //if (str[i] == ' ' || str[i] == '\t' || str[i] == '\n') {
        let chunk_str = str.substring(j, chunk_size)
        let obj = {start:false, end:false, count:0}
        let count = 0
        let inside = false
        let outside = true
        let inner_len = chunk_size
        while(j < inner_len && j < len) {
            if (sep.indexOf(chunk_str[j]) > -1) {
                if (outside) {
                    j++;
                } else {
                    outside = true
                    inside = false
                    j++;
                }
            } else {
                if (outside) {
                    count += 1
                    obj.count = count
                    inside = true
                    outside = false
                    j++
                } else {
                    j++
                }
            }
        }

        if (sep.indexOf(chunk_str[j - 1]) > -1) {
            obj.end = true
        } 

        if(sep.indexOf(chunk_str[j - chunk_size] >-1)){
            obj.start = true
        }
        console.log("Chunk_str: " + chunk_str + " Chunk_size: " + chunk_size + " J: " + j + " Count: " + count)
        inner_len += chunk_size
        word_count_arr.push(obj)
        i++
    }

    //'what   els*e can we d*o : when w*e're fellin*g low  '
    // console.log("total_word_count: " + count + " chunk_size: " + chunk_size + " j: " + j)
    console.log(word_count_arr)
}





//arr version

function wordcount(str) {
    let len = str.length
    
    let inside = false
    let outside = true
    let count = 0
    let i = 0
    let sep = ", \t\n\f.:-"
    while(i < len) {

        //if (str[i] == ' ' || str[i] == '\t' || str[i] == '\n') {
        if (sep.indexOf(str[i]) > -1) {
            if (outside) {
                i++;
            } else {
                outside = true
                inside = false
                i++;
            }
        } else {
            if (outside) {
                count += 1
                inside = true
                outside = false
                i++
            } else {
                i++
            }
        }
    }
    return count
}