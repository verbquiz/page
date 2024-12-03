// Función para insertar el verbo en la línea correcta
        function insertarVerbo(e) {
            var verboSeleccionado = e.target.innerText;  // Obtener el verbo que fue seleccionado

            // Encontrar el párrafo correspondiente que contiene "______"
            var parrafo = e.target.closest('table').previousElementSibling;
            
            // Reemplazar "______" con el verbo seleccionado
            if (parrafo) {
                parrafo.innerHTML = parrafo.innerHTML.replace('______', verboSeleccionado);
            }
        }

        // Función para agregar el evento de clic a los botones
        function agregarEventos() {
            var botones = document.querySelectorAll('button');  // Obtener todos los botones
            botones.forEach(function(boton) {
                boton.addEventListener('click', insertarVerbo);  // Agregar el evento de clic
            });
        }

        // Ejecutar cuando el DOM esté completamente cargado
        document.addEventListener('DOMContentLoaded', agregarEventos);