console.log("Sesión JS02 Uso de funciones");

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( multiplica(4, 3));

function multiplica(a, b){
    return a * b;
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const sum = function sumatoria(a, b){
    return a + b;
}
console.log(`El resultado de 4 + 2 : ${ sum(4,2) }`);

let saludo; // undefined
const localidad = "tlaxcala";

if ( localidad == "buenos aires"){
    saludo = function ( name ) { return `Holis ${name}`};
}
else {
    saludo = function ( name ) { return `Buenos días ${name} `};
}

console.log( saludo("Sergio"));
console.log( saludo("David"));

// las funciones expresadas pueden ser re definidas

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

// INICIALIZAR ALGO SIN NECESIDAD DE DECLALARLO
// son funciones que se ejecutan automáticamente una vez que se definen, 
// sin necesidad de ser llamadas explícitamente. 

( function( name ){
    console.log(`Me llamo ${name} y me autoinvoco`)
} )('ChatGPT')


/*
 ------------ Funciones flecha -----------------------
             
 Funciones similares a las funciones expresadas pero:
 - No requieren la palabra reservada function
 - Si tiene una sola instruccion no requiere las llaves {}
 - Si la instruccion es el mismo retorno, no requiere la palabra return 

 --> no se carga en memoria hasta que se utilice.


sintaxis:
    const nombreVariable = (parametros) => instruccion;

    const nombreVariable = (parametros =>{
        instruccion;
        return expresion    
    }
*/

/* const areaRectangulo = function (base, altura){
    return base * altura;
} */

const areaRectangulo = (base, altura) => base * altura;


console.log(`El área es: ${ areaRectangulo(3, 9)} m2`);

/*
 ------------ Parametros por defecto -----------------------

 Inicializa un parametro de la funcion, si no se envia el argumento cuando se invoca
 
*/

/**
 * Calcula el area de un triangulo
 * @param {number} base del traingulo
 * @param {number} altura del triangulo
 * @returns {number} base * altura / 2
 */
const areaTriangulo = (base = 12, altura = 5) => (base * altura)/2;

console.log(`El área es: ${ areaTriangulo()} m2`);


console.log((1000).toString())
console.log((1000).toString(2))
console.log((1000).toString(16))


/*
            Parametros rest
Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se presentan como un array
Rest parameters debe estar al final de la lista de parametros

sintaxis:
    ...nombreParametros

*/

const sumatoriaMultiplesNumeros = (a = 0,b = 0, ...rest) => {
    let suma = a + b;
    for(let i = 0; i < rest.length; i++) suma+= rest[i]
    return suma;
}

console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2,5)}`);
console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2,5,10,9)}`);
console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2,5,10,9,20,8)}`);
console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2)}`);


/* Funciones de Callback */
