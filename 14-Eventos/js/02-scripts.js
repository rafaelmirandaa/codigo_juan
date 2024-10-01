// console.log(1);
// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log(2);
// });

// console.log(3);

const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseout', ()=>{
    console.log('Saliendo de la navegacion');
    
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseenter', ()=>{
    console.log('Entrando de la navegacion');
    
    nav.style.backgroundColor = 'white';
})



// nav.addEventListener('click', ()=>{
//     console.log('clic en nav');
// })