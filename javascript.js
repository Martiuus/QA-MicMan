setTimeout(function() {
    consoleText(['Hola a todos.', 'Nuestros creadores fueron por unos dulces.', 'Pronto habilitaremos la web :)'], 'text', ['white', 'white', 'white']);
}, 3000);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);
    let currentWordIndex = 0;

    // Función para escribir cada palabra letra por letra
    function type() {
        if (letterCount <= words[currentWordIndex].length) {
            target.innerHTML = words[currentWordIndex].substring(0, letterCount);
            letterCount++;
            setTimeout(type, 100); // Velocidad de escritura ajustable
        } else {
            // Esperar antes de iniciar el fade-out
            setTimeout(() => {
                fadeOut(() => {
                    // Resetear para la siguiente palabra
                    letterCount = 1;
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    target.innerHTML = ''; // Limpiar el texto antes de escribir la siguiente palabra
                    target.setAttribute('style', 'color:' + colors[currentWordIndex]);
                    type();
                });
            }, 1000); // Tiempo visible de la palabra completa
        }
    }

    // Función para aplicar el efecto de opacidad (fade-out)
    function fadeOut(callback) {
        target.style.opacity = 0;
        setTimeout(() => {
            callback();
            target.style.opacity = 1; // Restaurar opacidad para la siguiente palabra
        }, 700); // Duración del fade-out
    }

    // Iniciar el efecto de escritura
    type();


}