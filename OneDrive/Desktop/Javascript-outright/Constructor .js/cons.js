 function Cal(){
    this.read=function(){
        this.a=+prompt("Enter a ",0);
        this.b=+prompt("Enter b", 0);
    }
  this.sum=function(){
      console.log(this.a+this.b);
  }

  this.mul=function(){
      console.log(this.a*this.b);
  }
}

let calculator = new Cal();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

