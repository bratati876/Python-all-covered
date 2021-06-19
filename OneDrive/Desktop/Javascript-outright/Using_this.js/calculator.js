/*Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/


let cal={
   sum(){
       return this.a+this.b;   },
       mul(){
           return this.a*this.b;
       },
       read(){
           this.a = +prompt("enter a",0);
           this.b = +prompt("enter b",0);
       }
}

cal.read();
console.log( cal.sum() );
console.log( cal.mul() );