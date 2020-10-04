const produce = {
    name: 'Orange',
    descriptiom: "Sweet and tart. Enjoy California's own",
    price: '.79',
    image: 'orange.jpg'
}

function OnloadFunction(){

    // here's a freebie. You can change anything on an object like say the image src
    const producePicture = document.getElementById('producePicture')
    producePicture.src = produce.image
}
