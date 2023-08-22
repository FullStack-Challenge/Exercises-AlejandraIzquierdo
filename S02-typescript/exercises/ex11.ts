/** 
 * * Exercise 11: POO
 * TODO: _Online Store:_ Build a basic online store with classes like Product, Cart, and Order. Implement methods to add products to the cart, place orders, and calculate the total cost.
 * TODO: _Geometry Calculator:_ Create a class for calculating geometric properties like area and perimeter. Implement methods for various shapes like circles, rectangles, triangles, etc.
 * TODO: _Library Catalog:_ Develop classes for books and authors. Create a library catalog that allows adding books, searching by author or title, and displaying information about available books.
*/


class Store {
    products: Product[];
    carts: Cart[];
    orders: Order[];

    constructor() {
        this.products = [];
        this.carts = [];
        this.orders = [];
    }

    addProductsToCart(product: Product, cart: Cart) {
        this.products.push(product);
        cart.addProduct(product);
        if (cart.getProducts().length == 1) {
            this.carts.push(cart);
        }
    }

    #calculateTotalCost(cart: Cart) {
        const products = cart.getProducts();
        return products.reduce(((accum, val) => accum + val.price), 0);
    }

    placeOrder(cart: Cart) {
        const totalC = this.#calculateTotalCost(cart);
        let newOrder = new Order(cart, totalC);
        this.orders.push(newOrder);
    }

    getCarts() {
        return this.carts;
    }
    getOrders() {
        return this.orders;
    }
}


class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Product with name: ${this.name} and price: ${this.price}.`;
    }
}

class Cart {
    products: Product[];
    
    constructor() {
        this.products = [];
    }

    addProduct(product: Product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    toString() {
        return `Cart with ${this.getProducts().length} products.`;
    }
}

class Order {
    cart: Cart;
    totalCost: number;
    
    constructor(cart: Cart, totalCost: number) {
        this.cart = cart;
        this.totalCost = totalCost;
    }

    toString() {
        return `Order with ${this.cart.getProducts().length} products and totalCost: ${this.totalCost}.`;
    }
}

const store = new Store();
const product1: Product = new Product("Rice", 18700);
const product2: Product = new Product("Cheese", 9800);
const cart = new Cart();
store.addProductsToCart(product1, cart);
store.addProductsToCart(product2, cart);
store.placeOrder(cart);

cart.getProducts().forEach(el => console.log("Product added => %s", el.toString()));
store.getCarts().forEach(el => console.log("Cart added => %s", el.toString()));
store.getOrders().forEach(order => console.log("Existing orders => %s", order.toString()));
