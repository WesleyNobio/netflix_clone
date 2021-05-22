var input = document.querySelectorAll('.email_input')
var label = document.querySelectorAll('.lab')
var i = document.querySelectorAll('.input')
var div_msg = document.querySelectorAll('.e_msg')
var div_span = document.querySelectorAll('.span_msg')

var email = ["",""], input_yellow = [false, false];
var email_completo = [false, false], email_icompleto = [false, false];

input.forEach((element, key) => {

    element.addEventListener('focusin', (event) => {
        event.target.placeholder = ""
        label[key].classList.add('lb')
        i[key].classList.add('ig')
    })
});

input.forEach((element, key) => {

    element.addEventListener('focusout', (event) => {
        event.target.placeholder = "Email"
        label[key].classList.remove('lb')
        i[key].classList.remove('ig')

        if (email[key].length < 5) {
            add_msg(key)
            input_yellow[key] = true;
        }
        if(email_icompleto[key] && !email_completo[key]){
            add_msg(key)
            div_span[key].innerHTML = 'Incira um email válido.';
            input_yellow[key] = true;
        }
    })
});

function add_msg(key) {
    div_msg[key].classList.add('msg_f')
    input[key].classList.add('ib')
}
function remove_msg(key) {
    div_msg[key].classList.remove('msg_f')
    input[key].classList.remove('ib')
}

input.forEach((element, key) => {
    element.addEventListener('input', (event) => {
        email[key] = event.target.value;
        var verficacao = verifica_email(event.target.value)
    
        if (verficacao) email_completo[key] = true;
    
        if (input_yellow[key] && verficacao || email_completo[key] && verficacao) {
            remove_msg(key)
            input_yellow[key] = false;
            return;
        }
        if (input_yellow[key] && email[key].length >= 5 || email[key].length >= 5 && email_completo[key] && !verficacao) {
            add_msg(key)
            div_span[key].innerHTML = 'Incira um email válido.'
        }
        if (input_yellow[key] && email[key].length <= 5 || email[key].length <= 5 && email_completo[key] && !verficacao) {
            div_span[key].innerHTML = 'O email é obrigatório.'
        }

        if(email[key].length >= 5 && !verficacao) email_icompleto[key] = true;

    })
})

const verifica_email = (email) => {
    var regex = /@gmail\.com$/;
    var re = regex.test(email)
    return re;
}