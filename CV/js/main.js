import { FormContact } from './form-contact.js'

export class Main {

    constructor() {
        // elementos del DOM
        this.oFormContact = document.querySelector('#contact')
        this.oInputName = document.querySelector('#name')
        this.oBotonMenu = document.querySelector('#menuBtn')
        this.oTextareaOtro = document.querySelector('#message-otro')
        this.oSelectSeleccion = document.querySelector('#selection')


        this.aMenu = document.querySelectorAll("nav#top-menu a")
        this.aSections = document.querySelectorAll("section")
        this.oOffsets = []

        this.prepararNavegacion()
    }

    defineEventListeners() {
        this.oInputName.addEventListener('change', this.probarInput)
        this.oInputName.addEventListener('input', this.probarInput)
        this.oBotonMenu.addEventListener('click', this.toggleMenu)
        this.oFormContact.addEventListener('submit', this.leerContact)
        this.oSelectSeleccion.addEventListener('change', this.mostrarOtro)


        window.addEventListener('scroll', this.changeMenuStyle.bind(this))


    }


    toggleMenu() {
        document.querySelector('#top-menu').classList.toggle('menu-top')
    }

    probarInput(oE) {
        if (oE.type == "change") {
            console.log('change')
            console.dir(oE.target.value)
        } else if (oE.type == "input") {
            console.log('input')
            console.dir(oE.target.value)
        }
    }

    changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >= this.oOffsets['#home'] && pageOffset < this.oOffsets['#about']) {
            menuItem = 0
        } else if (pageOffset >= this.oOffsets['#about'] && pageOffset < this.oOffsets['#studies']) {
            menuItem = 1
        } else if (pageOffset >= this.oOffsets['#studies'] && pageOffset < this.oOffsets['#experience']) {
            menuItem = 2
        } else if (pageOffset >= this.oOffsets['#experience'] && pageOffset < this.oOffsets['#video-about-me']) {
            menuItem = 3
        } else if (pageOffset >= this.oOffsets['#video-about-me'] && pageOffset < this.oOffsets['#contact']) {
            menuItem = 4
        } else {
            menuItem = 5
        }

        this.aMenu.forEach(
            (item) => item.classList.remove('active')
        )
        this.aMenu[menuItem].classList.add('active')
    }

    prepararNavegacion() {
        this.aSections.forEach(
            (item) => {
                let cumulative = this.cumulativeOffset(item);
                this.oOffsets['#' + item.id] = cumulative;
            }
        )
        console.log(this.oOffsets)
    }

    cumulativeOffset(element) {
        var top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while (element);
        return top;
    };

    leerContact(oE) {
        oE.preventDefault()
        let form = new FormContact()
        form.guardarDatos()
    }

    mostrarOtro(oE) {
        oE.preventDefault()
        let form = new FormContact()
        form.mostrarTextarea()
    }

}