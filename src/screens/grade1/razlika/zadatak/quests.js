
const tasks = [
   {
      taskText: '2 + 3',
      correctResult: 5
   },
   {
      taskText: '1 + 2',
      correctResult: 3
   },
   {
      taskText: '5 - 2',
      correctResult: 3
   },
   {
      taskText: '7 - 4',
      correctResult: 3
   },
   {
      taskText: '9 - 1',
      correctResult: 8
   }
];

export const GetQuest = () => {
   let random = Math.floor(Math.random() * tasks.length);
   return tasks[random];
}