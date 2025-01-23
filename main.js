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

/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const squadre = [
    { nome: "Milan", punti: 0, falliSubiti: 0},
    { nome: "Juve", punti: 0, falliSubiti: 0},
    { nome: "Inter", punti: 0, falliSubiti: 0},
    { nome: "Napoli", punti: 0, falliSubiti: 0}
]

function numRandom(min,max){
    return Math.floor(Math.random() * max) + min;
}

let newArray = []

for (const index in squadre){
    
    let elemento = squadre[index]

    elemento.punti = numRandom(1, 50)
    elemento.falliSubiti = numRandom(1, 50)

    newArray.push(
        {
            nome: elemento["nome"]
        }
    )
}

    console.log ( squadre, newArray )