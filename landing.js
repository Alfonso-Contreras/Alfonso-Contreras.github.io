const contenedor_barra = document.querySelector('.contenedor_barra');
const menu_responsive = document.querySelector('#menu_responsive');
const landingPage_container_direccion = document.querySelector('.landingPage_container_direccion');
const landingPage_header = document.querySelector('.landingPage_header');
const enlaces_menu_responsive = document.querySelectorAll('.menu_responsive a');

enlaces_menu_responsive.forEach(e=>{
    e.addEventListener('click',()=>{
        menu_responsive.classList.add('menu_responsive_inactivo');
    })
})

window.addEventListener('scroll',()=>{
    const valorScroll = window.scrollY;
    
    if(valorScroll>0){
        landingPage_header.classList.add('header_scrollActivado');
        landingPage_container_direccion.classList.remove('margen_agregado');
        return;
    }

    landingPage_header.classList.remove('header_scrollActivado');
    landingPage_container_direccion.classList.add('margen_agregado');


})

contenedor_barra.addEventListener('click',(e)=>{
    e.preventDefault();
    if(menu_responsive.classList.contains('menu_responsive_inactivo')){
        menu_responsive.classList.remove('menu_responsive_inactivo');
        return;
    }

    menu_responsive.classList.add('menu_responsive_inactivo');
    
})