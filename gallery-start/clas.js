class Shape {

    name;
    sides;
    sideLength;
    

    constructor(name, side, sideLength){
        this.name = name;
        this.side = side;
        this.sideLength = sideLength;
    }
    
    calcPerimeter(){
        let i = (`${this.name}`)
        if(i === 'square'){
            console.log(`${this.sideLength * 4}`);
        }else if(i === 'triangle'){
            console.log(`${this.sideLength * 3}`);
        }else{
            console.log(`there is an error`);
        }
        
    }
  
  }

  const circle = new Shape('circle', 0, 13)
  circle.calcPerimeter()