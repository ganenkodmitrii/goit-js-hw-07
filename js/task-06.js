/**
 * Напиши скрипт, который бы при потере фокуса на инпуте, 
 * проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.

Для добавления стилей, используй CSS-классы valid и invalid.
*/
const validationInput = document.querySelector('#validation-input');

const onInputValidation = event => {
  const dataLength = Number(validationInput.getAttribute('data-length'));
  const inputValLength = event.currentTarget.value.length;

  if (dataLength === inputValLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
    return;
  }

  validationInput.classList.remove('valid');
  validationInput.classList.add('invalid');
};
validationInput.addEventListener('blur', onInputValidation);
