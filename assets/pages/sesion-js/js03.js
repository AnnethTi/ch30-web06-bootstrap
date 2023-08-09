console.log('Sesion JS03 Control de flujo')
console.log('No olvidaremos el reto a Ed')

/* 
Declaracion de bloque de codigo
sitasix:
{

}

Las variables declaradas con let y const
solo tendran alcance(scope) dentro del bloque
o bloques anidados

Si la variable en el bloque,tiene el mismo nombre
que una variable fuera del bloque, se le da prioridad
a la variable dentro del bloque
*/

let firstname = 'Sergio'
const lastname = 'Torres'
var age = '39' //no tiene alcance de bloque

{
    let firstname = 'Mau'
    const lastname = 'Peniche'
    var age = '26' //no tiene alcance de bloque
    const colorFavorito = 'azul';
    var comidaFavorita = 'pozole';

    console.log(`${firstname} ${lastname}`)
    console.log(`${age}`)
    console.log(`${colorFavorito}`)
    console.log(`${comidaFavorita}`)
    {
        const colorFavorito = "morado";
        console.log(colorFavorito);
        console.log(firstname);
        {
            console.log(colorFavorito);
            console.log(firstname);
        }
    }
}

console.log(`${firstname} ${lastname}`)
console.log(`${age}`)
//console.log(`${colorFavorito}`)
console.log(`${comidaFavorita}`)

// Condicional if-else
/* 
Ejecuta una sentencia si una condicion especifica es
evaluada como verdadera

Sintaxis:
 if( condicion ) sentencia;

 if ( sentencia ){
    sentencias;
 }

 if ( condicion ) sentencia
 else sentencia_si_condicion_es_falsa;

 if ( condicion ){
    sentencias;
 }
 else {
    sentencias;
 }

 if ( condicion ) sentencia
    else if ( condicion2 ) sentencia2
        else if ( condicion3 ) sentencia3
            else sentencia_si_condicion_es_falsa;
 

*/


/* const temperatura = 29;
let mensaje = 'Temperatura de ';

if( temperatura === 22){
    mensaje += `${temperatura} grados centigrados es ideal`
}
else if (temperatura >= 15 && temperatura <= 21){
    mensaje += `${temperatura} grados centigrados es fria`
    
}
else if (temperatura >= 23 && temperatura <= 30){
    mensaje += `${temperatura} grados centigrados es caluroso`
    
}

// rango de 23 a 30 -> es calurosa 
else {
    mensaje = `La temperatura de ${temperatura} grados centigrados no es ideal =(`
}

console.log(mensaje)
 */
//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
/**
 * Establece la velocidad de un ventilador
 * 
 * @param {number} velocidad del ventilador
   @return {number} mensaje de la velocidad establecida
*/

const setVelocidadVentilador = (velocidad = 0) =>{
    let mensaje;

    // la condicional switch utiliza la comparacion estricta( === )
    switch( parseInt(velocidad) ){
        case 0:
            mensaje = 'apagado'
            break;
        case 1:
            mensaje = 'velocidad baja'
            break;
        case 2:
            mensaje = 'velocidad media'
            break;
        default:
            mensaje = 'el nivel no existe'
            break;
    }
    return mensaje;
}


console.log( `La velocidad del ventilador esta en ${setVelocidadVentilador(1)}` )
console.log( `La velocidad del ventilador esta en ${setVelocidadVentilador(8)}` )
console.log( `La velocidad del ventilador esta en ${setVelocidadVentilador('2')}` )
console.log( `La velocidad del ventilador esta en ${setVelocidadVentilador('2')}` )


// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


const evaluarEstacion =  (numMes = 1) =>{
    let estacion = 'La estacion es ';
    switch ( parseInt(numMes) ){
        case 12:
        case 1:
        case 2:
            estacion += 'Invierno'
        break;
        case 3:
        case 4:
        case 5:
            estacion += 'Primavera'
        break;
        case 6:
        case 7:
        case 8:
            estacion += 'Verano'
        break;
        case 9:
        case 10:
        case 11:
            estacion += 'Otoño'
        break;
        default:
            estacion = 'Invalida'
    }
    alert(estacion)
}

//evaluarEstacion( prompt('Introduce un mes del año del 1 al 12', 1) )


const evaluarEstacionIf = ( numMes = 1) =>{
    let estacion = 'La estacion es ';
    numMes =  parseInt(numMes);
    if ( (numMes === 1 || numMes === 2 || numMes === 12) ) estacion += 'Invierno'
    else if( numMes >=3 && numMes <= 5) estacion += 'Primavera'
    else if( numMes >=6 && numMes <= 8) estacion += 'Verano'
    else if( numMes >=9 && numMes <= 11) estacion += 'Otoño'
    else {estacion += 'Invalida'}

    alert(estacion)
}

//evaluarEstacionIf( prompt('Introduce un mes del año del 1 al 12', '6') )



// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/




const evaluarEdad = ( edad = 1 ) => {
    const mensaje = parseInt(edad) >= 18 ? 'El usuario es mayor de edad' : 'El usuario es menor de edad'
    return console.log(mensaje)
}

//evaluarEdad(prompt('Introduce tu edad', 20))

//......... Cálculo del factorial de un número usando recursividad ...............

function factorialConRecursividad( numero ){
    return resultado = numero < 1 ?  1 : numero * factorialConRecursividad( numero -1 )

}


console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);

