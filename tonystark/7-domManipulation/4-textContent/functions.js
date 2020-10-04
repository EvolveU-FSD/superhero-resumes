function sayHello(){
    const nameInput=document.getElementById('nameinput')
    const name = nameInput.value

    const sayHelloOutput=document.getElementsByClassName('sayHelloHere')
    const theFirstSayHello = sayHelloOutput[0]
    theFirstSayHello.textContent = 'Hello '+name+'!'
}