const header = document.querySelector('.header');

const barra_menu = document.querySelector('.barra_menu');
const seccion_principal = document.querySelector('.seccion_principal');

barra_menu.addEventListener('click',(e)=>{
    e.preventDefault();
    if(seccion_principal.classList.contains('menu_inactivo')){
        //esta activo el menu, desactivarlo
        seccion_principal.classList.remove('menu_inactivo');
        seccion_principal.classList.add('menu_activo');
        //cambiar a X el icono
        barra_menu.innerHTML = '<i class="fa-solid fa-x icono_menu"></i>'
        return;
    }
    seccion_principal.classList.add('menu_inactivo');
    seccion_principal.classList.remove('menu_activo');
    barra_menu.innerHTML = '<i class="fa-solid fa-bars icono_menu"></i>'

})

window.addEventListener('scroll',function(){
    const scrollY = window.scrollY;
    if(scrollY>0){
        header.classList.add('navegacion_scroll')
        return;
    }
    header.classList.remove('navegacion_scroll');
})