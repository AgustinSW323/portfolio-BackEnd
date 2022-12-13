function cuantoSale(juego, precio) {
    var IVA = 0.75;
    return juego + " sale $" + ((precio * IVA) + precio);
}
console.log(cuantoSale("Jurassic World Evolution 1", 1000));
