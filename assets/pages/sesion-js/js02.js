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
console.log(multiplica(4, 3));

function multiplica(a, b) {
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

const sum = function sumatoria(a, b) {
    return a + b;
}
console.log(`El resultado de 4 + 2 : ${sum(4, 2)}`);

let saludo; // undefined
const localidad = "tlaxcala";

if (localidad == "buenos aires") {
    saludo = function (name) { return `Holis ${name}` };
}
else {
    saludo = function (name) { return `Buenos días ${name} ` };
}

console.log(saludo("Sergio"));
console.log(saludo("David"));

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

(function (name) {
    console.log(`Me llamo ${name} y me autoinvoco`)
})('ChatGPT')


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


console.log(`El área es: ${areaRectangulo(3, 9)} m2`);

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
const areaTriangulo = (base = 12, altura = 5) => (base * altura) / 2;

console.log(`El área es: ${areaTriangulo()} m2`);


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

const sumatoriaMultiplesNumeros = (a = 0, b = 0, ...rest) => {
    let suma = a + b;
    for (let i = 0; i < rest.length; i++) suma += rest[i]
    return suma;
}

console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2, 5)}`);
console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2, 5, 10, 9)}`);
console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2, 5, 10, 9, 20, 8)}`);
console.log(`Sumatoria de multiples numeros: ${sumatoriaMultiplesNumeros(2)}`);


/* Funciones de Callback 
Es una funcion que se pasa a otra funcion como argumento
Se para en el argumento como referencia (sin parentesis)


Funciones que se invocan en otro tiempo
*/


function saludoALosPokemones() {
    return 'yo te elijo';
}

function eligiendoPokebola(saludo, nombre) {
    console.log('Hola, estas en la liga pokemon');
    console.log('Elige a tu mejor pokemon');
    console.log(saludo(nombre));
}

eligiendoPokebola(saludoALosPokemones);

eligiendoPokebola(nombre => `quiii, soy ${nombre}`, 'Charizard')

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

 student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"
*/
const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];

function cursosEnComun(student1Courses, student2Courses) {
    const commonCourses = []; // guardar los cursos en comun
    for (let i = 0; i < student1Courses.length; i++) { // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
        for (let j = 0; j < student2Courses.length; j++) { // ["Geography", "Spanish", "Programming", "Music"]
            console.log(`student1Courses[i] === student2Courses[j] : ${student1Courses[i] === student2Courses[j]}`)
            if (student1Courses[i] === student2Courses[j]) {
                commonCourses.push(student1Courses[i]);
            }
        }
    }
    return `Cursos en común ${commonCourses}`
}

console.log(cursosEnComun(student1Courses, student2Courses))


//--------------- Resolviendo con filter e include ----------------------

function getCommonCoursesWithFilter(array1Courses, array2Courses) {
    return array1Courses.filter(course => array2Courses.includes(course));
}
console.log(`Común: ${getCommonCoursesWithFilter(student1Courses, student2Courses)}`)

//--------------- Resolviendo con filter e include por partes ----------------------
console.log("###################################");
function includeCourse(course, index, array) {
    console.log(`Elemento ${course}, indice ${index}, include ${student2Courses.includes(course)}`);
    return student2Courses.includes(course); // evaluación // ["Geography", "Spanish", "Programming", "Music"]
}

function getCoursesWithFilter(array1Courses) {
    const commonCourses = array1Courses.filter(includeCourse); // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
    return commonCourses;
}
console.log(`Comúnxpartes: ${getCoursesWithFilter(student1Courses, student2Courses)}`);
// -------------- Contar la cantidad de caracteres de una frase ---------------------
/*
   "peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";

   Mostrar la cantidad de letras 'p'.
   Usar funciones flecha.
*/

//.split('a').length - 1

const cadena = 'Peso Pluma pica papas con un pico y una pala con un pico pica papas peso pluma'

function contarCaracteres(cadena, caracter) {
    return cadena.toLowerCase().split(caracter.toLowerCase()).length - 1
}

//const contarCaracteres2 = (cadena, caracter) => cadena.split(caracter).length -1 
const contarCaracteres2 = (cadena, caracter) => cadena.toLowerCase().split(caracter.toLowerCase()).length - 1

console.log(contarCaracteres(cadena, 'p'))
console.log(contarCaracteres2(cadena, 'P'))


// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncion( nuevoParametro );
        }
    }
*/

function factorialConCiclorFor(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) resultado *= i;
    return resultado;
}

console.log(`El factorial de 5 es: ${factorialConCiclorFor(5)}`);

//......... Cálculo del factorial de un número usando recursividad ...............

function factorialConRecursividad(numero) {
    if (numero === 1) {
        return 1;
    } else {
        console.log(`${numero} * ${numero - 1}`);
        return numero * factorialConRecursividad(numero - 1);
    }
}

console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`);


function saludoRecursivo(numeroSaludo) {
    if (numeroSaludo > 1) {
        saludoRecursivo(numeroSaludo - 1)
    }
    console.log(`Saludo ${numeroSaludo}`);
}

console.log("****** Saludo Ascendente ******");
saludoRecursivo(10);