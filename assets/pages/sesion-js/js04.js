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


//      Iterando elementos

for (let equipo = 0; equipo < personasEnCh30.length; equipo++) {
    for (let persona = 0; persona < personasEnCh30[ equipo ].length; persona++) {
        console.log(personasEnCh30[ equipo ][ persona] )
    }
    
}