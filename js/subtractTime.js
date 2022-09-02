//04:37:55, 0 - 02:06:45, 0
//09:17:22, 0 - 03:50:01, 0
//05:33:09, 0 - 01:12:57, 0
//00:11:03, 0 - 00:12:29, 0

//time_str format: 04:37:55,0* --> 02:06:45,0*
function subtractTime(time_str) {
	let spl = time_str.split(" --> ")
	spl[0].match(/(\d{1,2}):(\d{1,2}):(\d{1,2}),(\d{1,4})/g)
	let h1 = parseInt(RegExp.$1)
	let m1 = parseInt(RegExp.$2)
	let s1 = parseInt(RegExp.$3)
	let ml1 = parseInt(RegExp.$4)
	console.log(h1 + ":" + m1 + ":" + s1+ ", " + ml1)
	spl[1].match(/(\d{1,2}):(\d{1,2}):(\d{1,2}),(\d{1,4})/g)
	let h2 = parseInt(RegExp.$1)
	let m2 = parseInt(RegExp.$2)
	let s2 = parseInt(RegExp.$3)
	let ml2 = parseInt(RegExp.$4)
	console.log(h2 + ":" + m2 + ":" + s2+ ", " + ml2)
	let hour, min, sec, milis, day = 0
	if(h1 >= h2) {
		hour = h1 - h2
	} else {
		hour = (h1 + 24) - h2
		day = day - 1
	}
	if(m1 >= m2) {
		min = m1 - m2
	} else {
		min = (m1 + 60) - m2
		hour = hour - 1
	}
	if(s1 >= s2) {
		sec = s1 - s2
	} else {
		sec = (s1 + 60) - s2
		min = min - 1
	}
	if(ml1 >= ml2) {
		milis = ml1 - ml2
	} else {
		milis = (ml1 + 1000) - ml2
		sec = sec - 1
	}
	return day + ":" + hour + ":" + min + ":" + sec + ", " + milis
}