// const Product = require("../entities/Product");
// const UsersDatabase = require("../repos/UsersDatabase");

// module.exports = class ProductDatabase extends UsersDatabase {
//   #testProduct = new Product("test", 100, "test");
//   get getTestProduct() {
//     return this.#testProduct;
//   }

//   #newProduct = new Product("product1", 50, "product1");
//   get getNewProduct() {
//     return this.#newProduct;
//   }

//   #products = [this.#testProduct];
//   get getProducts() {
//     return this.#products;
//   }

//   addProduct() {
//     this.#products.push(this.#newProduct);
//   }

//   updateProduct() {
//     this.#products[0].setName = this.#testProduct.getName;
//     this.#products[0].setPrice = this.#testProduct.getPrice;
//     this.#products[0].setCategory = this.#testProduct.getCategory;
//   }

//   deleteProduct(productName) {
//     if (this.#products.length == 0) {
//       return `You don't have products to delete!`;
//     } else {
//       for (let i = 0; i <= this.#products.length; i++) {
//         if (this.#products[i].getName == productName) {
//           this.#products.splice(i, 1);
//           return `Product deleted and you have ${
//             this.#products.length
//           } remaining.`;
//         } else {
//           return `Please check your product name you have ${
//             this.#products.length
//           } remaining.`;
//         }
//       }
//     }
//   }

//   listProducts() {
//     for (let i = 0; i < this.#products.length; i++) {
//       return this.#products[i];
//     }
//   }

//   getProductPrice(name) {
//     for (let i = 0; i < this.#products.length; i++) {
//       if (this.#products[i].getName == name) {
//         return this.#products[i].getPrice;
//       } else {
//         return null;
//       }
//     }
//   }
// };
