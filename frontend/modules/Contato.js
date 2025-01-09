import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass); 
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return; 
        this.form.addEventListener('submit', e => {
            e.preventDefault(); 
            this.validate(e); 
        }); 

    }

    validate(e) {
        const el = e.target; 
        const emailInput = el.querySelector('input[name="email"]');
        const nomeContatoInput = el.querySelector('input[name="nome"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false; 

        if(!nomeContatoInput.value) {
            alert('O campo "Nome" precisa ser preenchido'); 
            error = true; 
        }
        if(!emailInput.value && !telefoneInput.value) {
            alert('Para cadastrar um contato, é necessário que o campo "Email" ou "Telefone" sejam preenchidos')
            error = true;
        }
        if(emailInput.value  && !validator.isEmail(emailInput.value)) {
            alert('Email inválido'); 
            error = true; 
        }

        if(!error) el.submit();
    }
}