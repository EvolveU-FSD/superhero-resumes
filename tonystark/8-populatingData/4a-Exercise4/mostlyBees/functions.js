const contacts = {
   instructors: [
    {
        name: 'Tony',
        email: 'tony@ducklabs.ca'
    },
    {
        name: 'Chris',
        email: 'chris@ducklabs.ca'
    }
   ],
   classmates: [
    {
        name: 'Jen',
        email: 'Jen@gmail.com'
    },
    {
        name: 'Al',
        email: 'Al@gmail.com'
    }
   ]
}

function OnloadFunction(){
    const instructorList = document.getElementById('instructorList')
    contacts.instructors.forEach( contact => {
        console.log(contact)
        const newContactDiv = document.createElement('div')
        newContactDiv.classList.add('listItem')
        instructorList.appendChild(newContactDiv)

        const contactName = document.createElement('div')
        contactName.textContent = contact.name
        newContactDiv.appendChild(contactName)

        const contactEmail = document.createElement('div')
        contactEmail.textContent = `${contact.email}`
        contactEmail.classList.add('email')
        newContactDiv.appendChild(contactEmail)
    })

    const classmateListList = document.getElementById('classmateList')
    contacts.classmates.forEach( contact => {
        console.log(contact)
        const newContactDiv = document.createElement('div')
        newContactDiv.classList.add('listItem')
        classmateListList.appendChild(newContactDiv)

        const contactName = document.createElement('div')
        contactName.textContent = contact.name
        newContactDiv.appendChild(contactName)

        const contactEmail = document.createElement('div')
        contactEmail.textContent = `${contact.email}`
        contactEmail.classList.add('email')
        newContactDiv.appendChild(contactEmail)
    })
}
