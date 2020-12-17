"use strict";
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function (string) {
  let newStr = "";
  if (string.length < 40) {
    newStr = string;
    console.log(newStr);
  } else {
    newStr = string.slice(0, 40);
    console.log("больше" + newStr + "...");
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
formatString("Curabitur ligula sapien, tincidunt non.");
// вернется оригинальная строка

formatString("Vestibulum facilisis, purus nec pulvinar iaculis.");
// вернется форматированная строка

formatString("Curabitur ligula sapien.");
// вернется оригинальная строка

formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.");
// вернется форматированная строка
