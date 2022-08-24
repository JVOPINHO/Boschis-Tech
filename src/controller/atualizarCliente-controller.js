import { customerService } from '../service/cliente-service.js'

( async () => {
    const catchURL = new URL(window.location)
    const id = catchURL.searchParams.get('id')

    const inputName = document.querySelector('[data-name]')
    const inputDateBuy = document.querySelector('[data-dateBuy]')
    const inputPrice = document.querySelector('[data-price]')
    const inputDescription = document.querySelector('[data-description]')

    try {
        const data = await customerService.editCustomer(id)
        inputName.value = data.name
        inputDateBuy.value = data.dateBuy
        inputPrice.value = data.price
        inputDescription.value = data.description
    }
    catch (erro) {
        window.location.href = '../error404.html'
    }

    const form = document.querySelector('[data-form]')
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        try {
            await customerService.updateCustomer(id, inputName.value, inputDateBuy.value, inputPrice.value, inputDescription.value)
            window.location.href = "../editConcluded.html"
        }
        catch (erro) {
            window.location.href = '../error404.html'
        }
    })  
})
()