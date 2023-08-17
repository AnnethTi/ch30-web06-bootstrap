console.log(`Sesión js08 - Class`);


const getProducts = async() => {
    const url = 'https://fakestoreapi.com/products'
    
    const responseJSON = await fetch(url)
    const response = await responseJSON.json()

    console.log(response)
}

/**
 * Clase Productos
 * El nombre de las clases se realizan con UpperCamelCase
 * 
 */
class Products{
    //Definimos atributos

    //El metodo constructor nos ayuda a instanciar un objeto
    constructor( id, name){
        this.name = name //creando el atributo name y le asignamos el valor de parametro name
        this.id = id
        this.createdAt =  new Date().getTime()
        console.log(`Producto ${this.name} se creo el ${new Date().toLocaleString()}`)
    }

    lifeSpan(){
        return new Date().getTime() - this.createdAt;
    }

}

function createProductsOfClassProducts(){
    // Instanciar la clase Products para crear un objeto
    const zote = new Products(1, 'Zote')
    const products = [];
    products.push(zote)
    products.push(new Products(2, 'Palmolive'))
    products.push(new Products(3, 'Coca Cola 2l'))
    products.push(new Products(4, 'Cajeta Corona'))
    products.push(new Products(5, 'Chips'))
    products.push(new Products(6, 'Herdez, chicharos'))
    products.push(new Products(7, 'Salsa valentina'))
    products.push(new Products(8, 'Sopa Nissin'))
    
    return products
}


/**
 * Crea list items de un arreglo de productos
 * @param {*} products 
 * @returns 
 */
function createListItemsOfProducts( products ){
    // El metodo map sobre un arrgelo, itera sobre cada elemento
    // del arreglo y entrega un nuevo arreglo
    const productsLifeSpan =  products.map( product => 
        `<li> ${product.name} se creo hace ${product.lifeSpan() / 1000} s</li>`)
    return productsLifeSpan
}

function insertListItems( listItems ){
    const products = document.getElementById('products')
    
    const unorderList = `<ul> ${listItems.join('')} </ul>`
    products.innerHTML = unorderList
}

const onClickLifeSpan = () => {
    const products = createProductsOfClassProducts()
    setTimeout( () => {
        const productListItem = createListItemsOfProducts(products) //Crea <li>
        insertListItems(productListItem)
    }, 5000)
}



// -----------------------------------------------------------------
function showProducts(){
    const products = createProductsOfClassProducts();
    const productsCards = createCardsOfProducts(products)
    insertCards(productsCards)
}

function createCardsOfProducts( products ){
    return products.map( (product) =>
        `
        <div class="card col-4 m-3" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title"> ${product.name} </h5>
         <h6 class="card-subtitle mb-2 text-body-secondary"> ${product.id} </h6>
         <p class="card-text">Some title content pon un uwu xd :V </p>
         <a href="#" class="card-link">Card link</a>
        </div>
        </div>
        `
    )
}

function insertCards(productsCards) {
    const products = document.getElementById('products')
    
    const cards = `<div class="row"> ${productsCards.join('')} </div>`
    products.innerHTML = cards
}