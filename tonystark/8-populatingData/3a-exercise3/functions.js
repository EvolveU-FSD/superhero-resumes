const instructors = [
    'Chris',
    'Anthony',
    'Jen',
    'Al'
]

function createInstructorNameDiv(instructorName) {
    let newInstructorNameDiv = document.createElement('div')
    newInstructorNameDiv.textContent = instructorName
    return newInstructorNameDiv
}

function addInstructorNameToInstructorList(divToAdd) {
    let instructorListDiv = document.getElementById('instructorList')
    instructorListDiv.appendChild(divToAdd)
}

function onloadFunction(){
    instructors.forEach((instructorName) => {
        let newInstructorNameDiv = createInstructorNameDiv(instructorName)
        addInstructorNameToInstructorList(newInstructorNameDiv)
    })
}
