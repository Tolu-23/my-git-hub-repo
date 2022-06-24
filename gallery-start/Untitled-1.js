function createCat(name, breed, color) {
    const obj = {};
    obj.name = name;
    obj.breed = breed;
    obj.color = color; 
    obj.greeting = function() {
      console.log(`Hello, said ${ obj.name } the ${ obj.breed }.`);
    }
    return obj;
  }
  
  const cat = createCat('Bertie','Cymric','white')
  cat.name;
  cat.greeting();
  
  const cat2 = createCat('Elfie','Aphrodite Giant','ginger')
  cat2.name;
  cat2.greeting();

  const myObject = {
    city: 'Madrid',
    greet() {
      console.log(`Greetings from ${this.city}`);
    }
  }
  
  myObject.greet(); // Greetings from Madrid
myObject.toString()