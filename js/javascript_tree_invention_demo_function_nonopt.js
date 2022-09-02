/*
    date: Sat Oct  3 12:37:27 +06 2020(yesterday)
    why tree used instead of linear collection
    why tree balancing needed
    
*/
var branchese = {}
var junk = function (elements, branchese) {
    for (let i = 0; i < elements; i++) {
    //randnums.push(Math.floor(Math.random()*100))
        let num = Math.floor(Math.random()*100)
        let part = num%10
        if (branchese[part]) {
            branchese[part].push(num)
        } else {
            branchese[part] = []
            branchese[part].push(num)
        } 
       
    }
}
var start = new Date().getTime()
junk(1000,branchese)
console.log('time used ' + (new Date().getTime() - start))