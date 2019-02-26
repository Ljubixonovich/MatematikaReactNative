
const tasks = [
   {
      taskText: '',
      helpText: '2 + 3',
      correctResult: 5
   },
   {
      taskText: '',
      helpText: '1 + 2',
      correctResult: 3
   },
   {
      taskText: '',
      helpText: '5 - 2',
      correctResult: 3
   },
   {
      taskText: '',
      helpText: '7 - 4',
      correctResult: 3
   },
   {
      taskText: '',
      helpText: '9 - 1',
      correctResult: 8
   }
];



const serbianNames = [
   // { 
   //    nomin: 'ko-sta    ',
   //    genit: 'koga-cega    idem od...',
   //    dativ: 'kome-cemu    dacu to...',
   //    akuz: 'koga-sta      volim...',
   //    vokat: 'oj-ej     ',
   //    instr: 's kim/s cime    ',
   //    lokat: 'o kome/o cemu     ...pricamo '
   // },

   // { 
   //    nomin: '',
   //    genit: '',
   //    dativ: '',
   //    akuz: '',
   //    vokat: '',
   //    instr: '',
   //    lokat: ''
   // },
   { 
      nomin: 'Ana',
      genit: 'Ane',
      dativ: 'Ani',
      akuz: 'Anu',
      vokat: 'Ana',
      instr: 'Anom',
      lokat: 'Ani'
   },
   { 
      nomin: 'Anja',
      genit: 'Anje',
      dativ: 'Anji',
      akuz: 'Anju',
      vokat: 'Anja',
      instr: 'Anjom',
      lokat: 'Anji'
   },
   { 
      nomin: 'Aca',
      genit: 'Ace',
      dativ: 'Aci',
      akuz: 'Acu',
      vokat: 'Aco',
      instr: 'Acom',
      lokat: 'Aci'
   }, 
   { 
      nomin: 'Vesna',
      genit: 'Vesne',
      dativ: 'Vesni',
      akuz: 'Vesnu',
      vokat: 'Vesna',
      instr: 'Vesnom',
      lokat: 'Vesni'
   },
   { 
      nomin: 'Viktor',
      genit: 'Viktora',
      dativ: 'Viktoru',
      akuz: 'Viktora',
      vokat: 'Viktore',
      instr: 'Viktorom',
      lokat: 'Viktoru'
   },
   { 
      nomin: 'Vuk',
      genit: 'Vuka',
      dativ: 'Vuku',
      akuz: 'Vuka',
      vokat: 'Vuče',
      instr: 'Vukom',
      lokat: 'Vuku'
   }, 
   { 
      nomin: 'Goga',
      genit: 'Goge',
      dativ: 'Gogi',
      akuz: 'Gogu',
      vokat: 'Goga',
      instr: 'Gogom',
      lokat: 'Gogi'
   },
   { 
      nomin: 'Dunja',
      genit: 'Dunje',
      dativ: 'Dunji',
      akuz: 'Dunju',
      vokat: 'Dunja',
      instr: 'Dunjom',
      lokat: 'Dunji'
   },
   { 
      nomin: 'Žarko',
      genit: 'Žarka',
      dativ: 'Žarku',
      akuz: 'Žarka',
      vokat: 'Žarko',
      instr: 'Žarkom',
      lokat: 'Žarku'
   },
   { 
      nomin: 'Igor',
      genit: 'Igora',
      dativ: 'Igoru',
      akuz: 'Igora',
      vokat: 'Igore',
      instr: 'Igorom',
      lokat: 'Igoru'
   },
   { 
      nomin: 'Jasna',
      genit: 'Jasne',
      dativ: 'Jasni',
      akuz: 'Jasnu',
      vokat: 'Jasna',
      instr: 'Jasnom',
      lokat: 'Jasni'
   },
   { 
      nomin: 'Lazar',
      genit: 'Lazara',
      dativ: 'Lazaru',
      akuz: 'Lazara',
      vokat: 'Lazare',
      instr: 'Lazarom',
      lokat: 'Lazaru'
   },
   { 
      nomin: 'Luka',
      genit: 'Luke',
      dativ: 'Luki',
      akuz: 'Luku',
      vokat: 'Luka',
      instr: 'Lukom',
      lokat: 'Luki'
   },
   { 
      nomin: 'Ljuba',
      genit: 'Ljube',
      dativ: 'Ljubi',
      akuz: 'Ljubu',
      vokat: 'Ljubo',
      instr: 'Ljubom',
      lokat: 'Ljubi'
   },
   { 
      nomin: 'Marko',
      genit: 'Marka',
      dativ: 'Marku',
      akuz: 'Marka',
      vokat: 'Marko',
      instr: 'Markom',
      lokat: 'Marku'
   },
   { 
      nomin: 'Marta',
      genit: 'Marte',
      dativ: 'Marti',
      akuz: 'Martu',
      vokat: 'Marta',
      instr: 'Martom',
      lokat: 'Marti'
   },
   { 
      nomin: 'Milica',
      genit: 'Milice',
      dativ: 'Milici',
      akuz: 'Milicu',
      vokat: 'Milice',
      instr: 'Milicom',
      lokat: 'Milici'
   },
   { 
      nomin: 'Nikola',
      genit: 'Nikole',
      dativ: 'Nikoli',
      akuz: 'Nikolu',
      vokat: 'Nikola',
      instr: 'Nikolom',
      lokat: 'Nikoli'
   },
   { 
      nomin: 'Pavle',
      genit: 'Pavla',
      dativ: 'Pavlu',
      akuz: 'Pavla',
      vokat: 'Pavle',
      instr: 'Pavlom',
      lokat: 'Pavlu'
   },
   { 
      nomin: 'Petar',
      genit: 'Petra',
      dativ: 'Petru',
      akuz: 'Petra',
      vokat: 'Petre',
      instr: 'Petrom',
      lokat: 'Petru'
   },
   { 
      nomin: 'Petra',
      genit: 'Petre',
      dativ: 'Petri',
      akuz: 'Petru',
      vokat: 'Petra',
      instr: 'Petrom',
      lokat: 'Petru'
   },
   { 
      nomin: 'Sara',
      genit: 'Sare',
      dativ: 'Sari',
      akuz: 'Saru',
      vokat: 'Saro',
      instr: 'Sarom',
      lokat: 'Sari'
   },
   { 
      nomin: 'Sofija',
      genit: 'Sofije',
      dativ: 'Sofiji',
      akuz: 'Sofiju',
      vokat: 'Sofija',
      instr: 'Sofijom',
      lokat: 'Sofiji'
   },
   { 
      nomin: 'Stevan',
      genit: 'Stevana',
      dativ: 'Stevanu',
      akuz: 'Stevana',
      vokat: 'Stevane',
      instr: 'Stevanom',
      lokat: 'Stevanu'
   },
   { 
      nomin: 'Stefan',
      genit: 'Stefana',
      dativ: 'Stefanu',
      akuz: 'Stefana',
      vokat: 'Stefane',
      instr: 'Stefanom',
      lokat: 'Stefanu'
   }, 
  
   { 
      nomin: 'Filip',
      genit: 'Filipa',
      dativ: 'Filipu',
      akuz: 'Filipa',
      vokat: 'Filipe',
      instr: 'Filipom',
      lokat: 'Filipu'
   } 
];

export const GetQuest = () => {   
   const name1 = serbianNames[Math.floor(Math.random() * serbianNames.length)];

   const serbianNamesReduced = serbianNames.filter(n => n.nomin != name1.nomin);
   const name2 = serbianNamesReduced[Math.floor(Math.random() * serbianNamesReduced.length)];
   
   const number1 = Math.floor(Math.random() * 12); 
   const number2 = Math.floor(Math.random() * (13 - number1));

   let taskText = name1.nomin + ' ima ' + number1 + (number1 === 1 ? ' kliker' : ' klikera') + '. ' + 
      name2.nomin + ' ima ' + number2 + (number2 === 1 ? ' kliker' : ' klikera') +
      '. Koliko ' + name1.nomin + ' i ' + name2.nomin + ' imaju zajedno klikera?';
   let correctResult = number1 + number2;
   let helpText = number1 + ' + ' + number2;

   return {
      taskText: taskText,
      helpText: helpText,
      correctResult: correctResult
   };

}