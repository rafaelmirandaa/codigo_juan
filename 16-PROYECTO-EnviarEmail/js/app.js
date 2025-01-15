document.addEventListener('DOMContentLoaded', function (){
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');



    //asignar eventos
    inputEmail.addEventListener('blur', validar);//no se pone el () xq llamas a la funcion

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    function validar(e){
        if(e.target.value.trim() ===''){ //trim elimina los espacios vacios
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        validarEmail(e.target.value);

        limpiarAlerta(e.target.parentElement);

    }
   
    function mostrarAlerta(mensaje , referencia){
        //Comprueba si ya existe una alerta
        limpiarAlerta(referencia);



        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white' , 'text-center', 'p-2');

        referencia.appendChild(error);
    }


    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);

        console.log(resultado);

    }



});