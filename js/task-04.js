/**
 * Счетчик состоит из спана и кнопок, 
 * которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */
const currentValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let counterVal = 0;
const decrement = () => {
  counterVal -= 1;
  return (currentValue.textContent = counterVal);
};
const increment = () => {
  counterVal += 1;
  return (currentValue.textContent = counterVal);
};

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);
