module.exports = class Product {
  #name;
  #price;
  #category;

  constructor(name, price, category) {
    this.#name = name;
    this.#price = price;
    this.#category = category;
  }

  get getName() {
    return this.#name;
  }
  set setName(name) {
    if (name === "") {
      throw new Error("You cannot enter empty product name!");
    }
    this.#name = name;
  }

  get getPrice() {
    return this.#price;
  }
  set setPrice(price) {
    if (price <= 0) {
      throw new Error("Your price should be bigger than 0!");
    }
    this.#price = price;
  }

  get getCategory() {
    return this.#category;
  }
  set setCategory(category) {
    if (category === "") {
      throw new Error("You cannot enter empty category!");
    }
    this.#category = category;
  }
}
