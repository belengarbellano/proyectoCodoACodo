document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        alert('Completa el campo Nombre');
        return;
    }

    var correo = document.getElementById('correo').value;
    if (correo.length == 0) {
        alert('Ingrese su correo');
        return;
    }

    var comentario = document.getElementById('comentario').value;
    if (comentario.length == 0) {
        alert('Ingrese un comentario');
        return;
    }



    this.submit();


}