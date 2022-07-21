// WHILE
// объявить перемнную
// while(Условие){
//   // Тут ваш код
// }

// let num = 0;

// while(num < 2){
//   console.log(num)
//   num++;
// }

// FOR
// for(начало; условие; шаг){
//   // тело цикла
//   // Ваш код для выполнения
// }

// let num  = 0;
// for(; num < 5; num++) { //ES6
//   console.log(num)
// }

// Использование Break
// for(let i = 0; i < 5; i++ ){
//   console.log(i)
//   if(i == 2) break;
// }

// Continue
//  || - или
//  && - и

// for(let i = 0; i < 5; i++) {
//   if(i == 2 || i == 10 ) continue;
//   console.log(i)
// }

let arr = [
  {
    name: "Arsen",
    last_name: "Shamshiev"
  },
  {
    name: "Aruuke",
    last_name: "Sultanova"
  },
  {
    name: "Saule",
    last_name: "Geectech"
  }
]

// for(let i = 0; i < arr.length; i++) {
//   // console.log(arr[i])
//   console.log(arr[i].name, arr[i].last_name)
// }

// let arr1 = [4, 5, 2]
// console.log(arr[1])

// FOR OF

// for(let user of arr){
//   console.log(user.name + " " + "Simson")
// }

// FOR IN

// let object = {
//   key: "Saule S",
//   name: "Arsen J",
//   name2: "Ulukbek K"
// }

// for(let i in object){
//   console.log(object[i])
// }

// let numbers = [32, 16, 23, 18];
// let result = 0;
// numbers.push(11)

// for(let i = 0; i < numbers.length; i++){
//   // result += numbers[i]
//   result = result + numbers[i]; 
// }
// console.log(result)

// let i = 40;

// while(i > -1){
//   console.log(i)
//   i--;
// }

// const students = [1,2]
// students[0] = 9;

// console.log(students)

let students = [
  {
    name: "Arsen",
    salary: 15000
  },
  {
    name: "Nurmuhammed",
    salary: 10000
  },
  {
    name: "Aruule",
    salary: 5000
  },
  {
    name: "Ulugbek",
    salary: 100000
  }
]

// const filteredStudents = [];

// for(let user of students){
//   if(user.salary > 10000){
//     filteredStudents.push(user)
//   }
// }

// console.log(filteredStudents)

// Метод FILTER

const filtered = students.filter(user => user.salary > 10000)
console.log(filtered)




