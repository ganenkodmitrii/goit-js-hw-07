/**
 * Напиши скрипт который,
 * при наборе текста в инпуте input#name-input
 * (событие input), подставляет его текущее значение в span#name-output.
 * Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
 */

const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

const onInputChange = event => {
  outputText.textContent =
    event.currentTarget.value === '' ? 'незнакомец' : event.currentTarget.value;
};
inputText.addEventListener('input', onInputChange);
