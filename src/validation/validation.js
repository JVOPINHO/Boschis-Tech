export function validity(input) {
    const typeOfInput = input.dataset.tipo

    if (input.validity.valid) {
        input.parentElement.querySelector('#errorMessage').innerHTML = ''
    } else {
        input.parentElement.style.display = 'block'
        input.parentElement.querySelector('#errorMessage').innerHTML = errorMessageArray(typeOfInput, input)
    }    
}

const errorMessageArray = {
    name: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },

    price: {
        valueMissing: 'O campo preço não pode estar vazio.'
    },

    description: {
        valueMissing: 'O campo de descrição não pode estar vazio.'
    },

    dateBuy: {
        valueMissing: 'O campo de data não pod estar vazio.'
    }
}

const typeOfError = [
    'valueMissing'
]

function showErrorMessage(typeOfInput, input) {
    let message = ''
    typeOfError.forEach(erro => {
        if (input.validity[erro]) {
            message = errorMessageArray[typeOfInput][erro]
        }
    })

    return message
}