function caseInSwitch(val){
    var answer = '';
    switch(val){
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'zeta';
            break;
    }
    return answer;
}
console.log(caseInSwitch(2))

function abTest(a, b){
    if (a<0 || b<0){
        return undefined;
    }
    return Math.round (Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}
console.log(abTest(2,3))

 var myDog ={
    'name': 'camper',
    'legs': 4,
    'tails': 1 ,
    'friends': ['anything']
 };
 myDog.name = 'roxy'
 myDog.bark = 'gbo-gbo'
 delete myDog['tails']
 console.log(myDog.tails)
 console.log(myDog['name'])
 
 console.log(myDog.bark)