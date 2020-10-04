const address = {
    streetAddress: '212B Baker Street',
    city: "London",
    country: 'England'
}

function OnloadFunction(){
    const streetAddress = document.getElementById('streetAddress')
    streetAddress.textContent = address.streetAddress
    
    const cityAndCountry = document.getElementById("cityAndCountry")
    cityAndCountry.textContent = `${address.city}, ${address.country}` // ask Tony about back tick!
}
