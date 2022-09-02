def let_c(letters): 
    count = {} 
    for l in letters: 
        if l in count: 
            count[l] += 1 
        else: 
            count[l] = 1 
            return count 
