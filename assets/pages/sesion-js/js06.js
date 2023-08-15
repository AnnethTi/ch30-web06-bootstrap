console.log('Sesion JS06 Manipulacion del DOM')


/**
 * Modificar un elemento HTML por medio de su ID
 */
const findElementById = () => {
    const title = document.getElementById('title');
    console.log(title)
    console.log(typeof(title))
    console.log(title.innerHTML)

    title.innerHTML = `<span id='generation' class= 'text-primary'> Generation </span> - Sesion JS06`
}

findElementById()


const changeElementsByTagName = () => {
    const unorderList = document.getElementsByTagName('li') // Coleccion de elementos
    console.log( unorderList ); // HTML Collection

    for (const listItem of unorderList) {
        listItem.innerHTML = `<span class='text-success fs-4' > ${listItem.innerHTML} 🛸 </span >`
    }

}


changeElementsByTagName()


//  Uso de selector universal
// querySelector

const findElementByQuerySelector = () =>{
    //const element = document.querySelector( '.text-warning')
    const element = document.querySelector( 'h1 span')
    console.log(element)
}

findElementByQuerySelector()


// Crear un nuevo elemento html

const newElement = () =>{
    const newElement = document.createElement('div');
    newElement.innerHTML = `La CH30 le gusta: 
    <ul>
        <li> El helado </li>
        <li> El chisme </li>
        <li> Los corridos tumbados </li>
        <li> Escuchar a Mau </li>
        <li> Ser mejores amigos de Anneth </li>
    </ul>
    `;

    const descriptionCh30 = document.querySelector('#descriptionCh30')
    descriptionCh30.appendChild(newElement)

}


newElement()



//      Cambiar el color de texto


const changeColor = ( color ) => {
    const descriptionCh30 = document.getElementById('descriptionCh30')
    descriptionCh30.style.color = color
    descriptionCh30.style.border = `thin solid ${color}`
}


changeColor('beige')


// Propiedad de visualizacion 
// Desaparece el elemento 

// display : none (quitar el elemento del DOM)
// visibility  : hidden ( ocultar el elemento )

const getReferenceTitleGeneration = () => {
    return document.getElementById('generation')
}



const displayNoneElement = () =>{
    const generation = getReferenceTitleGeneration()
    generation.style.display = 'none'
}

const hiddenElement = () =>{
    const generation = getReferenceTitleGeneration()
    generation.style.visibility = 'hidden'
}

const resetElements = () =>{
    const generation = getReferenceTitleGeneration()
    generation.style.visibility = 'visible'
    generation.style.display = 'inline'
}


