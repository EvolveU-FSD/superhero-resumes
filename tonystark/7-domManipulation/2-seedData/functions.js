const name = "Tony Stark"
const languages = ['English', 'French', 'Spanish', 'Italian', 'Dari']
const skills = ['Python', 'Javascript', 'CSS', 'Robotics', 'Rocket Science']
const address = {streetAddress: '39 Cliffside Drive', city: 'Malibu', state: 'CA', code: '56677'}

function loadData(){
    loadName()
    loadLanguages()
    loadSkills()
    
    loadAddress()
}

function loadName(){
    const nameElement = document.getElementById('name')
    nameElement.textContent = name
}

function loadLanguages(){
    const languageListElement = document.getElementById('languageList')
    languages.forEach(language => {
        const newLi = document.createElement('li')
        newLi.appendChild(document.createTextNode(language))
        languageListElement.appendChild(newLi)
    });
}

function loadSkills(){
    const skillListElement = document.getElementById('skillList')
    skills.forEach(skill => {
        const newLi = document.createElement('li')
        newLi.appendChild(document.createTextNode(skill))
        skillListElement.appendChild(newLi)
    });
}

function loadAddress(){
    const address1 = document.getElementById('address1')
    address1.textContent = address.streetAddress

    const address2 = document.getElementById('address2')
    address2.textContent = `${address.city}, ${address.state} ${address.code}`
}