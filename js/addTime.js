//04:37:55, 0 + 02:06:45, 0
//09:17:22, 0 + 03:50:01, 0
//05:33:09, 0 + 01:12:57
//08:45:00, 0 - 01:24:00, 0

//time_str format: 04:37:55, 0 ---> 02:06:45, 0
function addTime(time_str, h, m, s, ml) {
    let val = time_str.match(/(\d\d):(\d\d):(\d\d), (\d{1,4})/g)
    let hour = parseInt(RegExp.$1)
    let min = parseInt(RegExp.$2)
    let sec = parseInt(RegExp.$3)
    let milis = parseInt(RegExp.$4)
    console.log(hour +":"+min+":"+sec+", "+milis)

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
        hour += parseInt(min / 60)
        min = min % 60
    }

    if(hour >= 0 && hour > 24) {
        day += parseInt(hour / 24)
        hour = hour % 24
    }
    return day + ":" + hour + ":" + min + ":" + sec + ", " + milis
}