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
        }else{
            console.log('Si hay algo');
        };
    }
   
    function mostrarAlerta(mensaje , referencia){
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white' , 'text-center', 'p-2');

        referencia.appendChild(error);
    }

});