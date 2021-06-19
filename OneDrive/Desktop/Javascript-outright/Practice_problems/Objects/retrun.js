// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]



function retrun_array(obj){
   let key=Object.keys(obj);
   let val=Object.values(obj);
    key.sort();
   let result=[key,val];

   console.log(result);
}


retrun_array({a:1,d:2,c:3});