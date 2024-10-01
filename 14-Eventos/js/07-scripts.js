const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click',(e) =>{
    if(e.target.classList.contains('precio')){
        console.log('Disque CLICK EN PRECIO');
        }
} );