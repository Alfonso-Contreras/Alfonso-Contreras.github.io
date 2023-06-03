const header = document.querySelector('.header');

const barra_menu = document.querySelector('.barra_menu');
const seccion_principal = document.querySelector('.seccion_principal');

const navbar = document.querySelector('.navbar');

barra_menu.addEventListener('click',(e)=>{
    e.preventDefault();
    if(navbar.classList.contains('menu_oculto')){
        //esta activo el menu, desactivarlo
        navbar.classList.remove('menu_oculto');
        // navbar.classList.add('menu_activo');
        //cambiar a X el icono
        barra_menu.innerHTML = '<i class="fa-solid fa-bars icono_menu"></i>'
        return;
    }
    navbar.classList.add('menu_oculto');
    // navbar.classList.remove('menu_activo');
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