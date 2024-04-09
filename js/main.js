const main = document.querySelector('main')
for(let i = 0; i < 256; i++){
    let div = document.createElement('div')
    main.appendChild(div)
}

const divs = document.querySelectorAll('div')

function highlight(ele){
    ele.target.classList.add('highlight')
}

divs.forEach(div => {
    div.addEventListener('mouseenter', highlight)
})
