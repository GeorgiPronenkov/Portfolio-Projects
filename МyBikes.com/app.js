//declare variables
//menu
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

//cart
const cartBtn = document.querySelector("cart-btn");
const closeCartBtn = document.querySelector("close-cart");
const clearCartBtn = document.querySelector("clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total"); 
const cartContent = document.querySelector(".cart-content"); 
const productsDOM = document.querySelector(".products-center"); 

//main info cart
let cart = []; 

//getting the product, first from products.json and then from content
class Products {
    async getProducts() {
        try {
            let result = await fetch('products.json');
            let data = await result.json(); //data in json format
            let products = data.items;
            products = products.map(item => {
               //getting title,price,id,image
               const {title,price} = item.fields;
               const {id} = item.sys;
               const image = item.fields.image.fields.file.url;
               //returning clean object
               return {title,price,id,image}
            })
            return products;
       } catch (error) {
           
       }
   } 
}

//display products
class UI {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
                <!-- single product -->
                    <article class="product">
                        <div class="img-container">
                            <img src="${product.image}" alt="product" class="product-img">
                            <button class="bag-btn" data-id=${product.id}>
                                <i class="fas fa-shopping-cart"></i>add to cart
                            </button>
                        </div>
                        <h3>${product.title}</h3>
                        <h4>$${product.price}</h4>
                    </article>
            `;
        }); 
        //access variable which holds DOM element
        productsDOM.innerHTML = result;
    }
}

//local storage
class Storage {
    //static method which can use it without instantiate the class
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
}

//event listeners
document.addEventListener("DOMContentLoaded", () => {
    //create instances of classes
    const ui = new UI();
    const products = new Products();

    //get all products 
    products.getProducts()
            .then(products =>  {
                ui.displayProducts(products);
                Storage.saveProducts(products);
            });
            
    //hide and show menu        
    menuBtn.addEventListener('click', () => {
        menu.classList.add("active");
        menuBtn.classList.add("hide");
    });     
    cancelBtn.addEventListener('click', () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
    });          
});
