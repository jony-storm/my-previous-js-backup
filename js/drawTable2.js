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


var table = [["Name", "Roll", "Grade"], ["Wakia", "4", "5.00"], ["Jean", "10", "4.94"], ["Ava", "5", "5.00"], ["Evee", "8", "5.00"], ["Shoshana", "9", "4.86"]]

function drawTable(table_info) {
    
}