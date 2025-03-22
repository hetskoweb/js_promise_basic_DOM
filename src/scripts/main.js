'use strict';

// write your code here
const logo = document.querySelector('.logo');
const message = document.createElement('div');

message.classList.add('message');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved');
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

async function logoClick() {
  try {
    const result = await Promise.race([promise1, promise2]);

    message.textContent = result;
    document.body.appendChild(message);
  } catch (error) {
    message.textContent = error.message;
    message.classList.add('error-message');
    document.body.appendChild(message);
  }
}

logoClick();
