const produce = [
    'orange',
    'apple',
    'pineapple'
]

function OnloadFunction(){
    const produceList = document.getElementById('produceList')
    produce.forEach( produceItem => {
        const newProduceDiv = document.createElement('div')
        newProduceDiv.textContent = produceItem
        produceList.appendChild(newProduceDiv)
    })
}
