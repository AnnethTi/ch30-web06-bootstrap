console.log('Sesion JS 07 Promise')

/* 
Las promesas es un patron asíncronico que se utiliza
para manejar operaciones asíncronas

Las promesas permite realizar tareas asincronas y 
manejar los resultados (exito o error) en un momento posterior


Las promesas tiene 3 estados:

1.- Pending: estado inicial de una promesa antes de que se resuelva o rechace
2.- Resolve: La promesa se resuleve con un valor
3.- Rejected: La promesa se rechaza con una razon 

Resolve y reject son funciones de callback 
Para crear una promesa se usa el contructor de la clase Promise

sintaxis:
    const pinkyPromise = new Promise( fncCallback);

*/

//const pinkyPromise = new Promise( () => {} );
//const pinkyPromise = new Promise( ( fncCallBackResolve, fncCallBackReject ) => {} );
/* const pinkyPromise = new Promise( ( fncCallBackResolve, fncCallBackReject ) => {
    const menorEdad = false

    if (menorEdad)
        fncCallBackResolve('Hay que estar siempre juntos')
    else
        fncCallBackReject( { code: 404, message: 'Ni te topo' })
} ); */


// Consumir las promesas
// Se usa los metodos then, catch y finally 

console.log('---- Promesas -----')
console.log('Antes de consumir la promesa')

/* pinkyPromise
    .then() // Se ejecuta una función de callback si la promesa fue resuelta
    .catch() // se ejecuta una función de callback si la promesa fue rechazada
    .finally(); // se ejecuta una función de callback 
                //después de que la promesa fue resuelta o rechazada
 */
  /*   pinkyPromise
    .then( ( response )=>{ console.log(`Promesa resuelta: ${response}`) } ) 
    .catch( ( error )=>{ console.log(`Promesa rechazada: ${ error.message }`)})
    .finally( ()=>{ console.log(`Se ha terminado de resolver la promesa`)} );
 */

console.log('Despues de consumir la promesa')

/**
 * Saludo especial para las personas que comience con A, retardo de 5 segundos.
 * Saludo especial para las personas que comiencen con L
 * El saludo se genera después de 5 segundos.
 * @param {string} name 
 */
const gretting = ( name ) => {
    // const myPromise = new Promise( ()=>{}  );
    const myPromise = new Promise( (resolve, reject) => {
      const firstChar = name.charAt(0).toLowerCase();
      if( firstChar === 'a'  )
          //resolve({code: 200 , message: `Soy ${name} ¡hola a todos!` });
          setTimeout( ()=> resolve({code: 200 , message: `Soy ${name} ¡hola a todos!` }),5000 );
      else if ( firstChar === 'l'  )
          resolve({code: 201 , message: `Soy ${name} 
                     Saludos a toda la banda de la ch30 
                     taka taka taka taka taka 
                     viene viene viene viene 
                     takta taka taka taka
          ` });
      else 
          reject({code:404, message: `No estoy disponible para ${name}`});        

    }  ); // fin de Promise

    return myPromise;
}

/* gretting("Ana")
  .then( response => console.log(response.code, response.message) )
  .catch( error => console.log( error.code, error.message) );
gretting("Eduardo")
  .then( response => console.log(response.code, response.message) )
  .catch( error => console.log( error.code, error.message) );
gretting("Luisa")
  .then( response => console.log(response.code, response.message) )
  .catch( error => console.log( error.code, error.message) );
 */

  // consumir las promesas con async y await
  /* 
  Async y Await facilita la escritura y lectura de codigo asincrono
  Permite esribir codigo asincorno de manera similar a cómo se escribiria 
  codigo sincrono

  */

  async function grettingCh30 (name) {
    console.log('---Saludos a la bandita de la Ch30---')
    const result = await gretting(name)
    console.log(result)
    console.log('---Fin del saludo---')
}

/*   grettingCh30('Anneth')
  grettingCh30('Leonardo') */

  const grettingAll = async() =>{
    try {
        await grettingCh30('Anneth')
        await grettingCh30('Leonardo')
        await grettingCh30('Mau')
    } catch (error) {
        console.warn('Se rechazo una promesa')
    }
  }

 grettingAll()