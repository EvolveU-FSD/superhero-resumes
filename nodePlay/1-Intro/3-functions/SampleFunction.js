function getFlour(numberOfCups)
{
    const flour = `${numberOfCups} cups flour`
    console.log('Getting', flour)
    // do something to actually get the flour
    return flour
}

console.log('Recieved ',getFlour(2))
