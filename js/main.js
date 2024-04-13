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
    while (main.firstChild) {
    main.removeChild(main.lastChild);
    }
    for(let i = 0; i < gridSize ** 2; i++){
        let div = document.createElement('div')
        //update width and height calculation to be 100% / grid size to fix, then its working
        div.style.width = '50px'
        div.style.height = '50px'
        main.appendChild(div)
    }
    divs = document.querySelectorAll('div')
    divs.forEach(div => {
    div.addEventListener('mouseenter', highlight)
    })
}

const newGridButton = document.querySelector('button')

newGridButton.addEventListener('click', newGrid)