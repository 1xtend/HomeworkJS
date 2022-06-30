'use strict';

const cart = {
  products: [],

  add(product) {
    this.products.push(product);
  },

  remove(productName) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === productName) {
        this.products.splice(i, 1);
        return;
      }
    }
  },

  clear() {
    this.products = [];
  },

  getAll() {
    return this.products;
  },

  getTotalPrice() {
    let total = 0;

    for (const product of this.products) {
      total += product.price * product.quantity;
    }

    return total;
  },

  increaseQuantity(productName) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.quantity += 1;
      }
    }
  },

  decreaseQuantity(productName) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.quantity -= 1;
      }
    }
  },

  changePrice(productName, newPrice) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.price = newPrice;
      }
    }
  },

  getProductNames() {
    const names = [];

    for (const product of this.products) {
      names.push(product.name);
    }

    return names;
  },

  generateRandomPhrase() {
    const phrases = [
      'Сьогодні вам пощастить з грошима',
      'Вас буде переслідувати вдача',
      'Сьогодні вам прийде погана новина',
      'Вас чекає подарунок від близького',
      'Сьогодні будуть складнощі на роботі',
    ];

    const randomIndex = Math.round(Math.random() * (phrases.length - 1));

    return phrases[randomIndex];
  },

  order() {
    let message = '';

    let products = '';

    const divider = '---------\n';

    for (const product of this.products) {
      const { name, price, quantity } = product;

      products += `\n${name} ${quantity} x ${price} грн. = ${
        price * quantity
      } грн. \n${divider}`;
    }

    message += divider;
    message += 'Чек\n';
    message += products;
    message += `Сума = ${this.getTotalPrice()} грн.\n`;
    message += divider;
    message += 'Дякуємо за покупку!\n';
    message += divider;
    message += this.generateRandomPhrase();
    console.log(message);
  },
};

const apple = {
  name: 'Яблуко',
  price: 9.99,
  quantity: 3,
};

const orange = {
  name: 'Апельсин',
  price: 12,
  quantity: 1,
};

cart.add(apple);
cart.changePrice('Яблуко', 15);
cart.add(orange);

console.table(cart.getAll());

cart.getTotalPrice();

cart.generateRandomPhrase();

cart.order();
