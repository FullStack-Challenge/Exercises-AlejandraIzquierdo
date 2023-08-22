"use strict";
/**
 * * Exercise 11: POO
 * TODO: _Online Store:_ Build a basic online store with classes like Product, Cart, and Order. Implement methods to add products to the cart, place orders, and calculate the total cost.
 * TODO: _Geometry Calculator:_ Create a class for calculating geometric properties like area and perimeter. Implement methods for various shapes like circles, rectangles, triangles, etc.
 * TODO: _Library Catalog:_ Develop classes for books and authors. Create a library catalog that allows adding books, searching by author or title, and displaying information about available books.
*/
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Store_instances, _Store_calculateTotalCost;
class Store {
    constructor() {
        _Store_instances.add(this);
        this.products = [];
        this.carts = [];
        this.orders = [];
    }
    addProductsToCart(product, cart) {
        this.products.push(product);
        cart.addProduct(product);
        if (cart.getProducts().length == 1) {
            this.carts.push(cart);
        }
    }
    placeOrder(cart) {
        const totalC = __classPrivateFieldGet(this, _Store_instances, "m", _Store_calculateTotalCost).call(this, cart);
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
_Store_instances = new WeakSet(), _Store_calculateTotalCost = function _Store_calculateTotalCost(cart) {
    const products = cart.getProducts();
    return products.reduce(((accum, val) => accum + val.price), 0);
};
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `Product with name: ${this.name} and price: ${this.price}.`;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
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
    constructor(cart, totalCost) {
        this.cart = cart;
        this.totalCost = totalCost;
    }
    toString() {
        return `Order with ${this.cart.getProducts().length} products and totalCost: ${this.totalCost}.`;
    }
}
const store = new Store();
const product1 = new Product("Rice", 18700);
const product2 = new Product("Cheese", 9800);
const cart = new Cart();
store.addProductsToCart(product1, cart);
store.addProductsToCart(product2, cart);
store.placeOrder(cart);
cart.getProducts().forEach(el => console.log("Product added => %s", el.toString()));
store.getCarts().forEach(el => console.log("Cart added => %s", el.toString()));
store.getOrders().forEach(order => console.log("Existing orders => %s", order.toString()));
