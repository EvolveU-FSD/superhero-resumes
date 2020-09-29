function changeThroughStyle(){
    const button=document.getElementById('changeStyle')
    const currentBackgroundColor = button.style.backgroundColor
    if (currentBackgroundColor === 'red')
        button.style.backgroundColor = 'pink'
    else
        button.style.backgroundColor = 'red'
}

function changeThroughClass(){
    const button=document.getElementById('changeClass')
    const classList = button.classList
    if (classList.contains('button2'))
        classList.remove('button2')
    else
        classList.add('button2')
}