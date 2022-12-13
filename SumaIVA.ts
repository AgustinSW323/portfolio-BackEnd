let IVA: number =0.75;
let JUEGO: string="undefined";
let PRECIO: number=0;


function cambiarJuego(game:string, valor:number){
 JUEGO=game
 PRECIO=valor
}

function sumarIVA(){
    console.log(JUEGO + " sale $" +((PRECIO*IVA)+PRECIO));
}




console.log(cambiarJuego("Jurassic Park 1", 100));
console.log(sumarIVA());