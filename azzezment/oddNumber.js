var oddNumber = [];
for( var i = 1; i < 20; i+=2){
    oddNumber.push(i)
};
console.log(oddNumber)

var myStrin= 'bolu';
if ( i = 0){
    i< myStrin.length; i++
    console.log(i)
}

function randomRange(myMax, myMin) {
    return Math.floor(Math.random() * (myMax - myMin)) +myMin;
}
console.log(randomRange(10, 1))

function convertToInteger(str){
    'use strict';
    return parseInt(str);
}
console.log(convertToInteger('56 '))

function checkSign(mum){
    return mum > 0 ? "positive" : mum < 0 ? "negative" : "zero"  
}
console.log(checkSign(0))

function printManyTimes(str){
    "use strict";

    const SENTENCE = str + " is a programmer";

    for (let i = 0; i < str.length; i++){
        console.log(SENTENCE);
    }
}
printManyTimes("tolulope");

let s = [5,7,2];
function editInPlace(){
    "use strict";

    s =[2,5,7]
    console.log(s)
}
editInPlace();

function freezeObj(){
    "use strict"

    const MATH_CONSTANT = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANT);

    try{
        MATH_CONSTANT.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANT.PI;
}

const PI = freezeObj();

console.log(PI);

const myConcat= (x, y) => x.concat(y);

console.log(myConcat([1,2], [3,4,5]));

const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b)=> a+b, 0);
    };
})();
console.log(sum(1,2,3,4,5,6,7,8,9,10));

const AVG_TEMPERATURE = {
    today : 75,
    tomorrow : 79.5
}
function getTemp(avgTemperature){

    const  { tomorrow : tempOftomorrow, today : tempOfToday } = avgTemperature;

    return tempOfToday
    return tempOftomorrow;
}

console.log(getTemp(AVG_TEMPERATURE));

function covetCurrency(a, b){
    return a*b;
}
console.log(covetCurrency(100, 5.8));