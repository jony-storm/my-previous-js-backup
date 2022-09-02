/*
    date: Sat Oct  3 12:37:27 +06 2020(yesterday)
    why tree used instead of linear collection
    why tree balancing needed

*/
var branchese = {}
let arr = [0,1,2,3,4,5,6,7,8,9]
var changed
var junk = function (elements, branchese) {
    let arr = [0,1,2,3,4,5,6,7,8,9]
    let count = 0
    for (let i = 0; i < elements; i++) {
    //randnums.push(Math.floor(Math.random()*100))
        let num = Math.floor(Math.random()*100)
        let part = num%10
        let index = arr.indexOf(part)
        if (index > -1) {
            branchese[part] = []
            branchese[part].push(num)
            arr.splice(index,1)
            count++;
            if(arr.length == 0) {
                /// modify the function
                console.log("count = ", count)
                console.log("optimizing function: ....")
                changed = function (elements, branchese) {
                    console.log("running optimized version from i: " + i)
                    for (let j = 0; j < elements - i; j++) {
                        let num = Math.floor(Math.random()*100)
                        //randnums.push(Math.floor(Math.random()*100))
                        branchese[num%10].push(num)
                    }
                    console.log('running finished') 
                }
                return changed(elements, branchese)
        

            }

        } else {
            count++
            branchese[part].push(num)
        } 
       
    }
}
var start = new Date().getTime()
junk(1000,branchese)
console.log('time used ' + (new Date().getTime() - start))