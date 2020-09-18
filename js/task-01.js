/**
 * Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега h2)
и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:
Категория: Животные
Количество элементов: 4
 */

const listCategories = document.querySelector('#categories');
console.log(`В списке ${listCategories.children.length} категории.`);

const listItems = document.querySelectorAll('.item');

listItems.forEach(el => {
  console.log(`Категория: ${el.querySelector('h2').textContent} `);
  console.log(
    `Количество элементов: ${el.querySelector('ul').children.length}`,
  );
});
