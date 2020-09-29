function recordAddress(){
    const streetAddress = document.getElementById('streetAddress').value
    const city = document.getElementById('city').value

    debugger

    document.getElementById('yourAddress').textContent =
        streetAddress + ', ' + city
}