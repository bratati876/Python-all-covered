// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function mul(obj){
    
    for(let key in obj){
        if(typeof(obj[key])=="number")
        {
            obj[key]*=2;
        }
    }
}

mul(menu);

console.log(menu.height);

