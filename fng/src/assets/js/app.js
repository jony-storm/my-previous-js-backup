var icon = document.getElementById('menu_icon')
var ul = document.getElementById('nav_itm')
var to_open = true
icon.addEventListener('click', function () {
    if(to_open == true) {
        ul.classList.remove('list-inline')
        ul.classList.remove('pull-right')
        ul.classList.remove('hidden-xs')
        ul.classList.add('show')
        to_open =  false
    } else {
        ul.classList.remove('show')
        ul.classList.add('hidden-xs')
        to_open = true
    }
})