const CreateBoxModel = document.querySelector('#create-box-model')
// const RemoveBoxModel = document.querySelector('#remove-box-model')
const btnsPanel = document.querySelector('.buttons-panel')
const placeForBoxAppendDiv = document.querySelector('#append-div')

const theBtns = document.createElement('div')

var newChildNodes = document.body.childNodes;
var parent = document.createElement('div');
//добавление кнопки Remove boxes
parent.className = 'parent';
parent.id = 'mainBtn';

for (var i = 0; i < 3; i++) {
    parent.appendChild(newChildNodes.item(i));
    newChildNodes.item(0).parentNode.insertBefore(parent, newChildNodes.item(i));
}

const RemoveBoxModel = document.createElement('button')
RemoveBoxModel.textContent = 'Remove elements for flex model'
parent.appendChild(RemoveBoxModel)
RemoveBoxModel.setAttribute('id', 'remove-box-model')
btnsPanel.appendChild(theBtns)
theBtns.setAttribute('class', 'theBtns')
const theBtnsArr = ['display:flex', 'justify-content:space-between', 'justify-content:center', 'justify-content:flex-start', 'justify-content:flex-end', 'flex-direction:row', , 'flex-direction:row-reverse', 'flex-direction:column', , 'flex-direction:column-reverse', 'align-items:flex-start', 'align-items:flex-end', 'align-items:center']


theBtnsArr.map(el => {
    const aBtn = document.createElement('button')
    aBtn.textContent = el
    aBtn.setAttribute('class', el)
    aBtn.style.padding = 10 + 'px'
    aBtn.style.marginRight = 10 + 'px'
    aBtn.style.marginTop = 15 + 'px'
    aBtn.style.cursor = 'pointer'
    theBtns.appendChild(aBtn)

    aBtn.addEventListener('click', () => {
        // aBtn.classList.toggle('active')
        if (placeForBoxAppendDiv.children.length > 0) {
            aBtn.classList.toggle('active')
        } else {
            // aBtn.classList.remove('active')
        }
        // placeForBoxAppendDiv.style = placeForBoxAppendDiv.className.split(' ').join(';')
        if(placeForBoxAppendDiv.children.length>0){
            placeForBoxAppendDiv.classList.toggle(el)
            placeForBoxAppendDiv.style = placeForBoxAppendDiv.className.split(' ').join(';')
        }
        if (aBtn.classList.contains('active')) {
            aBtn.textContent = el + ' : active'
        } else {
            aBtn.textContent = el
        }
        
    })
    
})

const createTheBox = () => {
    for (let i = 0; i < 3; i++) {
        const aBox = document.createElement('div')
        placeForBoxAppendDiv.appendChild(aBox)
        
        aBox.style.width = 50 + 'px'
        aBox.style.height = 50 + 'px'
        aBox.style.backgroundColor = 'green'
        aBox.style.marginTop = 5 + 'px'
        aBox.style.marginRight = 5 + 'px'
        if(placeForBoxAppendDiv.children.length>0){
            placeForBoxAppendDiv.style = placeForBoxAppendDiv.className.split(' ').join(';')
            aBox.setAttribute('class', `aBox-${i + 1}`)
        }
        
    }
}

const removeTheBox = () => {
    // if(placeForBoxAppendDiv.children.length > 0){
    //     placeForBoxAppendDiv.removeChild(placeForBoxAppendDiv.lastChild)
    // }
    // if(placeForBoxAppendDiv.children.length > 0){
    //     placeForBoxAppendDiv.removeChild(placeForBoxAppendDiv.lastChild)
    // }
    // if(placeForBoxAppendDiv.children.length > 0){
    //     placeForBoxAppendDiv.removeChild(placeForBoxAppendDiv.lastChild)
    // }
    if (placeForBoxAppendDiv.children.length > 0) {
        for (let i = 0; i < 3; i++) {
            placeForBoxAppendDiv.removeChild(placeForBoxAppendDiv.lastChild)
        }
    } 
}
 const removeClass = () => {
    if (placeForBoxAppendDiv.children.length <= 0) {
        document.location.reload()
        
    }
 }


const showPlaceForBoxAppendDiv = () => {
    placeForBoxAppendDiv.style.display = 'block'
}
const showBtnsPanel = () => {
    btnsPanel.style.display = 'block'
}

CreateBoxModel.addEventListener('click', () => {
    showBtnsPanel()
    showPlaceForBoxAppendDiv()
    createTheBox()
})

RemoveBoxModel.addEventListener('click', () => {
    removeTheBox()
    removeClass()
})

btnsPanel.style.display = 'none'
placeForBoxAppendDiv.style.display = 'none'


