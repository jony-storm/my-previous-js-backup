//time_str format: 04:37:55,0* --> 02:06:45,0*
//addTime("04:37:55,0 --> 02:06:45,0", 2, 25, 49, 200)
function addTime(time_str, h, m, s, ml) {
	let spl = time_str.split(" --> ")
	spl[0].match(/(\d{1,2}):(\d{1,2}):(\d{1,2}),(\d{1,4})/g)
	let hour1 = parseInt(RegExp.$1)
	let min1 = parseInt(RegExp.$2)
	let sec1 = parseInt(RegExp.$3)
	let milis1 = parseInt(RegExp.$4)
	let day1 = 0
	hour1 += h; min1 += m; sec1 += s; milis1 += ml;
	if(milis1 >= 0 && milis1 >= 1000) {
	    sec1 += parseInt(milis1 / 1000)
	    milis1 = milis1 % 1000
	}
	if(sec1 >= 0 && sec1 >= 60) {
	    min1 += parseInt(sec1 / 60)
	    sec1 = sec1 % 60
	}
	if(min1 >= 0 && min1 >= 60) {
	    hour1 += parseInt(min1 / 60)
	    min1 = min1 % 60
	}

	if(hour1 >= 0 && hour1 <=24) {
	    day1 += parseInt(hour1 / 24)
	    hour1 = hour1 % 24
	}

	spl[1].match(/(\d{1,2}):(\d{1,2}):(\d{1,2}),(\d{1,4})/g)
	let hour2 = parseInt(RegExp.$1)
	let min2 = parseInt(RegExp.$2)
	let sec2 = parseInt(RegExp.$3)
	let milis2 = parseInt(RegExp.$4)
	let day2 = 0
	hour2 += h; min2 += m; sec2 += s; milis2 += ml;
	if(milis2 >= 0 && milis2 >= 1000) {
	    sec2 += parseInt(milis2 / 1000)
	    milis2 = milis2 % 1000
	}
	if(sec2 >= 0 && sec2 >= 60) {
	    min2 += parseInt(sec2 / 60)
	    sec2 = sec2 % 60
	}
	if(min2 >= 0 && min2 >= 60) {
	    hour2 += parseInt(min2 / 60)
	    min2 = min2 % 60
	}

	if(hour2 >= 0 && hour2 <=24) {
	    day2 += parseInt(hour2 / 24)
	    hour2 = hour2 % 24
	}

	return day1 + ":" + hour1 + ":" + min1 + ":" + sec1 + "," + milis1 + " --> " + day2 + ":" + hour2 + ":" + min2 + ":" + sec2 + "," + milis2
}
