/* Ocultar y mostrar el menú de navegación */
const navElement = document.querySelector('#header__nav')
const openElement = document.querySelector('#abrir')
const closeElement = document.querySelector('#cerrar')

const formElement = document.querySelector('.contact__form')
const elementsToValidate = document.querySelectorAll('.contact__form .contact__input') /* Todos los elementos a validar */

const expressions = {
	message: /^[a-zA-ZÀ-ÿ0-9\s\_\-/*+:,;.%$()&=¿?!¡]{4,80}$/, // Diversos caracteres
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	number: /^\d{10,14}$/ // 10 a 14 numeros.
}

const elementsValidation = {
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
}

/* Ocultar y mostrar el menú de navegación */
openElement.addEventListener('click', () => {
    navElement.classList.add('visible')
    openElement.classList.add('unvisible')
})

closeElement.addEventListener('click', () => {
    navElement.classList.remove('visible')
    openElement.classList.remove('unvisible')
})
/* Ocultar y mostrar el menú de navegación */


elementsToValidate.forEach( (element) => {
    element.addEventListener('blur', validateForm) /* Al salir del campo validado */
})

function validateForm(e) {
    switch (e.target.name) {
        case 'name':
            if(expressions.name.test(e.target.value)) {
                elementsValidation.name = true
            }  
        break
        case 'email':
            if(expressions.email.test(e.target.value)) {
                elementsValidation.email = true
            }  
        break
        case 'phone':
            if(expressions.number.test(e.target.value)) {
                elementsValidation.phone = true
            }  
        break
        case 'subject':
            if(expressions.message.test(e.target.value)) {
                elementsValidation.subject = true
            }     
        break
        case 'message':
            if(expressions.message.test(e.target.value)) {
                elementsValidation.message = true
            } 
        break
    }
}

formElement.addEventListener('submit', (e) => {
   /*  e.preventDefault() */

    if(elementsValidation.name && elementsValidation.email && elementsValidation.phone && elementsValidation.subject && elementsValidation.message) {
        formElement.reset()
        printAlert('Enviado correctamente')

        /* Reseteamos los valores para validar de nuevo al hacer click en submit */
        elementsValidation.name  = false
        elementsValidation.email = false
        elementsValidation.phone = false
        elementsValidation.subject = false
        elementsValidation.message = false
    } else {
        printAlert('Todos los campos son obligatorios', 'error')

        if(elementsValidation.name == false) {
            printAlert('Error, nombre inválido', 'error')
        }
        if(elementsValidation.email == false) {
            printAlert('Error, email inválido', 'error')
        }
        if(elementsValidation.phone == false) {
            printAlert('Error, teléfono inválido', 'error')
        }
        if(elementsValidation.subject == false) {
            printAlert('Error, asunto inválido', 'error')
        }
        if(elementsValidation.message == false) {
            printAlert('Error, mensaje inválido', 'error')
        }
    }
})


function printAlert(message, typeMessage) {

    const alerta = document.querySelector('.alerta')

    if(!alerta) {
        /* Creamos la alerta */
        const alertaContenedor = document.createElement('P')
        alertaContenedor.classList.add('alertMessage')

        if(typeMessage === 'error') {
            alertaContenedor.classList.add('error')
        } else {
            alertaContenedor.classList.add('correct')
        }

        alertaContenedor.textContent = message
        formElement.insertBefore(alertaContenedor,formElement[5]) /* Elegir la ubicacion donde se generara */

        setTimeout(() => {
            alertaContenedor.remove()
        }, 2000);
    }
}

