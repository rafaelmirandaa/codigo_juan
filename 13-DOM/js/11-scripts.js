const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


btnFlotante.addEventListener('click', strarOcultarFooter);

function strarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    }else{
       footer.classList.add('activo');
       this.classList.add('activo');
       this.textContent = 'X Cerrar';
    }
}