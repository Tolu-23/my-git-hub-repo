// const object = {};
// object.$1 = 'faat';
// object['1'] = faat;

// function longestString(){
//     longest= '';
//     for(var i=0; i<arguments.length; i++){
//         if (arguments[i].length >longest.length) {
//             longest = arguments[i];   
//         }
//     }
//     return longest;
// }
// const sub = (x, y)=> y.every(eke => x.includes(eke));

// const sb = [1,2,3,4,5,6,7,8];
// sb.every((wea, index, sb)=>{
//     sb[index] -= 1;
//     console.log(`[${sb}][${index}] -> ${wea}`);
//     return wea<8
// })

const b = [1,2,3,4,5,6,7,8];
b.every((we, index, b)=>{
    b.pop();
    console.log(`[${b}][${index}] -> ${we}`);
    return we<8
})

const fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvai(arr, val) {
    return arr.some(arrVal=>val === arrVal);
}
console.log(checkAvai(fruits, 'kela'));   
console.log(checkAvai(fruits, 'banana'));

const array1 = [5, 12, 8, 130, 44];

const found = array1.findIndex(element => element > 10);

console.log(found);

  const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});

function isPrime(params) {
    for (let i= 2; i < params; i++) {
        if (params%i ===0) {
            return false;
        }
    }
    return params > 1;
}
console.log([4, 6, 8, 9, 12].findIndex(isPrime));
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); 

console.log('a'.codePointAt(0));

const fruit = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruit.findIndex(frui => frui === "blueberries");

console.log(index); // 3
console.log(fruit[index]);