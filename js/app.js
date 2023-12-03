/* Ocultar y mostrar el menú de navegación */
const nav = document.querySelector('#header__nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
    abrir.classList.add('unvisible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
    abrir.classList.remove('unvisible')
})

