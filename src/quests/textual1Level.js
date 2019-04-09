import React from 'react';
import { } from 'react-native';

import { serbianNames } from './names';

export const addQuest1 = () => {
   const name1 = serbianNames[Math.floor(Math.random() * serbianNames.length)];

   const serbianNamesReduced = serbianNames.filter(n => n.nomin != name1.nomin);
   const name2 = serbianNamesReduced[Math.floor(Math.random() * serbianNamesReduced.length)];

   const limit = 12;

   const number1 = Math.floor(Math.random() * limit) + 1;
   const number2 = Math.floor(Math.random() * (limit + 1 - number1));

   let taskText = `${name1.nomin} ima ${number1} ${(number1 === 1 ? ' kliker' : ' klikera')}. ` +
      `${name2.nomin } ima ${number2} ${(number2 === 1 ? ' kliker' : ' klikera')}. ` +
      `Koliko ${name1.nomin} i ${name2.nomin} imaju zajedno klikera?`;
   let correctResult = number1 + number2;
   let helpText = `${number1} + ${number2} =`;


   return {
      taskText: taskText,
      helpText: helpText,
      correctResult: correctResult
   };
}

export const substractQuest1 = () => {
   const name1 = serbianNames[Math.floor(Math.random() * serbianNames.length)];

   const serbianNamesReduced = serbianNames.filter(n => n.nomin != name1.nomin);
   const name2 = serbianNamesReduced[Math.floor(Math.random() * serbianNamesReduced.length)];

   const limit = 12;

   const number1 = Math.floor(Math.random() * limit) + 1;
   const number2 = Math.floor(Math.random() * number1);

   let taskText = `${name1.nomin} je ${(name1.male ? ' imao ' : ' imala')}` + 
      `${number1} ${(number1 === 1 ? ' kliker' : ' klikera')}, pa je onda ` + 
      `${(name1.male ? 'poklonio ' : 'poklonila ')} ${name2.dativ} ${number2} ` +
      `${(number2 === 1 ? ' kliker' : ' klikera')}. Koliko je ${name1.dativ} ostalo klikera ?`;
   let correctResult = number1 - number2;
   let helpText = `${number1} - ${number2} =`;


   return {
      taskText: taskText,
      helpText: helpText,
      correctResult: correctResult
   };
}