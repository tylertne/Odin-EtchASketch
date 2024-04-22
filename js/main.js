const main = document.querySelector('main')
for(let i = 0; i < 16 ** 2; i++){
    let div = document.createElement('div')
    div.style.width = '6.25%'
    div.style.height = '6.25%'
    main.appendChild(div)
}

let divs = document.querySelectorAll('div')

function highlight(ele){
    ele.target.classList.add('highlight')
}

divs.forEach(div => {
    div.addEventListener('mouseenter', highlight)
})

function newGrid(){
    let gridSize = Number(prompt('How many squares per side?'))
    if(gridSize > 100){
        alert('value too high, try again')
        newGrid()
    }
    else{
    while (main.firstChild) {
    main.removeChild(main.lastChild);
    }
    for(let i = 0; i < gridSize ** 2; i++){
        let div = document.createElement('div')
        div.style.width = 100/gridSize + '%'
        div.style.height = 100/gridSize + '%'
        main.appendChild(div)
    }
    divs = document.querySelectorAll('div')
    divs.forEach(div => {
    div.addEventListener('mouseenter', highlight)
    })
}
}

const newGridButton = document.querySelector('button')

newGridButton.addEventListener('click', newGrid)