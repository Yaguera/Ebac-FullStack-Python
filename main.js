$(document).ready(function(){
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                mobileNL: true
            }
        },
        messages: {
            nome: 'Insira seu nome completo.',
            email: 'Digite um e-mail válido',
            telefone: 'Digite um telefone válido'
        },
        submitHandler: function(form){
            submit(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }    
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
})