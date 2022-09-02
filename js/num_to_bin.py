def num_to_bin(num): 
    bins = [] 
    while(True): 
	    digit = num % 2 
	    num = num // 2 
        bins.append(digit) 
        print(digit)
        if num == 0: 
            bins_rev = bins.reverse() 
            bins_str = "".join([str(i) for i in bins_rev])
            return bins_str 
