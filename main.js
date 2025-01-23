/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const biciCorsa = [
    { nome: "Mountain Climber", peso: 7.5 },
    { nome: "Carbon", peso: 8.0 },
    { nome: "Lightning", peso: 8.5 }
]

let biciPesoMinore = biciCorsa[0]

for( let i = 0; i < biciCorsa.lenght; i++ ){
    let elemento = biciCorsa[i]

    if( elemento.peso < biciPesoMinore.peso ){
        biciPesoMinore = elemento
    }
}

console.log( biciPesoMinore )