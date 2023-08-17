console.log('Sesion 07 Api Fetch')

/* 
La API Fetch nos ayuda a acceder y manipular peticiones http
(DELETE, GET, POST, PUT)

SINTAXIS:
 fetch(resource, options)
*/

const urlFakeStore = 'https://fakestoreapi.com/products';

/*  const getProducts = ( url ) => {
    fetch(url)
        .then( (resolve)=> {
            console.log(resolve)
            return resolve.json()
        } )
        .then( (resolveJson) => {
            console.log(resolveJson) 
            printToDOM(resolveJson)
        } )
        .catch( (error)=> console.warn(error))
}

getProducts( urlFakeStore )
 */
function printToDOM( products ){
    let unorderList = ''
    for( product of products ){
        unorderList += `<li>${product.title}</li>`
    }
    const productsList = document.getElementById('products')
    productsList.innerHTML = unorderList
}



const getProducts = async (url) => {
    try {
        const resolve = await fetch (url)
        const resolveJson = await resolve.json()
        printToDOM ( resolveJson );
    } catch (error) {
        console.warn(error)
    }
}


getProducts(urlFakeStore)