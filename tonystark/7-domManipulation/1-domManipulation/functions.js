function debugAddress1(){
    const address1Element=document.getElementById('address1')
    debugger
    // let's use the console to see what we can see
}

function alertName(){
    const nameElement=document.getElementById('name')
    const name = nameElement.textContent
    alert('Hello '+name)
}

function whitenBackgroundColor() {
    const body=document.getElementById('body')
    body.style.backgroundColor = "white"
}

function toggleEducationCollapsed(){
    const educationBody=document.getElementById('educationContent')
    const collapsed = educationBody.classList.contains('collapsed')
    if (collapsed)
        educationBody.classList.remove('collapsed')
    else
        educationBody.classList.add('collapsed')
}