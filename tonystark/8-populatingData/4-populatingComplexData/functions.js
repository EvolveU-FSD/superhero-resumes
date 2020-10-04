const produce = {
   canadianProduce: [
    {
        name: 'Apples',
        price: .79
    },
    {
        name: 'Peaches',
        price: .59
    }
   ],
   americanProduce: [
    {
        name: 'Oranges',
        price: .89
    },
    {
        name: 'Watermelon',
        price: 6.99
    }
   ]
}

function OnloadFunction(){
    const canadianProduceList = document.getElementById('canadianProduceList')
    produce.canadianProduce.forEach( produceItem => {
        console.log(produceItem)
        const newProduceDiv = document.createElement('div')
        newProduceDiv.classList.add('listItem')
        canadianProduceList.appendChild(newProduceDiv)

        const produceName = document.createElement('div')
        produceName.textContent = produceItem.name
        newProduceDiv.appendChild(produceName)

        const producePrice = document.createElement('div')
        producePrice.textContent = `$ ${produceItem.price}`
        newProduceDiv.appendChild(producePrice)
    })

    const americanProduceList = document.getElementById('americanProduceList')
    produce.americanProduce.forEach( produceItem => {
        console.log(produceItem)
        const newProduceDiv = document.createElement('div')
        newProduceDiv.classList.add('listItem')
        americanProduceList.appendChild(newProduceDiv)

        const produceName = document.createElement('div')
        produceName.textContent = produceItem.name
        newProduceDiv.appendChild(produceName)

        const producePrice = document.createElement('div')
        producePrice.textContent = `$ ${produceItem.price}`
        newProduceDiv.appendChild(producePrice)
    })
}
