var arr = [-5, -1, -70, -2, -9];

//find the sum of the largest num you want
function sum_of_the_largest_num(count, arr) {
	let sum = 0;
	let sorted_arr = arr.sort(function(m, n) { return n - m});
	for(let i = 0; i < count; i++) {
		console.log((sum += sorted_arr[i]));
	}
}
sum_of_the_largest_num(2, arr);

//find max number 
function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
	   if (number > result) result = number;
	}
	console.log(result + "<br>");
}
max(...arr)

//reverse an array
function revArr(arr) {
    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
        return arr;
    }
    
    let len = arr.length;
    for(let i = 0; i < len / 2; i++) {
        let j = len - i - 1;
        document.getElementById("demo2").innerHTML =(swap(arr, i, j));
    }
}
revArr(arr)

//array inversion
function arrInversion(arr) {
    let sorted_arr = arr.sort(function(a, b) {return b - a})
    let len = sorted_arr.length
    for(let i = 0; i < len - 1; i++) {
        for(let j = i + 1; j < len; j++) {
            if(sorted_arr[i] > sorted_arr[j]) {
                console.log("(" + sorted_arr[i] + "," + sorted_arr[j] +")")
            }
        }
    }
}
arrInversion(arr)

//traversing nested array
function print_nested_arr(arr) {
    for(let i = 0; i < arr.length; i++)
        for(let j = 0; j < arr[i].length; j++)
            console.log(arr[i][j] + " " )
    	console.log("<br>")
}
print_nested_arr(arr)


//find the floor of a number
function floor(str) {
    let point = str.indexOf(".")
    if (str[0] != "-") {
        console.log("Floor of num " + (str) + " is: " + parseInt(str.substr(0, point)))
    } else {
        for(let i = point + 1; i < str.length; i++) {
            if(str[i] == 0) {
                continue
            } else {
                console.log("Floor of num " + (str) + " is: " + (parseInt(str.substr(0, point)) - 1))
                return
            }
        }
        console.log("Floor of num " + (str) + " is: " + parseInt(str.substr(0, point)))
    }
}
floor("-12.00") // -12
floor("-12.023")// -13


//find ceiling of a num 
function ceiling(str) {
    let point = str.indexOf(".")
    let len = str.length
    for(let i = point + 1; i < len; i++) {
        if (str[i] == 0) {
            continue
        } else {
            console.log("Ceiling of num " + (str) + " is: " + ((parseInt(str.substr(0, point)) + 1)))
            return
        }
    }
    console.log("Ceiling of num " + (str) + " is: " + parseInt(str.substr(0, point)))
}
ceiling("12.000")

//str staircase
function strStair(str) {
    let len = str.length
    let loop_num = Math.floor((-1 + Math.sqrt(1+8*len)) / 2)
    let start = 0;
    let incrementer = 0;
    let p = document.createElement("p")
    p.innerHTML = "<br>"
    for(let i = 0; i < loop_num; i++) {
        start = start + incrementer;
        let end = start + incrementer;

        for(let j = start; j <= end; j++) {
            p.innerHTML +=  str[j]
            console.log(str.slice(start, end + 1))
        }
        p.innerHTML += "<br>"
        incrementer += 1
    }
    p.innerHTML += "<br>"
    document.body.appendChild(p)
}

//binary search
function binary_search(arr, val) {
    let sorted_arr = arr.sort(function(a, b) { return a - b })
    let beg = 0
    let end = sorted_arr.length
    let pos = -1
    while(beg < end) {
        let mid = (beg + end) / 2
        if(sorted_arr[mid] == val) {
            pos = mid 
            console.log("Index of " + val + " is: " + pos)
            break
        } else if(sorted_arr[mid] > val) 
            end = mid - 1
        else
            beg = mid + 1
    }
    
    if(beg >= end && pos == -1) {
        console.log("Value " + val + " is not present in the array")
    }
}


//linear search
function linear_search(arr, val) {
    let pos = -1
    let len = arr.length
    let i = 0
    while(i < len) {
        if(arr[i] == val) {
            pos = i 
            console.log("Index of " + val + " is: " + pos)
            break
        }

        i += 1
    }

    if(i > len && pos == -1) {
        console.log("Value " + val + " is not present in the array")
    }
}


//interpolation search
function interpolation_search(arr, val) {
    let low = 0
    let high = arr.length - 1
    let pos = -1
    while(low <= high) {
        let mid = low + (high - low) * ((val - arr[low]) / (arr[high] - arr[low]))
        if(val == arr[mid]) {
            pos = mid
            console.log("Index of " + val + " is: " + pos)
            break
        } else if(val < arr[mid]) 
            high = mid - 1
        else
            low = mid + 1 
    }

    if(low > high && pos == -1)
        console.log("Value " + val + " is not present in the array")
}


//jump or block search
function jump_search(arr, val, n) {
    let step = Math.sqrt(n)
    let sarr = arr.sort(function(a,b) {return a - b})
    let i = 0
    var low = 0 , high = sarr.length - 1
    let pos = -1
    while(i < step) {
        if (val < sarr[step]) {
            high = step - 1
        } else 
            low = step + 1
        i += 1
    } 
    i = low
    while(i < high) {
        if (sarr[i] == val) {
            pos = i 
            console.log("Index of " + val + " is " + pos)
        }

        i = i + 1
    }
    if(i > high && pos == -1)
        console.log("Value " + val + " is not present in the array")
}


//bubble sort
function bubble_sort(arr) {
    let i, j, temp, flag = 0;
    let len = arr.length
    for(i = 0; i < len; i++) {
        for(j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = 1
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
        console.log(arr)
        if(flag == 0) {
            return
        }
    }
}

function qSort(list) {
if (list.length == 0) {
return [];
}
var lesser = [];
var greater = [];
var pivot = list[0];
function printTimeDef() {
    console.log(new Date().getTime())
    bubble_sort(arr)
    console.log(new Date().getTime())
}

//insertion sort
function insertion_sort(arr) {
    let i, j, temp
    for(i = 1; i < arr.length; i++) {
        temp = arr[i]
        j = i - 1
        while(temp < arr[i] && (j >= 0)) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }

    return arr;
}

//quickSort
//q_arr = [44, 75, 23, 43, 55, 12, 64, 77, 33]
function qSort(list) {
    if (list.length == 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}
//convert integer to string and count the num of digit and slice the string for middle four digit
//if you give negative num it will be problemetic i haveto fix it
function middle_four(num) {
    let str = []
    let count = 0
    while(num / 10 != 0) {
        str.unshift( num % 10 )
        count += 1
        num = parseInt(num / 10)
    }
    str = str.join("")
    let start_end = parseInt((str.length - 4) / 2)
    let sliced = str.slice(start_end, start_end + 4)
    return("The middle four digit is: " + sliced + " and the num of digit is: " + count)
}

//find cumulative sum of an arr
function cusum(arr) {
    var new_arr = [arr[0]]
    var sum = 0;
    for(let i = 1; i < arr.length; i++) {
        sum = arr[i] + new_arr[i -1]
        new_arr.push(sum)
    }

    return new_arr;
}


//find cumulative sum destroying the given array
function cusum(arr) {
    for(let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1] + arr[i]
    }

    return  arr
}
//find median value of an arr
function median(arr_of_data, arr_of_frequency) {
    var sum = 0;
    var len = arr_of_frequency.length
    for(let i = 0; i < len; i++) {
        sum += arr_of_frequency[i]
    }
    // console.log(sum)
    function cusum() {
        let new_arr = [arr[0]]
        let sum_of_arr = 0;
        for(let i = 1; i < len; i++) {
            sum_of_arr = arr_of_frequency[i] + new_arr[i -1]
            new_arr.push(sum_of_arr)
        }

    return new_arr;
    }

    var cusum = cusum()
    var median = 0
    if(sum % 2 != 0) {
        median = ((sum + 1) / 2)
    } else {
        median = sum / 2
    }

    for(let j = 0; j < len; j++) {
        if (median < cusum[j] && median > cusum[j - 1]) {
            console.log(arr_of_data[j])
        }
    }
}



//find the median value of an grouped data
var grouped_data = [[30, 35, 3], [36, 41, 10],
                   [42, 47, 18], [48, 53, 25],
                   [54, 59, 8], [60, 65, 6]]
function grouped_median(grouped_data) {
    let len = grouped_data.length
    let cusum_arr = [grouped_data[0][2]]
    let sum = 0
    for(let i = 1; i < len; i++) {
        sum = grouped_data[i][2] + cusum_arr[i -1]
        cusum_arr.push(sum)   
    }
    // console.log("Cumulative arr:" + new_arr)
    let new_len = cusum_arr.length
    let total_frequency = cusum_arr[new_len - 1]
    // console.log("Total:" + total_frequency)
    let n = total_frequency / 2
    // console.log("N: " + n)
    // console.log("New arr: " + new_arr)
    let median,l, fc, fm, h
    h = (grouped_data[0][1] - grouped_data[0][0]) + 1
    

    let x = -1
    for(let c = 0; c < new_len; c++) {
        if (n < cusum_arr[c] && n > cusum_arr[c - 1]) {
            x = c
            
        }
    }

    l = grouped_data[x][0]
    fc = cusum_arr[x - 1]
    fm = grouped_data[x][2]
    
    console.log("Value of x: " + x)
    console.log("fc: " + fc)
    console.log("l: " + l)
    console.log("fm: " + fm)
    median = (l + ((n - fc) * (h / fm)))

    return median;
}
grouped_median(grouped_data)

//find if a string a palindrome string
function palindrome(str) {
    let len = str.length
    if(str[0] == str[len - 1]) {
        for(let i = 1; i < (len - 1) / 2; i++) {
            if (str[i] == str[(len - 1) - i]) {
                continue
            } else {
                console.log("The str %s is not a palindrome string", str)
                return
            }
        }
        console.log("The str %s is a palindrome string", str)
    } else {
        console.log("The str %s is not a palindrome string", str)
    }
}
palindrome("stts")//it is indeed!

//optimized palindrome finding 
function palindrome(str) {
    let ignoreCaseStr = str.toUpperCase()
    let len = ignoreCaseStr.length
    for(let i = 0; i < len / 2; i++) {
        if (ignoreCaseStr[i] == ignoreCaseStr[len -1 - i]) {
            continue
        } else {
            console.log("The str %s is not a palindrome string", str)
            return
        }
    }
    console.log("The str %s is a palindrome string", str)
}


//find the most frequent element in an array
function mode(arr) {
    let len = arr.length
    let count, mode, indx = 0
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[j] == arr[i]) {
                indx = j
                count += 1
            } 
        }
    }
    mode = arr[indx]
    console.log(arr)
    return mode
}

//find the total count of a substring in another string
function subStrCount(str, count_str) {
    let c_len = count_str.length
    let l_len = (str.length - c_len)
    let count = 0
    let flag = false
    // subStrCount("bcdlfk a and that", "bcdf")
    for(let i = 0; i < l_len + 1; i++) {
        for(let j = 0; j < c_len; j++) {
            if(str[i + j] === count_str[j]) {
                flag = true
                continue
            } else {
                flag = false
                i = i + j
                break
            }
        }
        if(flag == true) {
            count += 1
            i = i + c_len
        }
    }
    return count
}

//converting decimal to binary number
function decimalToBinary(num, base) {
    let bin = []
    if(base > 16) 
        return -1
    while(true) {
        let digit = num % base
        num = Math.floor(num / base)
        if(digit == 10)
            bin.unshift("A")
        else if(digit == 11)
            bin.unshift("B")
        else if(digit == 12)
            bin.unshift("C")
        else if(digit == 13)
            bin.unshift("D")
        else if(digit == 14)
            bin.unshift("E")
        else if (digit == 15)
            bin.unshift("F")
        else
            bin.unshift(digit)  
        if(num == 0) {
            return bin.join("")
        } 
    }
}


//count the total number of a substr not optimized
function subStrCount(str, count_str) {
    let c_len = count_str.length
    let l_len = (str.length - c_len)
    let count = 0
    let flag = false
    // subStrCount("bcdlfk a and that", "bcdf")
    for(let i = 0; i < l_len + 1; i++) {
        for(let j = 0; j < c_len; j++) {
            if(str[i + j] === count_str[j]) {
                flag = true
                continue
            } else {
                flag = false
                i = i + j
                break
            }
        }
        if(flag == true) {
            count += 1
            i = i + c_len
        }
    }
    return count
}

//count the total number of a substr optimized
function mstrern_match(str, mstr){
    let mstr_length = mstr.length
    let loop_length = str.length - mstr_length
    let i = 0
    let count = 0
    if (mstr_length <= 0) {
        return 0
    }
    console.log(str)
    while(i <= loop_length){
        let j = 0
        let flg = true
        while(j < mstr_length) { 
            if (str[i + j] != mstr[j]) {
                j = j + 1
                flg = false
                break
            } else {
                j = j + 1
            }
        }
        if (flg) {
            i = i + mstr_length
            count = count + 1
        } else {
            i = i + j
        }
    }
    return count
}


//parmutation
function parmutation(arr) {
    console.log(arr)
    let len = arr.length
    for(let i = 0; i < len; i++) {
        console.log("{" + arr[i] + "}")
        for(let j = 1; j < len; j++) {
            if(arr[i] != arr[j]) {
                console.log("{" + arr[i] + ", " + arr[j] + "}")
            }
        }
    }

    return 0
}

//combination
function combination(arr) {
    let len = arr.length
    for(let i = 0; i < len - 1; i++) {
        console.log("{" + arr[i] + "}")
        for(let j = i + 1; j < len; j++) {
            // if(arr[i] != arr[j]) {
                console.log("{" + arr[i] + "," + arr[j] +"}")
            // }
        }
    }
}

var str1 = 'tutorialhorizon'
var str2 = 'dynamictutorialProgramming'
/*1,2,5,10,20,50,100
663


1,2, 5,10,25 40
25 10 2 2 1


1,3,9,19 27

2,5,7,13 21*/

function peakFinding(arr) {
    let len = arr.length
    let new_arr = []
    let peak = 0
    for(let i = 1; i < len - 1; i++) {
        if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            peak = arr[i]
            new_arr.push(peak)
        }
    }
    console.log(new_arr)
}


import random                                                                                   

def swap(vals): 
    length = len(vals) 
    for i in range(1, length-1): 
        r = random.randint(1,length-2) 
        tmp_val = vals[i] 
        vals[i] = vals[r] 
        vals[r] = tmp_val 

//find any power
function pow(base, exp) {
   if (exp == 0) {
       return 1;
   } else {
       return base * pow(base, exp - 1);
   }
}


function merge_two_sorted_arr(arr1, arr2) {
    let len1 = arr1.length
    let len2 = arr2.length
    let new_arr = []
    let i = 0, j = 0;
    while(i < len1) {
        while(j < len2) {
            /*var merge = [15, 20, 22, 30, 31, 40, 45, 50, 56, 60, 62, 78]
            var a = [ 12, 30, 40, 50, 60 ]
            var b = [ 15,20, 22, 31, 45, 56, 62, 78 ]*/
            if(arr1[i] < arr2[j]) {
                new_arr.push(arr1[i])
                new_arr.push(arr2[j])
                j += 1
                break
            } else if (arr1[i] > arr2[j]){
                new_arr.push(arr2[j])
                new_arr.push(arr1[i])
                j += 1
                break
            } else {
                new_arr.push(arr1[i])
                new_arr.push(arr2[j])
                j += 1
                break
            }
        }
        i += 1
    }
    return new_arr + " length: " + new_arr.length
}


function factorial(n) {
    if(n == 0 || n == 1) {
        return 0
    } else {
        return n * factorial(n - 1)
    }
}

function sumTo(n) {
    if(n > 0) {
        return (n + sumTo(n - 1))
    } else {
        return "what"
    }
}

function fib(n) {
    if(n == 0) {
        return 0
    } else if( n == 1) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}


var merge = [15, 20, 22, 30, 31, 40, 45, 50, 56, 60, 62, 78]
var a = [ 12, 20, 30, 40, 50, 60 ]
var b = [ 15,20, 22, 31, 45, 56, 62, 78 ]
function merge_two_sorted_arr(arr1, arr2) {
    let len1 = arr1.length
    let len2 = arr2.length
    let new_arr = []
    let i = 0, j = 0;
    while(i < len1) {
        while(j < len2) {
            if(arr1[i] < arr2[j]) {
                new_arr.push(arr1[i])
                new_arr.push(arr2[j])
                j += 1
                break
            } else if (arr1[i] > arr2[j]){
                new_arr.push(arr2[j])
                new_arr.push(arr1[i])
                j += 1
                break
            } else {
                new_arr.push(arr1[i])
                new_arr.push(arr2[j])
                j += 1
                break
            }
        }

        i += 1
    }
    return new_arr + " length: " + new_arr.length
}


function fact(n) {
    function fact_iter(product, iter, num) {
        if (iter > num)
            return product
        else {
            product *= iter
            iter += 1
            return fact_iter(product, iter, num)
        }
    }
    fact_iter(1,1,n)
}




function isAnagram(str_arr, toCheck) {
    let str_len = str_arr.length
    let check_len = toCheck.length
    let flg = false

    if(str_len == check_len) {
        for(let i = 0; i < str_len; i++) {
            let indx = toCheck.indexOf(str_arr[i])
            if(indx != -1) {
                toCheck.splice(indx, 1)
                flg = true
                continue
            } else {
                flg = false
                break
            }
        }

        if(flg == true) {
            console.log("Anagram")
        } else {
            console.log("Not an anagram")
        }
    } else {
        console.log("Sorry the length of the two str is not equal")
    }
}


function convertCase(str) {
    let len = str.length
    for(let i = 0; i < len; i++) {
        if(str.codePointAt(i) >= 65 && str.codePointAt(i) < 97) {
            console.log(String.fromCodePoint(str.codePointAt(i) + 32))
        } else {
            console.log(String.fromCodePoint(str.codePointAt(i) - 32))
        }
    }
}


function camelCase(str, separator) {
    let splited = str.split(separator)
    let len = splited.length
    for(let i = 1; i < len; i++) {
        splited[i] = splited[i][0].toUpperCase() + splited[i].substr(1)
    }
    return splited.join("")
}


function filterRange(arr, lower_range, higher_range) {
    let new_arr = []
    let len = arr.length

    for(let i = 0; i < len; i++) {
        if(arr[i] >= lower_range && arr[i] <= higher_range) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}


function uniq_entries(arr) {
    let len = arr.length
    let uniq_arr = []
    uniq_arr.push(arr[0])
    let count = 0
    
    for(let i = 1; i < len; ++i) {
        let ok = true
        for(let j = 0; j < i; ++j) {
            if(arr[j] == arr[i]) {
                ok = false
                break 
            }               
        }
        if(ok) uniq_arr.push(arr[i]); count++   
    }
    return uniq_arr
}


// [1, 2, 4, 5, 6, ,6 8, 7]
function uniqueArr(arr) {
    let len = arr.length
    let unique_arr = []
    unique_arr.push(arr[0])
    for(let i = 1; i < len; i++) {
        if(unique_arr. indexOf(arr[i]) == -1) {
            unique_arr.push(arr[i])
        }
    }
    return  unique_arr
}



str = '**wakia #$% is my ,, name**'
       **name #$% my is ,, wakia**
rev = ["**", "name", " #$% " , "my", " ", "is", " ,, ", "wakia", "**"]
function reverseWord(str) {
    let words = str.match(/\w+/gi)
    let char = str.match(/\W+/g)
    let len = words.length
    let new_arr = []
    char.reverse()

    console.log(words)
    console.log(char)

    if(isNaN(str[0]) || (str.codePointAt(0) < 65 || str.codePointAt(0) > 122)) {
        new_arr.push(char[0])
        new_arr.push(words[0])
        for(let i = len - 1; i > 0; i--) {
            new_arr.push(words[i])
            new_arr.push(char[i])
        }
    } else {
        for(let i = len - 1; i >= 0; i--) {
            new_arr.push(words[i])
            new_arr.push(char[i])
        }
    }

    if(isNaN(str[len - 1]) || (str.codePointAt(len - 1) < 65 || str.codePointAt(len - 1) > 122)) {
        // new_arr.push(char[len - 1])
        new_arr.push(words[len - 1])
    }
    return new_arr.join("")
}
/**
***** regular expression for selectining words !!!!!
echo "_world world's - and boys'  -- nothing good-man's-dream" | egrep "\<([_a-z]+('[a-z_]+)?)(\-([a-z_]+('[a-z_]+)?))*\>" -o

letter+('letter+)?
letter+(-letter+)*
*/

// ([a-z]+('[a-z]+)?)(\-([a-z]+('[a-z]+)?))*
str = '**wakia #$% is my ,, name**'
function reverseWord(str) {
    let words = str.match(/[A-Za-z0-9_\'-]+/gi)
    let char = str.match(/[^A-Za-z0-9_\'-]+/g)
    let len = words.length
    let new_arr = []
    words.reverse()
    console.log(str)
    console.log(words)
    console.log(char)
    if(isNaN(str[0]) || (str.codePointAt(0) < 65 || str.codePointAt(0) > 122)) {
        for(let i = 0; i < len; i++) {
            new_arr.push(char[i])
            new_arr.push(words[i])
        }
    } else {
        for(let i = 0; i < len; i++) {
            new_arr.push(words[i])
            new_arr.push(char[i])
        }
    }
    return new_arr.join("")
}


function isGPNum(num) { //should be 11digt string
    let regp = /017|013\d{8}/
    if(num.match(regp)) {
        console.log("The num is a valid gpnumber")
    } else {
        console.log("Invalid number")
    }
}

/*
+--------+---------+------+
| Name   |   Roll  | Grade|
|--------|---------|------|
| Aron   |     645 |      |
| Bourne |     343 |      | 
| Camila |     645 |      | 
| Gunter |     235 |      |
| Imran  |     645 |      |
| William|     456 |      |
+--------+---------+------+ 
*/
table = [["Name", "Roll", "Grade"], ["Wakia", "4", "5.00"], ["Jean", "10", "4.94"], ["Ava", "5", "5.00"], ["Evee", "8", "5.00"], ["Shoshana", "9", "4.86"]]                                                         
function drawTable(table_info) {
    let len = table_info.length
    let max = 0
    table.map(item => {if(item[0].length > max) max = item[0].length}, 1)
    console.log("+" + "-".repeat(max) + "+" + "-".repeat(table[0][1].length) + "+" + "-".repeat(table[0][2].length) + "+")
    for(let i = 0; i < len; i++) {
        let nam, roll, grade;
        if(table[i][0].length != max) {
            nam = table[i][0].concat(" ".repeat(max - table[i][0].length))
        } else {
            nam = table[i][0]
        }

        if(table[i][1].length != table[0][1].length) {
            roll = table[i][1].concat(" ".repeat(table[0][1].length - table[i][1].length))
        } else {
            roll = table[i][1]
        }

        if(table[i][2].length != table[0][2].length) {
            grade = table[i][2].concat(" ".repeat(table[0][2].length - table[i][2].length))
        } else {
            grade = table[i][2]
        }
        console.log("|" + nam + "|" + roll + "|" + grade + "|")
        console.log("+" + "-".repeat(max) + "+" + "-".repeat(table[0][1].length) + "+" + "-".repeat(table[0][2].length) + "+")
    }
    console.log("+" + "-".repeat(max) + "+" + "-".repeat(table[0][1].length) + "+" + "-".repeat(table[0][2].length) + "+")
}

function do_some(str) {
    let sp = str.split(" ")
    sp.forEach((el) => {
        document.write("+" + "-".repeat(el.length))
    })
    document.write("+<br>")
    sp.forEach((el) => {
        document.write("|" + el)
    })
    document.write("|<br>")
    sp.forEach((el) => {
        document.write("+" + "-".repeat(el.length))
    })
    document.write("+<br>")
}


//00:03:51, 607
//add_subtract_time(val[0], 2, 7, 8, 5000)
function addTime(time_str, h, m, s, ml) {
    let val = time_str.match(/(\d\d):(\d\d):(\d\d), (\d{1,4})/g)
    hour = parseInt(RegExp.$1)
    min = parseInt(RegExp.$2)
    sec = parseInt(RegExp.$3)
    milis = parseInt(RegExp.$4)
    console.log(time_str)

    hour += h
    min += m
    sec += s
    milis += ml
    day = 0

    if(milis >= 0 && milis >= 1000) {
        sec += parseInt(milis / 1000)
        milis = milis % 1000
    }
    if(sec >= 0 && sec >= 60) {
        min += parseInt(sec / 60)
        sec = sec % 60
    }
    if(min >= 0 && min >= 60) {
        hour += parseInt(m / 60)
        min = min % 60
    }

    if(hour >= 0 && hour > 24) {
        day += parseInt(hour / 24)
        hour = hour % 24
    }
    // a > b ? 45 ? 

    function toString() {
        hour += ""
        min += ""
        sec += ""
        milis += ""
        day += ""
        if(hour.length != 2) {
            hour = "0" + hour
        }
        if(min.length != 2) {
            min = "0" + min
        }
        if(sec.length != 2) {
            sec = "0" + sec
        }
        if(milis.length != 4) {
            milis = "0".repeat(4 - milis.length) + milis
        }
        if(day.length != 2) {
            day = "0" + day
        }
        return day + ":" + hour + ":" + min + ":" + sec + ", " + milis
    }
    
    return toString()
}


function base64enc(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += ("0".repeat (8 - str.codePointAt(i).toString(2).length) + str.codePointAt(i).toString(2))
    }
    let sixbit = result.match(/([01]{6})/g);
    for(let i = 0; i < sixbit.length; i++) {

    }
    return sixbit
}

//"0111011 101101 000011 000010 111010 001100 101011 011000 111001 101100 101".match(/([01]{6})/g)

// checker function test data
var matrix = [['*', '*', '*', '*'], ['*', '*', '*', '*'], ['*', '*', '*', '*'], ['*', '*', '*', '*']]
//checker function implementation
function checker(matrix) {
    let result = []
    let cols = matrix[0].length
    let rows = matrix.length
    for (let i = 0; i < rows; i++) {
        let row = []
        for (let j = 0; j < cols; j++) {
            if (Math.pow((-1), (i + j)) > 0)
               row.push("X")
            else
                row.push(matrix[i][j])
        }
        result.push(row)
    }
    return result 
}


var merge = [12,15, 20,20, 22, 30, 31, 40, 45, 50, 60, 62, 78]
var arr1 = [ 12,20, 22, 31, 45, 62, 78 ]
var arr2 = [ 15, 20, 30, 40, 50, 60 ]

function merge_two_sorted_arr(arr1, arr2) {
    let len1 = arr1.length
    let len2 = arr2.length
    let new_arr = []
    let i = 0, j = 0;
    while(i < len1) {
        while(j < len2) {
            if(arr1[i] < arr2[j]) {
                new_arr.push(arr1[i])
                i += 1
                break
            } else {
                new_arr.push(arr2[j])
                j += 1
                break
            }
        }
    }

    return new_arr + " length: " + new_arr.length
}


var cat = [12,15, 20,20, 22, 30, 31, 40, 45, 50, 60, 62, 78]
var arr1 = [ 12,20, 22, 31, 45, 62, 78 ]
var arr2 = [ 15, 20, 30, 40, 50, 60 ]

function merge_two_sorted_arr(arr1, arr2) {
    let len1 = arr1.length
    let len2 = arr2.length
    let new_arr = []
    let i = 0, j = 0;
    while(i < len1 && j < len2) {
        if(arr1[i] < arr2[j]) {
            new_arr.push(arr1[i])
            i += 1
            continue
        } else {
            new_arr.push(arr2[j])
            j += 1
            continue
        }
    }

    console.log("i: " + i + " j: " + j)

    if(i == len1) {
        for(let k = j; k < len2; k++) {
            new_arr.push(arr2[k])
        }
    } else {
        for(let k = i; k < len1; k++) {
            new_arr.push(arr1[k])
        }
    }

    return new_arr + " length: " + new_arr.length
}




def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        # 0  1  2  3  4  5  6
        # 0, 1, 1, 2, 3, 5, 8
        current = 1
        pre = 0
        i = 2
        while(i <= n):
            ans = current + pre
            pre = current
            current = ans
            i += 1
    return (pre, current)

//base converting using stack
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);

    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

//palindrome using stack
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }

    var rword = "";
    while (s.length() > 0) {
            rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false
    }
}

//dynamic fibbonacci
function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}

function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}


//knapsack problem recursive
function max(a, b) {
    return (a > b) ? a : b;
}
function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
        return 0;
    }
    if (size[n-1] > capacity) {
        return knapsack(capacity, size, value, n-1);
    }
    else {
        return max(value[n-1] + knapsack(capacity-size[n-1], size, value, n-1), knapsack(capacity, size, value, n-1));
    }
}

var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
knapsack(capacity, size, value, n)//ans:23

//knapsack problem dynamic
function dKnapsack(capacity, size, value, n) {
    var K = [];
    for (var i = 0; i <= n; i++) {
        K[i] = [];
    }
    for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                K[i][w] = 0;
            } else if (size[i-1] <= w) {
                K[i][w] = max(value[i-1] + K[i-1][w-size[i-1]],
                K[i-1][w]);
            } else {
                K[i][w] = K[i-1][w];
            }
            // console.log(K[i][w] + " ");
        }
    }
    console.log(K)
    return K[n][capacity];
}
dKnapsack(capacity, size, value, n)//23

//substr matching and coloring in terminal
function substr_match(str, mstr){
    let mstr_length = mstr.length
    let loop_length = str.length - mstr_length
    let i = 0
    let count = 0
    let match_indx = []
    if (mstr_length <= 0) {
        return 0
    }
    console.log(str)
    while(i <= loop_length){
        let j = 0
        let flg = true
        while(j < mstr_length) { 
            if (str[i + j] != mstr[j]) {
                j = j + 1
                flg = false
                break
            } else {
                j = j + 1
            }
        }
        if (flg) {
            match_indx.push(i)
            i = i + mstr_length
            count = count + 1
        } else {
            i = i + j
        }
    }
    console.log(match_indx)

    let match_indx_len = match_indx.length
    let color_str = str.substring(0, match_indx[0])

    for(let i = 0; i < match_indx_len; i++) {
        color_str += "\033[31m" + str.substring(match_indx[i], match_indx[i]  + mstr_length) + "\033[0m" + str.substring(match_indx[i] + mstr_length, match_indx[i + 1])
    }
    console.log(color_str)
    return count
}

function repeat_consecuence_num_same_times(totalNum, indivisualCount) {
    let str = ""
    for(let i = 0; i < totalNum; i++) {
        str += (i + "").repeat(indivisualCount)
    }
    return str
}

function set_nth_bit(num, pos) {
    console.log("prevNum to binary: " + num.toString(2))
    num |= (1 << pos)
    console.log("postNum to binary: " + num.toString(2))
}


var aaa = 0x0985
undefined
aaa.toString(2)
first_b = "100110000101" | ((1<<6)-1)
sec_b = "100110000101"
third_b = "100110000101"


mid_chunk = ( ((1<<8)-1) & (~((1<<4)-1)))
(parseInt("1010101110",2) & ((1<<5)-1)).toString(2).padStart(8,"0") 
result = "1110xxxx 10xxxxxx 10xxxxxx"
"1110xxxx 10xxxxxx 10xxxxxx"
2**16
65536
(0b111000001010011010000101).toString(16)
(0b000001010011010000101).toString(16)
"e0a685"

function count_ones(num) {
    var count = 0
    for (let i =0; i<32; i++) {
        if ((num & (1<< i)) !=0)
            count += 1
    }
    return count 
}



function position_msb_ones(num) {
    var pos = -1
    for (let i =0; i<32; i++) {
        if ((num & (1<< i)) !=0)
            pos = i 
    }
    var count = 0
    for (let i =0; i<pos; i++) {
        if ((num & (1<< i)) =0)
            count += 1 
    }
    return pos  
}

function count_zeros(num) {
    var pos = -1
    for (let i =0; i<32; i++) {
        if ((num & (1<< i)) !=0)
            pos = i 
    }
    var count = 0
    for (let i =0; i<pos; i++) {
        if ((num & (1<< i)) =0)
            count += 1 
    }
    return count  
}

function swap(obj) {
    obj.a = obj.a - obj.b
    obj.b = obj.a + obj.b
    obj.a = obj.b - obj.a
    return obj
}

function tobinaryString(num, count) {
    var bitstr = []
    for(let i = 0; i < count; i++) {
        if ((num & (1<<i)) == 0)
            bitstr.unshift(0)
        else
            bitstr.unshift(1)
    
    }
    return bitstr.join("")
}

function word_count(str, chunk_size) {
    let cleared_str = str.trim()
    let len = Math.floor((cleared_str.length / chunk_size))
    let i = 0
    let j = 0
    let word_count_arr = []
    while(i < len) {
        let obj = {start: false, end:false, count:0}
        while(j < chunk_size) {
            if(cleared_str[i] != " ") {
                j++
                continue
            } else {
                j++
                obj.count += 1
            }
        }

        if(cleared_str[j] != " " && cleared_str[j] != " ") {
            obj.start = false
            obj.end = false
        } else {
            obj.start = true
            obj.end = true
            obj.count += 1
        }

        word_count_arr.push(obj)
        chunk_size += j
        i++
    } 

    let total_word = 0
    for(let i = 0; i < word_count_arr.length; i++) {
        total_word += word_count_arr[i].count
    }

    console.log(word_count_arr);
}



function word_count(str, chunk_size) {
    let cleared_str = str.trim()
    let len = Math.floor((cleared_str.length / chunk_size))
    let i = 0
    let j = 0
    let word_count_arr = []
    while(i < len) {
        let obj = {start: false, end:false, count:0}
        while(j < chunk_size) {
            if(cleared_str[i] != " ") {
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


//return a string with a letter along with how many times the letter is consequencely
function runlength_str(str) {
    let len = str.length
    let count = 1
    let new_str = str[0]
    let prechar = str[0]
    for(let i = 1; i < len; i++) {
        if(str[i] == prechar) {
            count += 1
        } else {
            prechar = str[i]
            new_str += count + prechar
            count = 1
        }
    }
    new_str += count
    return new_str
}

[1,2,3,4,7]

[1,2,3,4,5]
[1], [1,2], [1,2,3], [1,2,3,4], [1,2,3,4,5]
[2], [2,3], [2,3,4], [2,3,4]


function subarrgen(arr) {
    let len = arr.length
    let i = 0
    let j = 0
    let all_subarr = []
    while(i < len) {
        while(i <= j && j < len) {
            let sub_arr = []
            sub_arr.push(arr[i + j])
            all_subarr.push(sub_arr)
            j += i + 1
        }
        i += 1
    }

    return all_subarr
}

var num_arr = [1, 7, 3, 8, 12, 4, 9, 15]
function find_n_maximum_num(num_arr, n) {
    let len = num_arr.length
    let arr = []
    for(let i = 0; i < len; i++) {
        arr.push(num_arr[i])
    }
    let n_max_arr = []
    let max_num = 0
    let max_num_indx
    for(let count = 0; count < n; count++) {
        let len = arr.length
        for(let i = 0; i < len; i++) {
            if(arr[i] > max_num) {
                max_num = arr[i]
                max_num_indx = i
            }
        }
        n_max_arr.push(max_num)
        arr.splice(max_num_indx, 1)
        max_num = 0
    }
    return n_max_arr
}


function create_palindrome_str(len) {
    let palindrome_arr = []

    function getRandomBetTwoValue(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    let loop_len = Math.floor(len / 2)
    for(let i = 0; i < loop_len; i++) {
        palindrome_arr.push(String.fromCodePoint(getRandomBetTwoValue(97, 122)))
    }

    let odd_or_even = Math.floor(Math.random() * 10) + 1
    console.log("odd or even: " + odd_or_even)
    if(odd_or_even % 2 == 0 && len % 2 == 0) {
        return palindrome_arr.join("") + palindrome_arr.reverse().join("")
    } else if(odd_or_even % 2 == 0 && len % 2 !== 0) {
        let sliced = palindrome_arr.slice(0, loop_len)
        console.log("sliced: " + sliced)
        return sliced.join("") + String.fromCodePoint(getRandomBetTwoValue(97, 122)) + sliced.reverse().join("")
    } else {
        let sliced = palindrome_arr.slice(0, loop_len)
        console.log("sliced: " + sliced)
        return sliced.join("") + String.fromCodePoint(getRandomBetTwoValue(97, 122)) + sliced.reverse().join("")
    }
}


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


var num_arr = [1, 7, 3, 8, 12, 4, 9, 15]
function find_n_maximum_num(num_arr, n) {
    let len = num_arr.length
    /*let arr = []

    for(let i = 0; i < len; i++) {
        arr.push(num_arr[i])
    }*/

    let n_max_arr = [num_arr[0]]
    
    for(let i = 1; i < len; i++) {
        if(num_arr[i] > n_max_arr[i-1]) {
            n_max_arr.unshift(num_arr[i])
        }
    }
    return n_max_arr
}