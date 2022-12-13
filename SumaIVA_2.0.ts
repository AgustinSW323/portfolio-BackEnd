function cuantoSale(juego:string, precio:number){
    let IVA: number =0.75;

    return juego + " sale $" +((precio*IVA)+precio);
}

console.log(cuantoSale("Jurassic World Evolution 1", 1000));