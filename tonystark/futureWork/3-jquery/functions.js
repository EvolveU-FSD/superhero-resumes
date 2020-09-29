function alertName(){
    const nameElement=$('#name')
    const name = nameElement.text()
    alert('Hello '+name)
}

function whitenBackgroundColor() {
    const body=$('body')
    body.css('background-color', 'white')
}

function toggleEducationCollapsed(){
    const educationBody=$('#educationContent')
    const classes = educationBody.attr("class").split(/\s+/)
    const collapsed = classes.includes('collapsed')
    if (collapsed)
        educationBody.removeClass('collapsed')
    else
        educationBody.addClass('collapsed')
}