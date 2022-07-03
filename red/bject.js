const object = {};
object.$1 = 'faat';
object['1'] = faat;

function longestString(){
    longest= '';
    for(var i=0; i<arguments.length; i++){
        if (arguments[i].length >longest.length) {
            longest = arguments[i];   
        }
    }
    return longest;
}
const sub = (x, y)=> y.every(eke => x.includes(eke));

const sb = [1,2,3,4,5,6,7,8];
sb.every((wea, index, sb)=>{
    sb[index] -= 1;
    console.log(`[${sb}][${index}] -> ${wea}`);
    return wea<8
})

const ber = [1,2,3,4,5,6,7,8];
ber.every((we, index, b)=>{
    ber.pop();
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

let first = {q:1, r:2};
let second = {e:3, d:4};
let third = {t:5, y:6};

console.log(Object.assign(second, third, first))
console.log(Object.values(second))
console.log(Object.keys(second))
console.log(Object.entries(second));

console.log([1, [2, 3], [4, 5]].flat());    
console.log([1, [2, [3, [4]]], 5].flat());  
console.log([1, [2, [3, [4]]], 5].flat(3)); 

console.log('string'.repeat(3)); 
console.log('tolu'.codePointAt(1))

console.log(String.raw({ raw: 'test' }, 0, 1, 2)); 

console.log(new Date(2022).toString())

let aray = [1];
let map = new Map([['a', 1], [42, 2]]);
console.log(map.set(aray, 3).set(true, 4));

let set = new Set([1, 2, 3, 2, 1]);

for (let value of set){console.log(value)};          // => 1, 2, 3
for (let value of set.values()){console.log(value)}; // => 1, 2, 3
for (let key of set.keys()){console.log(key)};       // => 1, 2, 3
for (let [key, value] of set.entries()) {
  console.log(key);                                 // => 1, 2, 3
  console.log(value);                               // => 1, 2, 3
}


function* countAppleSales () {
  let saleList = [3, 7, 5]
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i]
  }
}
let appleStore = countAppleSales()  // Generator { }
console.log(appleStore.next())      // { value: 3, done: false }
console.log(appleStore.next())      // { value: 7, done: false }
console.log(appleStore.next())      // { value: 5, done: false }
console.log(appleStore.next())      // { value: undefined, done: true }

const dar = Date.prototype.getDate(1999,06,02);
console.log(dar)

console.log(Date.now())
const aq = [-10, 22, 333, 42];
const bc = [-11, 5, 22, 41, 42];
let vas = [...aq, ...bc]
let sae = new Set(vas)
let arrs =Array.from(sae);
let srt = arrs.sort()
console.log(srt);


function merge(left, right) {
  let arr = []
  while (left.length && right.length) {
      if (left[0] < right[0]) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  
  return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
console.log(mergeSort(arrs));



let arr = [false,'2',1];
const search =  false;
const search_index = arr.indexOf(search);

if (search_index >= 0){
arr.splice(search_index, 1)
}
console.log(`${arr}`)

const d = [-10,-11,-3,1,-4,2,7]
const e = -3
let car = [];
for(let i = 0; i<d.length; i++){
  if(d[i] > e){
    c.push(d[i]); 
  }
}
  console.log(c)

var a = [1,2,3,5,6]
var b = 1
b<6? a.unshift(0) : a.unshift(b)
console.log(a)

console.log(Array.from(new Array(10-2+1).keys()))// // 'a': map.get(1)

var c = 'refgty';
var v = 'cdefgh'

const h = [...c, ...v];
let x = [...v].reverse();
console.log(x)
console.log(h.join(''))
console.log(h)

const t = 'tpircs';
function specialString(str){
return str.replace(/[^\w]/g, '')
}
console.log(specialString(t));

function myFunction(a, b){
const q = a;
const t = b;
function specialString(str){
return str.replace(/[^\w]/g, '')
}
let r = specialString(t);
let s = specialString(q);
let v = s.charAt(0).toUpperCase() + s.slice(1);
console.log(v);
let n = [...r].reverse();
const f = [...v, ...n];
const h = f.join('');
return h
}
console.log(myFunction('java', 'tpi%rcs'))
console.log(myFunction('c%ountry', 'edis'))
console.log(myFunction('down', 'nw%ot'))

const daq = [1,2,3];
const caz = 2;
let dh = [];
for(let i = 0; i<daq.length; i++){
  if(daq[i] != caz){
    dh.push(daq[i]); 
  }
}
console.log(dh);

const nextPrimeNumber = (num) => {
    for(let i = 2; i < num ; i++) {
        if(num % i === 0) {
            return nextPrimeNumber(num + 1)
        }

    }
    return num;
};
console.log(nextPrimeNumber(2000));