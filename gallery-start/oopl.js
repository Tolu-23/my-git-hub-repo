const person = {
    name : {
        first: 'Bob',
        last: 'Smith'
      },
    age: 32,
    bio: function() {
      console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf: function() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    }
  };
  const myKataName = 'height';
const myKataValue = '1.75m';
person[myKataName] = myKataValue;

  person.age = 45
    person['name']['last'] = 'Cratchit'
    person['eyes'] = 'hazel';
    person.farewell = function() {
      console.log('Bye everybody!');
    }

  console.log(person['age'])
  console.log(person['name']['first'])
  console.log(person['name']['last'])
  console.log(person['eyes'])
  person.farewell()
  console.log(person.height)


  const person1 = {
    name: 'Chris',
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  
  const person2 = {
    name: 'Deepti',
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  const myDataName = 'height';
  const myDataValue = '1.75m';
  person1[myDataName] = myDataValue;  
  person1.introduceSelf()
  person2.introduceSelf()
  console.log('my heigth =', person1.height)
console.log(person2.name)