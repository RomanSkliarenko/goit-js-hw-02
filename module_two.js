"use strict";

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

const calculateEngravingPrice = function (message, pricePerWord) {
  const messageToArr = message.split(" ");
  const engravingPrice = messageToArr.length * pricePerWord;
  console.log(
    `engraving this text: ${message}; will cost ${engravingPrice} points`
  );
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
); // 80

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  20
); // 160

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40); // 240

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20); // 120
