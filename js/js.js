
let verbos = [
    "Ser/Estar",
    "Llegar a Ser",
    "Empezar",
    "Morder",
    "Traer",
    "Romper",
    "Construir",
    "Comprar",
    "Venir",
    "Cortar",
    "Elegir",
    "Soñar",
    "Hacer",
    "Dibujar",
    "Beber",
    "Manejar",
    "Comer",
    "Sentir",
    "Alimentar",
    "Pelear",
    "Encontrar",
    "Olvidar",
    "Perdonar",
    "Obtener",
    "Dar",
    "Ir",
    "Tener",
    "Esconder",
    "Golpear",
    "Herir",
    "Mantener",
    "Saber",
    "Salir",
    "Prestar",
    "Permitir",
    "Perder",
    "Hacer",
    "Significar",
    "Conocer",
    "Pagar",
    "Poner",
    "Leer",
    "Montar",
    "Correr",
    "Decir",
    "Ver",
    "Vender",
    "Enviar",
    "Poner",
    "Disparar",
    "Cerrar",
    "Cantar",
    "Sentarse",
    "Dormir",
    "Deslizar",
    "Hablar",
    "Acelerar",
    "Gastar",
    "Robar",
    "Sudar",
    "Nadar",
    "Tomar",
    "Enseñar",
    "Decir",
    "Pensar",
    "Entender",
    "Despertar",
    "Llevar puesto",
    "Ganar",
    "Mojar",
    "Escribir",
    "Aceptar",
    "Intentar",
    "Esperar",
    "Necesitar",
    "Repetir",
    "Empezar",
    "Visitar",
    "Esperar",
    "Querer",
    "Preguntar",
    "Cocinar",
    "Bailar",
    "Vestir",
    "Borrar",
    "Terminar",
    "Ayudar",
    "Saltar",
    "Gustar",
    "Mirar",
    "Extrañar",
    "Practicar",
    "Empujar",
    "Detener",
    "Hablar",
    "Usar",
    "Caminar",
    "Lavar",
    "Trabajar",
    "Responder",
    "Llegar",
    "Pertenecer",
    "Cambiar",
    "Limpiar",
    "Cerrar",
    "Entregar",
    "Disfrutar",
    "Llenar",
    "Seguir",
    "Aprender",
    "Escuchar",
    "Abrir",
    "Jalar",
    "Jugar",
    "Recordar",
    "Mostrar",
    "Permanecer",
    "Estudiar",
    "Viajar",
    "Intentar"
        ];

        

        function mostrarVerbo() {
    var indiceAleatorio = Math.floor(Math.random() * verbos.length);
    var verboAleatorio = verbos[indiceAleatorio];
    document.getElementById("verbo").innerText = verboAleatorio;
}

// Función para cambiar el verbo al hacer clic en cualquier botón
function cambiarVerboConClick() {
    mostrarVerbo(); // Muestra un verbo aleatorio
}

// Agregar el evento para todos los botones una vez que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar un verbo aleatorio cuando el DOM esté listo
    mostrarVerbo();
    
    // Obtener todos los botones y añadirles el evento 'click'
    var botones = document.querySelectorAll("button");
    botones.forEach(function(boton) {
        boton.addEventListener("click", cambiarVerboConClick);
    });
});
                
