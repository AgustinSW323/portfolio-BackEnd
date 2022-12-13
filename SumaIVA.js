var IVA = 0.75;
var JUEGO = "undefined";
var PRECIO = 0;
function cambiarJuego(game, valor) {
    JUEGO = game;
    PRECIO = valor;
}
function sumarIVA() {
    console.log(JUEGO + " sale $" + ((PRECIO * IVA) + PRECIO));
}
console.log(cambiarJuego("Jurassic Park 1", 100));
console.log(sumarIVA());
