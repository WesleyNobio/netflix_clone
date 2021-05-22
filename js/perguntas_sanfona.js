
var p_btn = document.querySelectorAll('.p_btn')
var p_texto = document.querySelectorAll('.p_texto')

p_btn.forEach((element, key) => {
    element.addEventListener('click',function(){

        if(p_texto[key].classList[1] == 'p_texto_ver'){
            p_texto[key].classList.remove('p_texto_ver')
            this.childNodes[1].classList.remove('img_rotate')
            return
        }

        p_texto.forEach((element, key) => {
            element.classList.remove('p_texto_ver')
        })
        p_btn.forEach((element) => {
            element.childNodes[1].classList.remove('img_rotate')
        })

        this.childNodes[1].classList.add('img_rotate')
        p_texto[key].classList.add('p_texto_ver')

    }) 
});