var form = document.querySelector('form'); 
    var contraseña = document.getElementById('contraseña');
    var mostrar = document.getElementById('mostrar');
    var ocultar = document.getElementById('ocultar');

mostrar.addEventListener('click', function () {
    if (mostrar.type === 'contraseña	') {
        contraseña.type = 'text';
        ocultar.text = 'ocultar';
    }else{
        contraseña.type = 'contraseña';
        mostrar.textContent = 'ocultar';

    }
});