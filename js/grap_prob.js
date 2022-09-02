var graph_data = [{node_name:"Alice", friend_list:["Bob", "Charles", "Dill", "Charlie"]}, {node_name:"Bob", friend_list:["Alice", "Bob2", "Dill", "Charlie"]}, {node_name:"Bob2", friend_list:["Bob"]}, {node_name:"Charles", friend_list:["Hob", "Charlie", "Alice"]}, {node_name:"Dill", friend_list:["Alice", "Bob", "Charlie"]}, {node_name:"Hob", friend_list:["Charles","Dyllan"]}, {node_name:"Dyllan", friend_list:["Hob", "Charles"]}, {node_name:"Charlie", friend_list:["Alice", "Bob", "Dill", "Charles"]}]


[{0, Alice}, {1, Bob}, {2, Bob2}, {3, Charles}, {4, Dill}, {5, Hob}, {6, Dylan}, {7, Charlie}]


function find_indx(graph, n_name) {
    let outer_len = graph.length
    for(let i = 0; i < outer_len; i++) {
        if(graph[i].node_name != n_name) {
            continue
        } else {
            return i
        } 
    }
}


function makeAdjMatrix(graph) {
    let outer_len = graph.length
    function find_indx(n_name) {
        for(let i = 0; i < outer_len; i++) {
            if(graph[i].node_name != n_name) {
                continue
            } else {
                indx =  i
            } 
        }
    }

    let adj_list = []
    let i = 0
    let indx = -1;

    while(i < outer_len) {
        let j = 0
        let row = []
        while(j < outer_len) {
            row[j] = 0
            j++
        }
        adj_list.push(row)
        i++
    }
    i = 0
    while(i < outer_len) {
        let j = 0
        let inner_len = graph[i].friend_list.length
        while(j < inner_len) {
            find_indx(graph[i].friend_list[j])
            // console.log(indx)
            if(indx != -1) {
                adj_list[i][indx] = 1
            }
            j++
        }
        i++
    }
    console.log(adj_list)
}

function dotplot(graph, direction) {
    let graph_str = ""
    for (let itm of graph) {
        let itm_name = itm.node_name
        itm.friend_list.forEach(frnd => {
            graph_str = graph_str.concat("\"" + itm_name + '"' + direction + '"' + frnd + "\";")
        })
    }
    return graph_str
} 

function isFriendOfPrevious(graph, node_indx) {
    let i, j = 0
    let friend_indx = []
    let outer_len = graph.length
    let inner_len = graph[node_indx].friend_list.length
    
    console.log(friend_indx)
}



// graph G { Alice--Bob; Alice--Charles; Alice--Dill; Bob--Bob2; Dill--Bob; Charles--Hob; Hob--Dillan; Charlie--Alice; Charlie--Bob; Charlie--Dill; Charlie--Charles }

var graph_data = [{name:"Alice", edges:["Bob", "Charles", "Dill", "Charlie"]}, {name:"Bob", edges:["Bob2", "Dill", "Charlie", "Alice"]}, {name:"Charles", edges:["Hob", "Charlie", "Alice"]}, {name:"Dill", edges:["Alice", "Bob", "Charlie"]}, {name:"Hob", edges:["Dill", "Charles", "Dillan"]}, {name:"Dillan", edges:["Hob"]}]
function addNodeCompletely(graph, node_name, node_edges) {
    function uniqueFriend(arr) {
        let len = arr.length
        let friend = []
        friend.push(arr[0])
        for(let i = 1; i < len; i++) {
            if(friend. indexOf(arr[i]) == -1) {
                friend.push(arr[i])
            }
        }
        return  friend
    }
    let i = 0
    let len = graph.length
    function addNode() {
        for(i; i < len; i++) {
            if(graph[i].name == node_name) {
                let friend_node = node_edges.concat(graph[i].edges)
                graph[i].edges = uniqueFriend(friend_node)
                return graph
            }
        }
        graph.push({name:node_name, edges:node_edges})
        return graph
    }
    addNode()
    function find_node(graph, node_name) {
        return graph.find(ele => ele.name == node_name).edges}
    if(i < graph.length) {
        graph[i].edges.forEach(elm => {
        find_node(graph, elm).push(node_name)
        })
    } else {
        graph[i + 1].edges.forEach(elm => {
        find_node(graph, elm).push(node_name)
        })
    }
}
