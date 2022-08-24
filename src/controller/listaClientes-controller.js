import { customerService } from '../service/cliente-service.js'

const creatNewLine = (name, date, price, description, id) => {
    const newLineCustomer = document.createElement('tr')
    const formatedDate = date.split('-')
    const cssClass = price > 0 ? 'income': 'expense'
    price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

    const content = `
        <td class="py-4 px-8 capitalize">${name}</td>
        <td class="py-4 px-8">${formatedDate[2]}/${formatedDate[1]}/${formatedDate[0]}</td>
        <td class="py-4 px-8 ${cssClass}" data-value='${price}'>${price}</td>
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
    }
    catch (erro) {
        window.location.href = '../error404.html'
    }
}

render()