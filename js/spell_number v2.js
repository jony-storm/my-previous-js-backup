// Thu Nov 26 17:48:49 +06 2020
function spell_given_number(num) {
    let hundred = Math.floor(num / 100)
    let ty = (num % 100)
    let one_to_nine = (num % 100) % 10
    let zero_to_twenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    let twenty_to_ninety_prefix = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let result = ""
    if(num == 0) {
        return "zero"
    } else {
        if(hundred) {
            result += zero_to_twenty[hundred] + " hundred"
            if(ty) {
                if(ty >= 1 && ty <= 20) {
                    result += " and " + zero_to_twenty[ty]
                } else {
                    result += " and " + twenty_to_ninety_prefix[Math.floor(ty / 10)] + " " + zero_to_twenty[ty % 10]
                }
            }
        } else {
            if(ty >= 1 && ty <= 20) {
                result += zero_to_twenty[ty]
            } else {
                result += twenty_to_ninety_prefix[Math.floor(ty / 10)] + " " + zero_to_twenty[ty % 10]
            }   
        }
    }

    return result
}


let zero_to_nintynine = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty ", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty ", "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", "forty eight", "forty nine", "fifty ", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine", "sixty ", "sixty one", "sixty two", "sixty three", "sixty four", "sixty five", "sixty six", "sixty seven", "sixty eight", "sixty nine", "seventy ", "seventy one", "seventy two", "seventy three", "seventy four", "seventy five", "seventy six", "seventy seven", "seventy eight", "seventy nine", "eighty ", "eighty one", "eighty two", "eighty three", "eighty four", "eighty five", "eighty six", "eighty seven", "eighty eight", "eighty nine", "ninety ", "ninety one", "ninety two", "ninety three", "ninety four", "ninety five", "ninety six", "ninety seven", "ninety eight", "ninety nine"]


//second version
function spell_given_number(num) {
    let result_arr = []
    let zero_to_twenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    let twenty_to_ninety_prefix = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    function spell_hundred(num) {
        let result = ""
        let hundred = Math.floor(num / 100)
        let ty = (num % 100)
        let one_to_nine = (num % 100) % 10
        
        if(hundred) {
            result += zero_to_twenty[hundred] + " hundred"
            if(ty) {
                if(ty >= 1 && ty <= 20) {
                    result += " and " + zero_to_twenty[ty]
                } else {
                    result += " and " + twenty_to_ninety_prefix[Math.floor(ty / 10)] + " " + zero_to_twenty[ty % 10]
                }
            }
        } else {
            if(ty >= 1 && ty <= 20) {
                result += zero_to_twenty[ty]
            } else {
                result += twenty_to_ninety_prefix[Math.floor(ty / 10)] + " " + zero_to_twenty[ty % 10]
            }   
        }
        
        return result
    }

    if(num > 0) {
        while(num) {
            let hundred_part = num % 1000
            num = Math.floor(num / 1000)
            if(hundred_part) {
                result_arr.push(spell_hundred(hundred_part))
            }
        }
    } else {
        return "zero"
    }

    let len = result_arr.length
    if(len > 1) {
        result_arr.reverse()
        let long_suffix = ['trillion', 'billion', 'million', 'thousand', '']
        let start = long_suffix.length - len
        let spell_str = ""
        
        for(let i = 0, j = start; i < len - 1; i++, j++) {
            spell_str += result_arr[i] + " " + long_suffix[j] + ", "
        }
        spell_str += result_arr[len - 1]
        return spell_str
    } else {
        return result_arr[0]
    }
}



//third version
function spell_given_number(num) {
    let result_arr = []
    let zero_to_twenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    let twenty_to_ninety_prefix = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    function spell_hundred(num) {
        let result = ""
        let hundred = Math.floor(num / 100)
        let ty = (num % 100)
        let one_to_nine = (num % 100) % 10
        
        if(hundred) {
            result += zero_to_twenty[hundred] + " hundred"
            if(ty) {
                if(ty >= 1 && ty <= 20) {
                    result += " and " + zero_to_twenty[ty]
                } else {
                    result += " and " + twenty_to_ninety_prefix[Math.floor(ty / 10)] + " " + zero_to_twenty[ty % 10]
                }
            }
        } else {
            if(ty >= 1 && ty <= 20) {
                result += zero_to_twenty[ty]
            } else {
                result += twenty_to_ninety_prefix[Math.floor(ty / 10)] + " " + zero_to_twenty[ty % 10]
            }   
        }
        return result
    }

    // let spell_str_arr = []
    let spell_str = ""
    let long_suffix =  ['', 'thousand', 'million', 'billion', 'trillion']
    let long_suffix_indx = 0
    if(num > 0) {
        while(num) {
            let hundred_part = num % 1000
            num = Math.floor(num / 1000)
            // 45,000,235
            //spell_str_arr.push(spell_hundred(hundred_part))
            if (hundred_part) {
                spell_str = spell_hundred(hundred_part) + " " + long_suffix[long_suffix_indx] + " " + spell_str
                
            }
            long_suffix_indx += 1
            
        }

        return spell_str
    } else {
        return "zero"
    }

}
