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

// ---------------- forEach -------------------------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Permite ejecutar una función por cada elemento del arreglo.
*/
console.table( personasEnCh30 ); 

function iterarEquipos( equipo, indice, arreglo ){
    console.log(`Indice ${indice}: ${equipo} `)
    equipo.forEach(  iterarPersonas  );
    return equipo; // arreglo de cada equipo integrador
}

function iterarPersonas( persona, indice ){
    console.log(`Indice P ${indice}: ${persona} `)
    return persona;
}


// personasEnCh30.forEach( iterarEquipos );

personasEnCh30.forEach( (equipo, indexEquipo) => 
                    equipo.forEach( (persona, indexPer)=> 
                    console.log(` [${indexEquipo}][${indexPer}] : ${persona}` )));

// Solo se imprimi el elemento (persona)                    
//personasEnCh30.forEach( equipo => equipo.forEach( persona=> console.log(`${persona}`)));

myPet.split('').forEach( (character) => console.log( character ) )

//Uso del break

for (let i = 1; i < 6; i++){
    for (let j = 1; j < 11; j++) {
     console.log(`${i} *  ${j} = ${ i * j }`)   
    }
}


console.log('======= Uso del break ========')
// Realizar la multiplicacion hasta el 4
for (let i = 1; i < 6; i++){
    for (let j = 1; j < 11; j++) {
     if(j === 5) break
     console.log(`${i} *  ${j} = ${ i * j }`)   
    }
}


console.log('===== Uso del break con tag ======')
// Realizar la multiplicacion hasta el 2 * 4
rompeCiclosSuperior:
for (let i = 1; i < 6; i++){
    for (let j = 1; j < 11; j++) {
        if(i=== 2 && j === 5) break rompeCiclosSuperior
        console.log(`${i} *  ${j} = ${ i * j }`)   
    }
}

// - - - - - Uso de continue - - - - - - 
/* 
Termina la ejecucionen la iteracion actual y continua con laproc¿xima iteracion.
(o en el tag que se indique).
*/

// Realizar la multiplicacion hasta el 3
rompeCiclosSuperior:
for (let i = 1; i < 6; i++){
    for (let j = 1; j < 11; j++) {
        if(j === 4) continue rompeCiclosSuperior
        console.log(`${i} *  ${j} = ${ i * j }`)   
    }
}



// ================= Ciclo While =======
/* 
 Crea un bucle que ejecuta una sentencia mientras la condicion especificada
 se cumpla


 Sintaxis:
 while ( condicion ) sentencia;

 while ( condicion ){
    sentencias;
 }
*/

/* let counter = 1;
while ( confirm('¿Quieres continuar?') ){
    console.log(`Veces que has continuado:  ${counter} `)
    counter++
} */


// ================= Ciclo Do While =======
/* 
 Crea un bucle que ejecuta una sentencia mientras la condicion especificada
 se cumpla. La evaluacion se realiza despues de ejecutar la sentencia.
 Por lo tanto, la sentencia se va a ejecutar por lo menos una vez

 Sintaxis:
 do{
    sentencias;
 } while( condicion )
*/

let valor = -2;

while (valor < 5){
    console.log(`Valor en while ${valor}`);
    valor++
}


valor = 4;
do {
    console.log(`Valor en do-while ${valor}`);
    valor++
} while (valor < 5);