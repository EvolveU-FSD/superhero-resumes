function getFlour(numberOfCups)
{
    const flour = `${numberOfCups} cups flour`
    console.log('Getting', flour)
    // do something to actually get the flour
    return flour
}

function fetchSomeSugar(numberOfCups)
{
    const sugar = `${numberOfCups} cups sugar`
    console.log('Getting', sugar)
    // do something to actually get the sugar
    return sugar
}

module.exports = {
    getFlour, 
    getSugar: fetchSomeSugar
}