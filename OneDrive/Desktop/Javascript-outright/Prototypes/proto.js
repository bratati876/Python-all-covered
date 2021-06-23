// significance of the prototype object


function foobar(){
//    console.log("Its a function")
}

// console.log(foobar.prototype);


let obj= new foobar();
let obj2= new foobar();

// console.log(obj);
// console.log(obj2);

console.log(obj.prototype === foobar.prototype);
obj.name="bratati";
obj.__proto__.name="bratati";

delete obj.name;

console.log(obj.__proto__.name);
console.log(obj.name);

// console.log(obj);


