const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmine."


const n= [1,3,4,5,6,7,8,9,10,11] 
let t = 10;
let myTolu = 'countdown ' 
while(t<n.length){
    if (t === n.length -1){
        myTolu += 'blast off'
    }else{
        myTolu += `${i} `
    }
i--
}
console.log(myTolu)