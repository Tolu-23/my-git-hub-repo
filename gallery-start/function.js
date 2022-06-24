function createPerson(name, year) {
  const obj = {};
  obj.name = name;
  obj.year = year;
  obj.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}. ${this.year}`);
  }
  return obj;
}
const salva = createPerson('Salva', 54);
salva.name;
salva.introduceSelf();

const frankie = createPerson('Frankie', 45);
frankie.name;
frankie.introduceSelf();

const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`'Hello, said ${cat.name} the ${cat.breed}.'`);
    }
  }
  
   const cat2 = {
    name : 'Hertie',
    breed : 'ebafent',
    color : 'grey',
    greeting: function() {
      console.log(`'Hello, said ${cat2.name} the ${cat2.breed}.'`);
    }
  }
  cat2.greeting()
  cat.greeting()
