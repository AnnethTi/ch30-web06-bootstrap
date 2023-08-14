console.log('Sesion JS05 Condiciones y expresiones')


const operaciones = 5 * 2 + 3 ** 2 - 4;


console.log( 4 % 3 + 2 * 3 / 2 - 1 )



// Operadores de asignacion
/* 
Asigna un valor a su operador izquierdo basandose en el valor
de su operador derecho

asignacion =

Operadores abreviados ( compuestos ):
op1 += op2


*/



let asignacion = 3;
console.log( asignacion+= 3 * 3 ** 3 + 10 )
console.log( 2 ** 3 ** 2 )

//Operadores unarios
// solo actuan sobre un operando
// negacion

let numero = 3
let dinero = - numero;


console.log(dinero)


// Conversion numerica
let pago = + dinero

let intereses = 3;
console.log( intereses += 5 + + '3' )


//Operador logico not
let isActive = !true;


//Operador de incremento y decremento en unidad

/* 
 Operador de pre-incremento y pre-decremento
 ++ valor
 -- valor

 Operador de post-incremento
 valor ++
 valor --

 */


 let number = 10;
 ++ number;
 console.log(number)
 number ++
 console.log(number)



 number = 20;
 console.log( ++ number )
 console.log(  number ++ ) //primero se entrega el valor y al final se aumenta

 console.log(number)


 let a = 0, b = 0;

 for( ; a < 3 ; b = a++){
    console.log(a , b)
}
console.log(a , b)


let x = 3
let y = ++x
console.log( x++, ++y)
console.log( x , y)

// PRIMERO LOS &&
//si OP1 && OP2, si OP1 es verdadero, se retorna el OP2
// si OP1 || OP2, si OP1 es verdero retorna el OP1


// En la conversión de boolean los siguientes valores son false:
// "", 0, null, undefined, NaN


const va = true, vb = false, vc = true;

console.log(va || vb && vc)
console.log( vb && 'Holi')
console.log( NaN && 'Holi')
console.log( 'false' && 'Holi')

const person = {
    name : 'Leo',
    lastname : 'Ronaldo',
    age : 25,

}

console.log('Nombre: ' + person['name'])
console.log('Nombre: ' + person.name)


//const ocupation = person.occupation === undefined ? 'Desarrollador' : person.occupation
//const ocupation = person.occupation || 'Desarrollador'

// se toma la segunda opcion a la derecha si la primera es null o undefined
const ocupation = person.occupation ?? 'Desarrollador'

console.log('Occupation: ' + ocupation)


//  Comparacion estricta
/* 
=== Estrictamente igual, se debe comparar el valor y el tipo de dato
!== Estrictamente diferente, debe ser diferente y tipo

*/

console.log('1' == true)
console.log('45' !== 45)


//Desestructurar
let dataA = 10;
let dataB = 20;

[dataA, dataB] = [dataB, dataA];

console.log(dataA, dataB); // Salida: 20 10


const car = {
    model: 'Vento',
    year : 2023,
    brand: 'VW',
    color: 'red',
    price: 320_000,
    additionalInfo : {
        bluetooth: true,
        cruiseControl: true,
        gps: false,
    }
}

// console.log(`Modelo : ${ car.model }`); // Vento
// console.log(`Año : ${ car.year}`); // 2023

//const carModel = car.model;
//const carYear = car.year;

const { model, year, additionalInfo : {bluetooth} } = car; 

console.log(`Modelo : ${ model }, Año : ${ year}`); // Vento , 2023
console.log(`Tiene bluetooth: ${bluetooth ? 'sí' : 'no'} `)



const resultadoDivision = (num1 = 10, num2 = 2) => {
    const resultados = {
        cociente : parseInt(num1 / num2) , 
        residuo : num1 % num2
    }
    return resultados
}

//console.log( resultadoDivision(10,3));
//const {cociente, residuo} = resultadoDivision(10,3);
//console.log(`Los resultados de 10 / 3 son: cociente: ${cociente}, residuo: ${residuo}`)

console.log(`Los resultados de 10 / 3 son: cociente: ${resultadoDivision(10,3).cociente}, residuo: ${resultadoDivision(10,3).residuo}`)



