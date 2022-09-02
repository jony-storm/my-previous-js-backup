([1, 3, 4, 12, 12, 67, 1 ,5, 8, 9, 0]).forEach((ele, index)=> {
  setTimeout(()=> {
    i.value = ele
    b.click()
}, index*10000)  
})

var values = [1, 3, 4, 12, 12, 67, 1 ,5, 8, 9, 0]
var val_count = values.length - 1
var fill_box = setInterval(()=>{
    if(val_count < 0) {
        clearInterval(fill_box)
    } else {
        inp_box.value = values[val_count]
        inp_btn.click()
        console.log("inserting value " + values[val_count] + " at position "  + val_count)
        val_count--
    }
}, 2000)