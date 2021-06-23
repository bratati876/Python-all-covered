// Write the code to sum all salaries and store in the variable sum
// If salaries is empty, then the result must be 0.


function isempty(obj){
    let sum=0;
    for(let key in obj){
         sum+=obj[key];
    }
    return sum;
   
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

 console.log( isempty(salaries));
