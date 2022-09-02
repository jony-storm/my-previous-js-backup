//time_str format: 04:37:55,0* --> 02:06:45,0*
//addTime("04:37:55,0 --> 02:06:45,0", 2, 25, 49, 200)
function subtractTime(time_str, h, m, s, ml) {
	let spl = time_str.split(" --> ")
	spl[0].match(/(\d{1,2}):(\d{1,2}):(\d{1,2}),(\d{1,4})/g)
	let h1 = parseInt(RegExp.$1)
	let m1 = parseInt(RegExp.$2)
	let s1 = parseInt(RegExp.$3)
	let ml1 = parseInt(RegExp.$4)
	let hour1, min1, sec1, milis1, day1 = 0	
	if(h1 >= h) {
		hour1 = h1 - h
	} else {
		hour1 = (h1 + 24) - h
		day1 = day1 + 1
	}
	if(m1 >= m) {
		min1 = m1 - m
	} else {
		min1 = (m1 + 60) - m
		hour1 = hour1 - 1
	}
	if(s1 >= s) {
		sec1 = s1 - s
	} else {
		sec1 = (s1 + 60) - s
		min1 = min1 - 1
	}
	if(ml1 >= ml) {
		milis1 = ml1 - ml
	} else {
		milis1 = (ml1 + 1000) - ml
		sec1 = sec1 - 1
	}

	spl[1].match(/(\d{1,2}):(\d{1,2}):(\d{1,2}),(\d{1,4})/g)
	let h2 = parseInt(RegExp.$1)
	let m2 = parseInt(RegExp.$2)
	let s2 = parseInt(RegExp.$3)
	let ml2 = parseInt(RegExp.$4)
	let hour2, min2, sec2, milis2, day2 = 0	
	if(h2 >= h) {
		hour2 = h2 - h
	} else {
		hour2 = (h2 + 24) - h
		day2 = day2 + 1
	}
	if(m2 >= m) {
		min2 = m2 - m
	} else {
		min2 = (m2 + 60) - m
		hour2 = hour2 - 1
	}
	if(s2 >= s) {
		sec2 = s2 - s
	} else {
		sec2 = (s2 + 60) - s
		min2 = min2 - 1
	}
	if(ml2 >= ml) {
		milis2 = ml2 - ml
	} else {
		milis2 = (ml2 + 1000) - ml
		sec2 = sec2 - 1
	}

	console.log(day1 + ":" + hour1 + ":" + min1 + ":" + sec1 + "," + milis1 + " --> " + day2 + ":" + hour2 + ":" + min2 + ":" + sec2 + "," + milis2)
}
