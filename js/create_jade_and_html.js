// Fri Nov 20 22:06:16 +06 2020

var node_list = [{
    tagName:'h1',
    attributes:  {class:'special', id:'title'},
    children:[
    'The Sky Is Not',
    {
        tagName: "strike",
        attributes: {id: "red"},
        children: ['RED']
    }]
    },
    {
    tagName: 'h2',
    attributes: {class: 'special', id:'subtitle'},
    children: ["Isn't it?"]
    }, {
    tagName: 'nav',
    attributes: {class: 'topnav', style: 'color:white;background-color:black;font-size:20px'},
    children: [
    {
        tagName: 'a',
        attributes: {href:"#HTML", style: 'color:white;'},
        children: ['HTML']
    },
    {
        tagName: 'a',
        attributes: {href:"#CSS", style: 'color:white;'},
        children: ['CSS']
    },
    {
        tagName: 'a',
        attributes: {href:"#HTML", style: 'color:white;'},
        children: ['JAVASCRIPT']
    }]
    }
]

var rendered_str = ""
function create_html_str(rendered_str, node) {
    if(typeof node == 'string') {
        return node
    } else if(typeof node == 'object') {
        let attr = node.attributes
        let attr_str = ""

        for(let key in attr) {
            attr_str += key + "='" + attr[key] + "'"
        }

        rendered_str += "<" + node.tagName +  " " + attr_str + "> "

        let child_len = node.children.length

        for(let j = 0; j < child_len; j++) {
            if(typeof node.children[j] == 'string') {
                rendered_str += node.children[j] + " "
            } else if(typeof node.children[j] == 'object') {
                rendered_str += create_html_str("", node.children[j])
            }
        }
        rendered_str += "</" + node.tagName + ">\n"
    } else {
        console.log("Error")
    }

    return (rendered_str)
}

function create_innerhtml(node, rendered_str="") {
    let attr = node.attributes
    let attr_str = ""

    for(let key in attr) {
        attr_str += key + "='" + attr[key] + "'"
    }

    rendered_str += "<" + node.tagName +  " " + attr_str + "> "

    let child_len = node.children.length

    for(let j = 0; j < child_len; j++) {
        if(typeof node.children[j] == 'string') {
            rendered_str += node.children[j] + " "
        } else if(typeof node.children[j] == 'object') {
            rendered_str += create_innerhtml(node.children[j], "")
        }
    }
    rendered_str += "</" + node.tagName + ">"
    return (rendered_str)
}

function create_html(node_list) {
    let rendered_str = ""
    node_list.forEach((ele) => {
        rendered_str +=  create_innerhtml(ele, "")
    })
    return rendered_str
}

function create_jade_str(node_list) {
    let len = node_list.length
    for(let i = 0; i < len; i++) {
        let attr = node_list[i].attributes
        let attr_str = ""
        for(let key in attr) {
            attr_str += key + "='" + attr[key] + "'"
        }
        rendered_str += node_list[i].tagName +  "(" + attr_str + ")"

        let child_len = node_list[i].children.length
        console.log(child_len)
        for(let j = 0; j < child_len; j++) {
            if(typeof node_list[i].children[j] == 'string') {
                rendered_str += " " + node_list[i].children[j] + " "
            } else if(typeof node_list[i].children[j] == 'object') {
                rendered_str += "    "
                // create_html_str(node_list[i].children)
                console.log("All right")
            }
        }
    }
    return rendered_str
}