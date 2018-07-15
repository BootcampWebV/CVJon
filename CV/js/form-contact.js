export class FormContact {
    constructor() {
        // elementos del DOM
        this.oInputName = document.querySelector('#name')
        this.oInputEmail = document.querySelector('#email')
        this.oInputPhone = document.querySelector('#phone')
        this.oTextMessage = document.querySelector('#message')
        this.oSelectSeleccion = document.querySelector('#selection')
        this.oTextareaOtro = document.querySelector('#message-otro')
        this.oData = {
            name: '',
            email: '',
            phone: '',
            message: '',
            seleccion: '',
            otro: ''
        }
    }

    guardarDatos() {
        this.oData = {
            name: this.oInputName.value,
            email: this.oInputEmail.value,
            phone: this.oInputPhone.value,
            message: this.oTextMessage.value,
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value,
            otro: this.oTextareaOtro.value
        }
        let textarea = this.oTextareaOtro;
        let select = this.oSelectSeleccion.value;

        console.dir(this.oData)
    }

    mostrarTextarea() {
        let textarea = this.oTextareaOtro;
        let select = this.oSelectSeleccion.value;

        textarea.style.display = 'none';

        if (select == 'op4') {
            textarea.style.display = 'inline-block';
        } else {
            textarea.style.display = 'none';;
        }
    }
}