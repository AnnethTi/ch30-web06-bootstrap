console.log('Sesion JS04 matrices y bucles')

// Declaramos un arreglo de 2 dimensiones (matriz)
// Arrays anidados
// [ [], [], [] ]

const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  /* ByteMe */
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,  /* PerryCode */
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]    /* BugBusters */
];

console.log(personasEnCh30[0].join(' - '))

personasEnCh30[1].splice(3,1, 'Brayan' )
console.table(personasEnCh30)


// ------------- Iterando todos los elementos
/*
const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  indice 0, ByteMe(404) 
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,   indice 1, PerryCode 
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]     indice 2, BugBusters 
];
*/ 

console.log( personasEnCh30[0][2]  ); // Anneth

// Este for itera sobre los equipos integradores
for (let equipo = 0; equipo <  personasEnCh30.length  ; equipo++) {  
    console.log(`Equipo ${equipo} : ${personasEnCh30[equipo]}` )  ;
    
    // Este for itera sobre las personas
    for( let persona = 0; persona < personasEnCh30[equipo].length ; persona++ ){
     console.log(`Participante: ${ personasEnCh30[equipo][ persona ] }`);
    } 
}

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/
console.table( personasEnCh30 ); 

const myPet = "Kraken";
for (const character of myPet  ){
    console.log( character );
}

for (const equipo of personasEnCh30 ) {
    console.log( equipo ); // Arreglo de equipos
    for (const persona of equipo) {
        console.log( persona ); //  Persona de cada equipo
    }
}

