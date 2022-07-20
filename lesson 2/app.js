// let obj = {
//   username: 'John',
//   folowers: [
//     {
//     username: 'John',
//     },
//     {
//       username: 'Joe',
//     },
//     {
//       username: 'Jack'
//     },
//     {
//       username: [
//         {
//           age: 18
//         },
//         {
//           age: 10
//         },
//         {
//           age: [
//             {
//               number: 29
//             },
//             {
//               number: [
//                 {
//                   color: 'red'
//                 },
//                 {
//                   color: 'black'
//                 }
//               ]
//             }
//           ]
//         }

//       ]
//     }
//   ]
// }

// console.log(obj.folowers[3].username[2].age[0].number);

// let i = 0; //i++
// i = i + 1

let arr = [
  {
    username: 'John',
    last_name: 'Golt'
  },
  {
    username: 'John 2',
    last_name: 'Golt'
  },
  {
    username: 'John 3',
    last_name: 'Golt'
  },
  {
    username: 'John 4',
    last_name: 'Golt'
  },
  {
    username: 'John 5',
    last_name: 'Golt'
  },
  {
    username: 'John 6',
    last_name: 'Golt'
  },
  {
    username: 'John 7',
    last_name: 'Golt'
  },
  {
    username: 'John 8',
    last_name: 'Golt'
  }
]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i].username)
// }

// for(let i = 0; i < arr.length; i++){
//   if(i == 6) {
//     break;
//   } else {
//     console.log(arr[i])
//   }
// }


// FOR OF

// for(let user of arr){
//   console.log(user)
// }

// FOR IN

// let obj = {
//   key1: 'a1',
//   key2: 'a2',
//   key3: 'a3',
//   key4: 'a4',
// }


// for(let item in obj){
//   console.log(obj[item])
// }

// let i = 10;

// while(i > -3){
//   console.log("Hello ", i ),
//   i--
// }

// let i = 0;

// while(i < 7){
//   console.log("Hello"),
//   i++
// }

const users = [
  {
    username: 'Misha',
    salary: 500
  },
  {
    username: 'Andrei',
    salary: 5000
  },
  {
    username: 'Olya',
    salary: 10000
  },
  {
    username: 'Saule',
    salary: 550
  }
]

// const filteredUser = [];

// for(let user of users ){
//   if(user.salary > 500) {
//     filteredUser.push(user)
//   }
// }
// console.log(filteredUser)

// let arr2 = [5, "String"];
// arr2.push("Aruuke")
// console.log(arr2)

// Filter

const filtered = users.filter(user => user.salary > 500)
console.log(filtered)


