import { customerService } from '../service/cliente-service.js'

const numberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const creatNewLine = (name, date, price, description, id) => {
    const newLineCustomer = document.createElement('tr')
    const formatedDate = date.split('-')
    const cssClass = price > 0 ? 'income': 'expense'
    const formatedPrice = numberFormat.format(price)

    const content = `
        <td class="py-4 px-8 capitalize">${name}</td>
        <td class="py-4 px-8">${formatedDate[2]}/${formatedDate[1]}/${formatedDate[0]}</td>
        <td class="py-4 px-8 ${cssClass}" data-price="${price}">${formatedPrice}</td>
        <td class="py-4 px-8 capitalize">${description}</td>
        <td class="py-4 px-8 cursor-pointer">
            <a href="../editCustomer.html?id=${id}">EDITAR</a>
        </td>
        <td class="py-4 px-8 text-left text-red cursor-pointer" id="deleteButton">EXCLUIR</td>
    `

    newLineCustomer.innerHTML = content
    newLineCustomer.dataset.id = id

    return newLineCustomer
}

const getDataPrices = () => {
    const prices = [...document.querySelectorAll('[data-price]')].map(element => Number(element.getAttribute('data-price')))

    const incomes = prices.filter(price => price > 0).reduce((a, b) => a + b, 0)
    const expenses = prices.filter(price => price <= 0).reduce((a, b) => a + b, 0)
    
    return {
        incomes,
        expenses,
        total: incomes - (expenses * -1)
    }
}

const table = document.querySelector('[data-table]')

table.addEventListener('click', async (event) => {
    let deleteButton = event.target.id === 'deleteButton'

    if (deleteButton) {
        try {
            const lineCustomer = event.target.closest('[data-id]')
            let id = lineCustomer.dataset.id
            await customerService.removeCustomer(id)
            lineCustomer.remove()
        }
        catch (erro) {
            window.location.href = '../error404.html'
        }
    }
})

const render = async () => {
    try {
        const listCustomer = await customerService.customerList()
        listCustomer.forEach(element => {
            table.appendChild(creatNewLine(element.name, element.date, element.price, element.description, element.id))
        })

        const dataPrices = getDataPrices()

        const incomesLabel = document.getElementById('incomes-label')
        const expensesLabel = document.getElementById('expenses-label')
        const totalLabel = document.getElementById('total-label')

        incomesLabel.innerHTML = numberFormat.format(dataPrices.incomes)
        expensesLabel.innerHTML = numberFormat.format(dataPrices.expenses)
        totalLabel.innerHTML = numberFormat.format(dataPrices.total)
    }
    catch (erro) {
        console.log(erro);
        window.location.href = '../error404.html'
    }
}

render()