import { getOneProduct } from "../service/products.js"

const id = new URLSearchParams(window.location.search).get('id')

//Inicializar elementos
const product_image = document.getElementById("product-image")
const product_title = document.getElementById("product-title")
const product_price = document.getElementById("product-price")
const product_description = document.getElementById("product-description")

//
const fillDetailProduct = async () => {
    const product = await getOneProduct(id)
    console.log(product)
}

fillDetailProduct()
