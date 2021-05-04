var input = document.querySelector('.email_input')
var label = document.querySelector('.lab')
var i = document.querySelector('.input')
var div_msg = document.querySelector('.e_msg')
var div_span = document.querySelector('.span_msg')
var email = "", input_yellow = false, email_completo = false;

input.addEventListener('focusin', (event) => {

    event.target.placeholder = ""
    label.classList.add('lb')
    i.classList.add('ig')
})

input.addEventListener('focusout', (event) => {

    event.target.placeholder = "Email"
    label.classList.remove('lb')
    i.classList.remove('ig')

    if (email.length < 5) {
        add_msg()
        input_yellow = true;
    }
})

function add_msg() {
    div_msg.classList.add('msg_f')
    input.classList.add('ib')
}
function remove_msg() {
    div_msg.classList.remove('msg_f')
    input.classList.remove('ib')
}

input.addEventListener('input', (event) => {
    email = event.target.value;
    var verficacao = verifica_email(event.target.value)

    if (verficacao) email_completo = true;

    if (input_yellow && verficacao || email_completo && verficacao) {
        remove_msg()
        input_yellow = false;
        return;
    }
    if (input_yellow && email.length >= 5 || email.length >= 5 && email_completo && !verficacao) {
        add_msg()
        div_span.innerHTML = 'Incira um email válido.'
    }
    if (input_yellow && email.length <= 5 || email.length <= 5 && email_completo && !verficacao) {
        div_span.innerHTML = 'O email é obrigatório.'
    }


})

const verifica_email = (email) => {

    var regex = /@gmail\.com$/;
    var re = regex.test(email)
    return re;
}