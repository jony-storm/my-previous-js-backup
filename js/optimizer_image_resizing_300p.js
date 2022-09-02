let imagelist = ["1.jpg", "2.jpg", "3.jpg", "a.png", "b.png", "c.png", "d.png"]

let filesystem = {
    "300p_jpg":["1_300p.jpg", "2_300p"],
    "300p_png":["b.png", "c.png"]
}


let processor = {
    "jpg":
}


function gcd(m, n) {
    if (n == 0) return m
    else return gcd(n, m%n)
}

function lcm(m, n) {
    return (m * n) / gcd(m, n)
}

/*gcd = lcm

gcd()
lcm()
lcm()
lcm()
lcm()*/


let file_list = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', 'a.png', 'tiger.gif', 'circle.gif', 'heart.jpg','b.png', 'c.png', 'd.png', 'e.png']
function arrange_file_by_name(file_list) {
    let output_list = {}
    let len = file_list.length
    for(let i = 0; i < len; i++) {
        let dir_name = file_list[i].split(".")[1]
        if(!output_list[dir_name]) {
            output_list[dir_name] = []
            output_list[dir_name].push(file_list[i])
        } else {
            output_list[dir_name].push(file_list[i])
        }
    }

    return output_list
}


function arrange_file_by_name(file_list) {
    let output_list = {}
    let len = file_list.length
    let i = 0
    let dir_name = ""

    function push_file_in_dir(indx) {
        dir_name = file_list[i].split(".")[1]
        if(!output_list[dir_name]) {
            output_list[dir_name] = []
            output_list[dir_name].push(file_list[i])
        }
    }

    function push_file_in_dir2(indx) {
        output_list[dir_name].push(file_list[i])
    }
    while(i < len) {
        push_file_in_dir(i)
        push_file_in_dir = push_file_in_dir2
        i++
    }

    return output_list
}