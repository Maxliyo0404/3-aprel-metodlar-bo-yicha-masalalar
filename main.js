// Map metodi
// let numbers =[2, 3, 4, 5, 6, 7, 8, 9];
// let newNumber = numbers.map((num) => {
//     return num ** 2;
// })
// console.log(newNumber);
// 2-masala
let books = [
    { name: 'Ikki eshik orasi', year: 2005, reating : 9 },
    { name: 'Otkan kunlar', year: 2008, reating : 7 },
    { name: 'Sarob', year: 2010, reating : 5 },
    { name: 'Sotilayotgan kasaliklar', year: 2025, reating : 3 },
]
let book = books.map((good) => {
    return{ name: good.name, year: good.year, reating: good.reating +1};
})
console.log(book);
