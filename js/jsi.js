
let verbs = [
    "Be/ am, are, is",
    "Become",
    "Start",
    "Bite",
    "Bring",
    "Break",
    "Build",
    "Buy",
    "Come",
    "Cut",
    "Choose",
    "Dream",
    "Do",
    "Draw",
    "Drink",
    "Drive",
    "Eat",
    "Feel",
    "Feed",
    "Fight",
    "Find",
    "Forget",
    "Forgive",
    "Get",
    "Give",
    "Go",
    "Have",
    "Hide",
    "Hit",
    "Hurt",
    "Keep",
    "Know",
    "Leave",
    "Lend",
    "Let",
    "Lose",
    "Make",
    "Mean",
    "Meet",
    "Pay",
    "Put",
    "Read",
    "Ride",
    "Run",
    "Say",
    "See",
    "Sell",
    "Send",
    "Shoot",
    "Shut",
    "Sing",
    "Sit",
    "Sleep",
    "Slide",
    "Speak",
    "Speed up",
    "Spend",
    "Steal",
    "Sweat",
    "Swim",
    "Take",
    "Teach",
    "Think",
    "Understand",
    "Wake up",
    "Wear",
    "Win",
    "Wet",
    "Write",
    "Accept",
    "Try",
    "Wait",
    "Need",
    "Repeat",
    "Visit",
    "Want",
    "Ask",
    "Cook",
    "Dance",
    "Dress",
    "Erase",
    "Finish",
    "Help",
    "Jump",
    "Like",
    "Look",
    "Miss",
    "Practice",
    "Push",
    "Stop",
    "Talk",
    "Use",
    "Walk",
    "Wash",
    "Work",
    "Answer",
    "Arrive",
    "Belong",
    "Change",
    "Clean",
    "Close",
    "Deliver",
    "Enjoy",
    "Fill",
    "Follow",
    "Learn",
    "Listen",
    "Open",
    "Pull",
    "Play",
    "Remember",
    "Show",
    "Stay",
    "Study",
    "Travel",
    "Try"
];
function mostrarVerbo() {
            var indiceAleatorio = Math.floor(Math.random() * verbs.length);
            var verboAleatorio = verbs[indiceAleatorio];
            document.getElementById("verbos").innerText = verboAleatorio;
        }
        document.addEventListener("DOMContentLoaded", function() {
            mostrarVerbo(); // Llama a la función mostrarVerbo cuando el DOM esté listo
        });
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