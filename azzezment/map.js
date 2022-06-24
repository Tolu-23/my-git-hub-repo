// // function idGenerator(number) {
// //     return 'number'+ Math.floor(Math.random() * (number+1)) 
// // }
// // function store(number) {
// //     return 'name'+ Math.floor(Math.random() * (number+1)) 
// // }

// // const map = new Map();
// // map.set(`${store(1000)}`, `${idGenerator(1000)}`);
// // console.log(map)

// function createMap(a, b){
//     const map = new Map();
//     console.log(map.set(a, b));
// }
// createMap('tolu', 8)
// function idGenerator() {
//     return Math.floor(Math.random() * (1000+1))
// }
// for (let i = 0; i <= idGenerator() ; i++) {
//     const s = i;
//     console.log('num '+ s)
    
// }var data = [];
// function findIndex(name){
//   var i = 0;
//   for(i=0;i<data.length;i++){
//     if(data[i].name===name){
//       return i;
//     }
//   }
//   return i;

// }
// function bu() {
//   return `tolu`
// }
// function updateData(){
//   var i = 0;
//   for(i=0;i<arguments.length;i++){
//     data[findIndex(arguments[i].name)]=arguments[i];
//   }
// }
// updateData(
//  {name: `${bu()}`, value:"22"}, 
//  {name:"b", value:"2"}, 
//  {name:"c", value:"3"}, 
//  {name:"a", value:"1"} // the new value for a
// );
// console.log(data);
// updateData(
//   {name:"n", value: "5464"}
// )
// console.log(data)

const newArray = ['tolu', 'bolu', 'ola', 'shade', 'tope']


const g = newArray.reverse()
console.log(g)
localStorage.setItem('myObj', JSON.stringify(newArray));
console.log(localStorage)