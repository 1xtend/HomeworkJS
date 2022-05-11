'use strict';

const username = prompt('Введіть логін');
const password = prompt('Введіть пароль');

const adminUsername = 'Admin';
const adminPassword = 'difficult-password';

if (username === adminUsername && password === adminPassword) {
  alert('Вітаємо, Адмін!');
} else {
  alert('Неправильні дані для входу');
}
