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

function putContactListOnPage(contactList, listContainerId) {
    let listContainerDiv = document.getElementById(listContainerId)
    contactList.forEach((instructor) => {
      let rowDiv = document.createElement('div')
      rowDiv.classList.add('listItem')
      listContainerDiv.appendChild(rowDiv)
  
      let nameDiv = document.createElement('div')
      nameDiv.textContent = instructor.name
      rowDiv.appendChild(nameDiv)
  
      let emailDiv = document.createElement('div')
      emailDiv.classList.add('email')
      emailDiv.textContent = instructor.email
      rowDiv.appendChild(emailDiv)
    })  
}

function OnloadFunction(){
    putContactListOnPage(contacts.instructors, 'instructorList')
    putContactListOnPage(contacts.classmates, 'classmateList')
}
