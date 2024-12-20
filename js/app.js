// 1. Destructuring Assignment
// 1-masala
/*const user25 = { name: "Ali", age: 25, location: "Toshkent" };
let { name, age, location } = a11;
console.log(a11); */
// 2-masala
const numbers2 = [10, 20, 30, 40, 50];
let [a, b, ...res12] = numbers2;
console.log(res12);
// 3-masala
const product = { title: "Telefon", price: 300, brand: "Samsung" };

function displayProduct({ title, price }) {
  console.log(title);
  console.log(price);
  }

displayProduct(product);
// 2. Scope
// 1-masala
let x = 10; 

function testScope() {
  let x = 20; 
  if (true) {
    let x = 30; 
    console.log("Block scope:", x); 
  }
  console.log("Local scope:", x); 
}

testScope();
console.log("Global scope:", x);

// 2-masala
function calculate() {
  let result;
  if (true) {
    result = 10;
  }
  console.log(result); 
}

calculate();
// 3-masala
let count = 5;

function increment() {
  count++; 
  console.log("Function scope:", count); 
}

increment(); 

if (true) {
  count += 2; 
  console.log("Block scope:", count); 
}

console.log("Global scope:", count); 


// 3. Spread/Rest Operator
// 1-mashq
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
// 2-mashq
function squareNumbers(...numbers) {
    return numbers.map(num => num * num);
  }
  console.log(squareNumbers(2, 6, 8, 9));
// 3-mashiq
const user33 = { name: "Ali", age: 25 };
const updatedUser = {
  ...user33, location: "Fergena"
};

console.log(updatedUser);
// 4. Hoisting va TDZ (Temporal Dead Zone)
// 1-masala
console.log(a); //  birinchi console.log(a) chaqirilganda, a ning qiymati undefined bo'ladi
var a = 10;

console.log(b); // Bu holatda, console.log(b) chaqirilganda, ReferenceError yuz beradi, chunki b o'zgaruvchisi temporal dead zone holatida bo'ladi va uni ishlatishga ruxsat yo'q.
let b = 20;

test();
function test() {
  console.log("Test function called");
}
// 2-masala
console.log(x); // let bilan e'lon qilingan o'zgaruvchilar temporal dead zone (TDZ) da bo'ladi, ya'ni ularni qiymatga tayinlashdan oldin ishlatish mumkin emas.
let x = 5;
// 5. Modul
// 1-masala
import {sum, multiply} from './functions.js'
console.log(sum(8, 6));
console.log(multiply(8, 6));
// 2-masala
import { greet } from './functions.js';
console.log(greet);
// 3-masala
import {vide} from './functions.js'
console.log(vide(5, 1));
// 1-5. Foydalanuvchilarga oid masalalar
// 1-masala
const users201 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Laylo", age: 30, isActive: false },
    { id: 3, name: "Sardor", age: 22, isActive: true },
    { id: 4, name: "Madina", age: 28, isActive: false },
  ];
function  get201 (users201) {
    return users201.filter(user => user.isActive  );
} 
const akt201 = get201(users201);
console.log(akt201);
// 2-masala
const users202 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Laylo", age: 30, isActive: false },
    { id: 3, name: "Sardor", age: 22, isActive: true },
    { id: 4, name: "Madina", age: 28, isActive: false },
  ];
  

  function get202(users202) {
    return users202.sort((a, b) => a.age - b.age);
  }

  const akt202 = get202(users202);
  console.log(akt202);
  // 3-masala
  const users203 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Laylo", age: 30, isActive: false },
    { id: 3, name: "Sardor", age: 22, isActive: true },
    { id: 4, name: "Madina", age: 28, isActive: false },
  ];
  
  function fin203(name) {
    const user203 = users203.find(user203 => user203.name === name);
    return user203 ? user203 : null; 
  }
  console.log(fin203("Ali"));    
  console.log(fin203("Laylo"));   
  console.log(fin203("Sardor")); 
  console.log(fin203("Madina")); 
  console.log(fin203("Javlon"));  
  // 4-masala
  const users204 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Laylo", age: 30, isActive: false },
    { id: 3, name: "Sardor", age: 22, isActive: true },
    { id: 4, name: "Madina", age: 28, isActive: false },
  ];
  
  
  function get204(users204) {
    let sum204 = 0; 
    let counter204 = 0;  
    users204.forEach(function(user204) {
      sum204 += user204.age;  
      counter204++;  
    });
   let res204 = sum204 / counter204;
    return res204;
  }
  console.log(get204(users204));  
  // 5-masala
  const users205 = [
    { id: 1, name: "Ali", age: 25 },
    { id: 2, name: "Laylo", age: 30 },
    { id: 3, name: "Sardor", age: 22 },
    { id: 4, name: "Madina", age: 28 }
  ];
  
  function get205(min205, max205) {
    return users205.filter(function(user205) {
      if (user205.age >= min205 && user205.age <= max205) {
        return true; 
      }
      return false;
    });
  }
  console.log(get205(25, 30));  
  console.log(get205(22, 28)); 
  // 6-10. Mahsulotlarga oid masalalar
  // 6-masala
  const products61 = [
    { id: 1, name: "Telefon", price: 1200, category: "electronics" },
    { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
    { id: 3, name: "Stol", price: 150, category: "furniture" },
    { id: 4, name: "Kitob", price: 50, category: "books" },
  ];
  
  function get61(cat61) {
    return products61.filter(product61 => product61.category === cat61);
  }
  console.log(get61("electronics"));  
  console.log(get61("furniture"));   
  console.log(get61("books")); 
  // 7-masala
  const products62 = [
    { id: 1, name: "Telefon", price: 1200, category: "electronics" },
    { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
    { id: 3, name: "Stol", price: 150, category: "furniture" },
    { id: 4, name: "Kitob", price: 50, category: "books" }
  ];
  
  function get62() {
    let max62 = products62[0];  
   products62.forEach(product62 => {
      if (product62.price > max62.price) {
        max62 = product62;  
      }
    });
  return max62;  
  }
  console.log(get62()); 
  
   // 8-masala
   const products68 = [
    { id: 1, name: "Telefon", price: 1200, category: "electronics" },
    { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
    { id: 3, name: "Stol", price: 150, category: "furniture" },
    { id: 4, name: "Kitob", price: 50, category: "books" }
  ];
  
  function get68() {
    let sum68 = 0;  
  products68.forEach(product68 => {
      sum68 += product68.price;  
    });
  return sum68;  
  }
  console.log(get68());  
  // 9-masala
  const products69 = [
    { id: 1, name: "Telefon", price: 1200, category: "electronics" },
    { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
    { id: 3, name: "Stol", price: 150, category: "furniture" },
    { id: 4, name: "Kitob", price: 50, category: "books" }
  ];
  function dec69() {
    return products69.map(product69 => {
    const dec69 = product69.price * 0.9;  
     return { ...product69, price: dec69 };
    });
  }
  console.log(dec69());
  // 10-masala
  const products610 = [
    { id: 1, name: "Telefon", price: 1200, category: "electronics" },
    { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
    { id: 3, name: "Stol", price: 150, category: "furniture" },
    { id: 4, name: "Kitob", price: 50, category: "books" }
  ];
  function fil610(min610) {
    return products610.filter(product610 => {
      if (product610.price > min610) {
        return true;  
      } else {
        return false; 
      }
    });
  }
  console.log(fil610(500));
  
  
  
  
  


  
  
  
  

  
  








  

  
 







