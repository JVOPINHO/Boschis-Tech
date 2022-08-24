import { customerService } from '../service/cliente-service.js'

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = event.target.querySelector('[data-name]').value
    const date = event.target.querySelector('[data-dateBuy]').value
    const price = event.target.querySelector('[data-price]').value
    const description = event.target.querySelector('[data-description]').value

    try {
        customerService.createCustomer(name, date, price, description)
        .then(() => {
            window.location.href = '../registerCustomer_concluded.html'
        })
    }
    catch (erro) {
        window.location.href = '../error404.html'
    }
})