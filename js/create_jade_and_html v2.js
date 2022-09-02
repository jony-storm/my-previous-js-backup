var node_list = [{
    tagName:'h1',
    attributes:  {class:'special', id:'title'},
    children:[
    'The Sky Is Not', {
        tagName: "span",
        attributes: {id: "blue"},
        children: ['BLUE']
    }]
},
{
    tagName: 'h2',
    attributes: {class: 'special', id:'subtitle'},
    children: ["Isn't it?"]
}]

var rendered_str = ""
function create_html_str(rendered_str, node) {
    if (typeof node !== 'string') {
            let attr = node.attributes
            let attr_str = ""
            for(let key in attr) {
                attr_str += key + "='" + attr[key] + "'"
            }
            rendered_str += "<" + node.tagName +  " " + attr_str + "> "

            let child_len = node.children.length
            // console.log(child_len)
            for(let j = 0; j < child_len; j++) {
                rendered_str += create_html_str("", node.children[j])
            }
            rendered_str += "</" + node.tagName + ">"
        
    } else {
        return node
        
    }
    return rendered_str
}
