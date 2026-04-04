// 1. Map metodi

// let numbers =[2, 3, 4, 5, 6, 7, 8, 9];
// let newNumber = numbers.map((num) => {
//     return num ** 2;
// })
// console.log(newNumber);
// 2-masala
// let books = [
//     { name: 'Ikki eshik orasi', year: 2005, reating : 9 },
//     { name: 'Otkan kunlar', year: 2008, reating : 7 },
//     { name: 'Sarob', year: 2010, reating : 5 },
//     { name: 'Sotilayotgan kasaliklar', year: 2025, reating : 3 },
// ]
// let book = books.map((good) => {
//     return{ name: good.name, year: good.year, reating: good.reating +1};
// })
// // console.log(book);

// // 2.  ForEach metodi

// // const numbers = [2, 3, 4, 5,];
// // const newNumber = [];
// // numbers.forEach(num => {
// //     newNumber.push(num ** 2)
// // });
// // console.log(newNumber);
// // 2-masala
// // let ismlar = ['Rano', 'Barno','Malika', 'Dilshoda', 'Gulirano'];
// // ismlar.forEach(function (ism){
// //     let yangi = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + "xon";
// //     console.log(yangi);
    
// // })
// //3. For metodi
// let numbers = [2, 3, 4, 5, 6, 7];
// for (let i = 0; i < numbers.length; i ++) {
//     console.log(numbers[i]);
    
// // }
// // 2-masala
// let names = ['Farxod', 'Baxrom', 'Sherzod','Shokir'];
// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
    
// }

// 4.sort metodi

// let ismlar = ['Rano', 'Barno','Malika', 'Dilshoda', 'Gulirano'];
// let ism = ismlar.sort();
// console.log(ism);
// 2-masala

// let numbers = [2, 8, 3, 5, 4, 7];
// let sortmetod = numbers.sort((a, b) => {
//     return (a  - b);
// })
// console.log(sortmetod);

// 5. Filter metodi
// let numbers =[2, 4, 10, 9, 20, 30, 40, 5, 80];
// let newNumber = numbers.filter(son => son > 10);
// console.log(newNumber);
 
// 2-masala
// const fruits = ['banana', 'apple', 'oringe','pear', 'peach'];
// let newFruit = fruits.filter(fruit => fruit.length > 4);
// console.log(newFruit);

// 6. Pop metodi
// 1-masala
// let ismlar = ['Rano', 'Malika', 'Dilshoda', 'Gulzoda'];
// ismlar.pop();
// console.log(ismlar);

// 2-masala
//  const fruits = ['banana', 'apple', 'oringe'];
//  let newFruit = fruits.pop();
//  console.log(newFruit);
  
// 7.Push metodi
//  let ismlar = ['Rano', 'Barno','Malika', 'Dilshoda', 'Gulirano'];
//  let yangi = ismlar.push('Malika');
//  console.log(yangi);
//  2-masala
//  const fruits = ['banana', 'apple', 'oringe'];
//  fruits.push('peach');
//  console.log(fruits);

// 8. Shift metodi
// let ismlar = ['Rano', 'Malika', 'Dilshoda', 'Gulzoda'];
// ismlar.shift();
// console.log(ismlar);
// 2-masala
// const fruits = ['banana', 'apple', 'oringe'];
//   let newFruit = fruits.shift();
//   console.log(newFruit);
  
// 9. Unshift metodi

// let ismlar = ['Rano', 'Malika', 'Dilshoda', 'Gulzoda'];
// ismlar.unshift('Maxliyo');
// console.log(ismlar);