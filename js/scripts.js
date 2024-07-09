/////////////////////////////////////////
//////////////// MENU //////////////////
/////////////////////////////////////////

// Función para mostrar el menúOpciones cuando el mouse está encima
function showMenu() {
    document.getElementById('menuOpciones').classList.add('show');
    document.getElementById('circleButton').style.display = 'none';
}

// Función para ocultar el menúOpciones después de 20 segundos si el mouse no está encima
function hideMenu() {
    setTimeout(function() {
        if (!document.querySelector('#menuOpciones:hover')) {
            document.getElementById('menuOpciones').classList.remove('show');
            document.getElementById('circleButton').style.display = 'block';
        }
    }, 5000); // 20 segundos (20000 milisegundos)
}

// Evento para mostrar el menúOpciones al hacer hover sobre el botón
document.getElementById('btnCircle').addEventListener('mouseenter', function(event) {
    event.preventDefault();
    showMenu();
});

// Evento para iniciar el conteo de tiempo para ocultar el menúOpciones
document.getElementById('btnCircle').addEventListener('mouseleave', function(event) {
    event.preventDefault();
    hideMenu();
});

// Evento para cerrar el menúOpciones al hacer clic en un enlace dentro del menú
const navLinks = document.querySelectorAll('.menu_opciones ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('menuOpciones').classList.remove('show');
        document.getElementById('circleButton').style.display = 'block';
    });
});

///////////////////////////////////////////////////////////


///////////////////////////////////////////////
//////////// MOUSE SECCION INICIO ////////////
//////////////////////////////////////////////

// JavaScript para seguir el cursor personalizado
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});