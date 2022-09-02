/*function drawline(x1, y1, x2, y2) {
    let prex, prey, m = (y1-y2)/(x1-x2),i,j

    if(x1 < x2)
        prex  = x1
        i = x1
        j = x2
        prey = y1
    else{
        prex = x2
        i = x2
        j = x1
        prey = y2
    }
        
    while(i<=j) {
        console.log(i,j)
        i++
        j+=m
    }
}
*/

function drawline(x1, y1, x2, y2) {
    let prex, prey, m = (y1-y2)/(x1-x2),i,j

    if(x1 < x2) {
        prex  = x1
        i = x1
        j = x2
        prey = y1
    }
    else{
        prex = x2
        i = x2
        j = x1
        prey = y2
    }
        
    while(i < j){
        let x = prex + 1
        let y = prey + m
        console.log(prex,prey)
        prex = x
        prey = y
        i += 1
    }
}